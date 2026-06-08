const PROJECT_RULES = {
  "nha-o": { label: "Nhà ở, chung cư để ở", baseComp: 0.4, baseThdi: 15, risk: "Thấp - trung bình", solutionBias: "7%" },
  "building": { label: "Building văn phòng", baseComp: 0.4, baseThdi: 30, risk: "Trung bình - cao", solutionBias: "7%" },
  "thuong-mai": { label: "Trung tâm thương mại", baseComp: 0.4, baseThdi: 35, risk: "Cao", solutionBias: "13%" },
  "data-center": { label: "Data center", baseComp: 0.4, baseThdi: 45, risk: "Rất cao", solutionBias: "14%" },
  "server-room": { label: "Phòng server lớn", baseComp: 0.4, baseThdi: 40, risk: "Rất cao", solutionBias: "13%" },
  "co-khi": { label: "Nhà máy cơ khí thông thường", baseComp: 0.5, baseThdi: 30, risk: "Trung bình - cao", solutionBias: "7%" },
  "nhua-bao-bi": { label: "Nhà máy nhựa, bao bì", baseComp: 0.5, baseThdi: 40, risk: "Cao", solutionBias: "13%" },
  "det-may": { label: "Nhà máy dệt, may", baseComp: 0.5, baseThdi: 35, risk: "Cao", solutionBias: "13%" },
  "thuc-pham": { label: "Nhà máy thực phẩm, thủy sản", baseComp: 0.5, baseThdi: 35, risk: "Cao", solutionBias: "13%" },
  "xi-mang": { label: "Nhà máy xi măng, khai khoáng", baseComp: 0.5, baseThdi: 40, risk: "Cao", solutionBias: "13%" },
  "thep": { label: "Nhà máy thép, luyện kim", baseComp: 0.6, baseThdi: 70, risk: "Rất cao", solutionBias: "14%" },
  "lo-ho-quang": { label: "Lò hồ quang, lò cảm ứng lớn", baseComp: 0.6, baseThdi: 90, risk: "Cực cao", solutionBias: "14%" },
};

const NONLINEAR_WEIGHTS = {
  motorDirectPct: 0.05,
  vfdPct: 1,
  hvacPct: 0.45,
  upsPct: 1,
  ledPct: 0.9,
  rectifierPct: 1,
  weldingPct: 0.95,
  furnacePct: 1,
};

const STANDARD_CAP_VOLTAGES = [415, 440, 480, 525, 690];

const form = document.getElementById("analysisForm");
const exportPdfButton = document.getElementById("exportPdfButton");
const brandLogo = document.getElementById("brandLogo");
let latestReport = null;

function readFormData() {
  const data = new FormData(form);
  const result = {};
  for (const [key, value] of data.entries()) {
    result[key] = value;
  }
  return {
    projectType: result.projectType,
    compensationMethod: result.compensationMethod,
    ratedVoltage: toNumber(result.ratedVoltage),
    frequency: toNumber(result.frequency),
    wiring: result.wiring,
    parallelTransformers: toNumber(result.parallelTransformers, 1),
    transformerKva: toNumber(result.transformerKva),
    ukPercent: toNumber(result.ukPercent),
    iscKa: toNumber(result.iscKa),
    loadPowerKw: toNumber(result.loadPowerKw),
    ku: toNumber(result.ku, 1),
    loadCurrentA: toNumber(result.loadCurrentA),
    cosPhiBefore: toNumber(result.cosPhiBefore),
    cosPhiTarget: toNumber(result.cosPhiTarget),
    hasGenerator: result.hasGenerator === "yes",
    generatorKva: toNumber(result.generatorKva),
    hasSolar: result.hasSolar === "yes",
    solarKw: toNumber(result.solarKw),
    motorDirectPct: toNumber(result.motorDirectPct),
    vfdPct: toNumber(result.vfdPct),
    hvacPct: toNumber(result.hvacPct),
    upsPct: toNumber(result.upsPct),
    ledPct: toNumber(result.ledPct),
    singlePhasePct: toNumber(result.singlePhasePct),
    rectifierPct: toNumber(result.rectifierPct),
    weldingPct: toNumber(result.weldingPct),
    furnacePct: toNumber(result.furnacePct),
    rectifierPulse: toNumber(result.rectifierPulse),
    rapidFluctuation: result.rapidFluctuation === "yes",
    operatingHours: toNumber(result.operatingHours),
  };
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function round(value, digits = 1) {
  return Number(value.toFixed(digits));
}

function formatNumber(value, digits = 1, unit = "") {
  if (!Number.isFinite(value)) return "--";
  return `${new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: value % 1 === 0 ? 0 : digits,
    maximumFractionDigits: digits,
  }).format(value)}${unit ? ` ${unit}` : ""}`;
}

function nearestCapVoltage(value) {
  return STANDARD_CAP_VOLTAGES.find((item) => item >= value) || STANDARD_CAP_VOLTAGES[STANDARD_CAP_VOLTAGES.length - 1];
}

function transformerCurrentA(totalKva, voltage) {
  return (totalKva * 1000) / (Math.sqrt(3) * voltage);
}

function estimateIscKa(inominalA, ukPercent) {
  if (!inominalA || !ukPercent) return 0;
  return (100 / ukPercent) * inominalA / 1000;
}

function compensationByCosphi(loadPowerKw, cosPhiBefore, cosPhiTarget) {
  if (loadPowerKw <= 0 || cosPhiBefore <= 0 || cosPhiTarget <= 0 || cosPhiBefore >= 1 || cosPhiTarget >= 1) {
    return 0;
  }
  const q1 = Math.tan(Math.acos(clamp(cosPhiBefore, 0.01, 0.999)));
  const q2 = Math.tan(Math.acos(clamp(cosPhiTarget, 0.01, 0.999)));
  return Math.max(0, loadPowerKw * (q1 - q2));
}

function loadDeclaredPercent(input) {
  return input.motorDirectPct + input.vfdPct + input.hvacPct + input.upsPct + input.ledPct + input.rectifierPct + input.weldingPct + input.furnacePct;
}

function nonlinearShare(input) {
  return round(
    Object.entries(NONLINEAR_WEIGHTS).reduce((total, [key, weight]) => total + input[key] * weight, 0),
    1
  );
}

function predictThdi(input, rules, nonlinearPct) {
  let thdi = rules.baseThdi;

  if (nonlinearPct < 15) thdi -= 5;
  else if (nonlinearPct >= 30 && nonlinearPct < 50) thdi += 8;
  else if (nonlinearPct >= 50 && nonlinearPct < 60) thdi += 15;
  else if (nonlinearPct >= 60) thdi += 25;

  if (input.vfdPct >= 15 && input.vfdPct < 30) thdi += 3;
  else if (input.vfdPct >= 30 && input.vfdPct < 50) thdi += 8;
  else if (input.vfdPct >= 50) thdi += 15;

  if (input.upsPct > 20) thdi += 8;
  if (input.singlePhasePct > 40) thdi += 5;
  if (input.weldingPct + input.furnacePct > 10) thdi += 15;
  if (input.rapidFluctuation) thdi += 10;
  if (input.hasSolar && input.solarKw > 0) thdi += 3;
  if (input.hasGenerator && input.generatorKva > 0) thdi += 2;

  return clamp(round(thdi, 1), 5, 120);
}

function predictThdu(thdi, iscKa, ilA) {
  if (!iscKa || !ilA) return round(Math.min(12, thdi * 0.2), 1);
  const shortCircuitRatio = (iscKa * 1000) / Math.max(ilA, 1);
  const factor = shortCircuitRatio < 20 ? 0.32 : shortCircuitRatio < 35 ? 0.24 : 0.18;
  return round(Math.min(12, thdi * factor), 1);
}

function recommendReactor(thdi, nonlinearPct, input, rules) {
  const heavyProcess = input.weldingPct + input.furnacePct;
  const officeElectronics = input.upsPct + input.ledPct;

  if (thdi < 15 && nonlinearPct < 15) return "6%";
  if (heavyProcess > 20 || rules.solutionBias === "14%" || thdi > 35) return "14%";
  if (officeElectronics > 25 || thdi >= 25) return "13%";
  if (nonlinearPct >= 20 && nonlinearPct < 25) return "8%";
  return "7%";
}

function recommendSolution(thdi, reactorPct, ahfNeeded) {
  if (ahfNeeded || thdi > 40) return `AHF/SVG + tụ bù có cuộn kháng ${reactorPct}`;
  if (thdi > 35) return `Tụ bù + cuộn kháng ${reactorPct}, cân nhắc AHF`;
  if (thdi > 25) return `Tụ bù + cuộn kháng ${reactorPct}`;
  if (thdi > 15) return `Tụ bù + cuộn kháng ${reactorPct}`;
  return "Tụ bù thường hoặc tụ bù + cuộn kháng 6%";
}

function recommendCapModel(totalKvar) {
  if (totalKvar <= 50) return "Tụ tròn MASTER MT-MKC";
  if (totalKvar <= 100) return "Tụ vuông MASTER MT-MKS / MT-MKD";
  return "Tụ bù theo cấp, ưu tiên module MT-MKD có chia cấp đóng cắt";
}

function estimateAhf(input, thdi, ilA, voltage) {
  const targetThdi = input.projectType === "data-center" || input.projectType === "server-room" ? 8 : 10;
  const reductionPct = Math.max(0, thdi - targetThdi);
  const filterCurrentA = ilA * (reductionPct / 100);
  const recommendedA = filterCurrentA * 1.25;
  const recommendedKva = (Math.sqrt(3) * voltage * recommendedA) / 1000;
  return {
    targetThdi,
    recommendedA: round(recommendedA, 1),
    recommendedKva: round(recommendedKva, 1),
  };
}

function pulseHarmonics(pulse) {
  if (!pulse) return [];
  const result = [];
  for (let n = 1; n <= 5; n += 1) {
    result.push(`${pulse * n - 1}`);
    result.push(`${pulse * n + 1}`);
  }
  return result;
}

function buildWarnings(input, computed) {
  const warnings = [];
  const heavyProcess = input.weldingPct + input.furnacePct;

  if (computed.declaredPct > 105) {
    warnings.push({
      level: "warning",
      title: "Tổng tỷ lệ nhóm tải vượt 100%",
      body: `Tổng tỷ lệ đang là ${formatNumber(computed.declaredPct, 0, "%")}. Số liệu có nguy cơ chồng lắp giữa các nhóm tải, cần chuẩn hóa lại để dự báo THDi và AHF không bị đội lên giả.`,
    });
  } else if (computed.declaredPct < 70) {
    warnings.push({
      level: "warning",
      title: "Tỷ lệ khai báo tải chưa đầy đủ",
      body: `Mới khai báo ${formatNumber(computed.declaredPct, 0, "%")} tổng tải. Phần chưa khai báo sẽ làm mờ nhạt đánh giá sóng hài và chọn cuộn kháng.`,
    });
  }

  if (computed.nonlinearPct >= 40) {
    warnings.push({
      level: "danger",
      title: "Tải phi tuyến cao",
      body: `Tải phi tuyến quy đổi đạt ${formatNumber(computed.nonlinearPct, 1, "%")}, vượt ngưỡng 40%. Nguy cơ cộng hưởng song song, quá dòng tụ bù và nóng tủ điều khiển tăng mạnh nếu dùng tụ thường.`,
    });
  }

  if (input.singlePhasePct > 40) {
    warnings.push({
      level: "danger",
      title: "Cảnh báo dòng trung tính do tải 1 pha",
      body: `Tải 1 pha chiếm ${formatNumber(input.singlePhasePct, 0, "%")}. Các hài bậc 3, 9, 15 có thể cộng dồn trên dây trung tính, gây nóng dây N và lệch pha điện áp.`,
    });
  }

  if (input.upsPct > 20) {
    warnings.push({
      level: "danger",
      title: "UPS cao làm tăng sóng hài dòng",
      body: `UPS chiếm ${formatNumber(input.upsPct, 0, "%")} tổng tải. Đây là nhóm tải chuyển mạch có thể kéo THDi tăng nhanh và đẩy yêu cầu dùng cuộn kháng mức cao hơn hoặc bổ sung AHF.`,
    });
  }

  if (heavyProcess > 10) {
    warnings.push({
      level: "danger",
      title: "Tải hàn / lò nhiệt / lò cảm ứng đáng kể",
      body: `Tổng tải hàn và lò đạt ${formatNumber(heavyProcess, 0, "%")}. Nhóm tải này có biến động nhanh, sinh hài nặng và có thể phát sinh flicker, do đó AHF hoặc AHF + SVG nên được xem là yêu cầu bắt buộc.`,
    });
  }

  if (computed.shortCircuitRatio > 0 && computed.shortCircuitRatio < 20) {
    warnings.push({
      level: "warning",
      title: "Hệ thống có độ cứng ngắn mạch thấp",
      body: `Tỷ số Isc/IL chỉ khoảng ${formatNumber(computed.shortCircuitRatio, 1)}. Lưới yếu sẽ nhạy cảm hơn với THDu, dễ bị méo điện áp và đẩy biên áp trên tụ khi đóng cấp bù.`,
    });
  }

  if (input.hasGenerator && input.generatorKva > 0) {
    warnings.push({
      level: "warning",
      title: "Cần kiểm tra chế độ chạy bằng máy phát",
      body: "Khi vận hành bằng máy phát, tổng trở hệ thống tăng và dự phòng ngắn mạch giảm. Cần khóa cấp bù hoặc chia cấp lại để tránh nhảy điện áp và quá dòng.",
    });
  }

  if (input.rapidFluctuation) {
    warnings.push({
      level: "warning",
      title: "Tải biến động nhanh",
      body: "Tải biến động nhanh có thể gây dao động công suất, flicker và dòng đóng cắt cấp bù cao. Cần ưu tiên điều khiển đóng cắt nhanh, cân nhắc SVG/AHF và đo PQ sau vận hành.",
    });
  }

  if (!warnings.length) {
    warnings.push({
      level: "ok",
      title: "Chưa ghi nhận cảnh báo nghiêm trọng",
      body: "Cấu hình hiện tại nằm trong vùng khá an toàn. Vẫn nên xác minh bằng dữ liệu demand và đo PQ khi lắp đặt thực tế.",
    });
  }

  return warnings;
}

function computeReport(input) {
  const rules = PROJECT_RULES[input.projectType];
  const totalTransformerKva = input.transformerKva * Math.max(input.parallelTransformers, 1);
  const inA = transformerCurrentA(totalTransformerKva, input.ratedVoltage);
  const ilA = input.loadCurrentA > 0 ? input.loadCurrentA : input.ku * inA;
  const iscKa = input.iscKa > 0 ? input.iscKa : estimateIscKa(inA, input.ukPercent);
  const shortCircuitRatio = iscKa > 0 ? (iscKa * 1000) / Math.max(ilA, 1) : 0;
  const baseCompKvar = totalTransformerKva * rules.baseComp;
  const cosCompKvar = compensationByCosphi(input.loadPowerKw, input.cosPhiBefore, input.cosPhiTarget);
  const totalKvar = Math.max(baseCompKvar, cosCompKvar);
  const declaredPct = loadDeclaredPercent(input);
  const nonlinearPct = nonlinearShare(input);
  const thdi = predictThdi(input, rules, nonlinearPct);
  const thdu = predictThdu(thdi, iscKa, ilA);
  const reactorPct = recommendReactor(thdi, nonlinearPct, input, rules);
  const capVoltageRaw = 1.05 * input.ratedVoltage / (1 - parseInt(reactorPct, 10) / 100);
  const capVoltage = nearestCapVoltage(capVoltageRaw);
  const heavyProcess = input.weldingPct + input.furnacePct;
  const ahfNeeded = thdi > 40 || heavyProcess > 10 || input.rapidFluctuation;
  const ahf = estimateAhf(input, thdi, ilA, input.ratedVoltage);
  const solution = recommendSolution(thdi, reactorPct, ahfNeeded);
  const capModel = recommendCapModel(totalKvar);
  const harmonics = pulseHarmonics(input.rectifierPulse);
  const warnings = buildWarnings(input, { declaredPct, nonlinearPct, shortCircuitRatio });

  return {
    input,
    rules,
    totalTransformerKva,
    inA,
    ilA,
    iscKa,
    shortCircuitRatio,
    baseCompKvar: round(baseCompKvar, 1),
    cosCompKvar: round(cosCompKvar, 1),
    totalKvar: round(totalKvar, 1),
    declaredPct,
    nonlinearPct,
    thdi,
    thdu,
    reactorPct,
    capVoltage,
    capVoltageRaw: round(capVoltageRaw, 1),
    ahfNeeded,
    ahf,
    solution,
    capModel,
    harmonics,
    warnings,
  };
}

function renderReport(report) {
  latestReport = report;

  document.getElementById("heroThdi").textContent = formatNumber(report.thdi, 1, "%");
  document.getElementById("heroSolution").textContent = report.solution;
  document.getElementById("summaryMbaKvar").textContent = formatNumber(report.baseCompKvar, 1, "kVAr");
  document.getElementById("summaryCosKvar").textContent = formatNumber(report.cosCompKvar, 1, "kVAr");
  document.getElementById("summaryTotalKvar").textContent = formatNumber(report.totalKvar, 1, "kVAr");
  document.getElementById("summaryReactor").textContent = report.reactorPct;
  document.getElementById("summaryAhf").textContent = report.ahfNeeded
    ? `${formatNumber(report.ahf.recommendedA, 1, "A")} / ${formatNumber(report.ahf.recommendedKva, 1, "kVA")}`
    : "Chưa cần AHF";
  document.getElementById("summaryCapVoltage").textContent = `${report.capVoltage} VAC`;

  const narrative = [
    `Loại công trình <strong>${report.rules.label}</strong> được gán mức THDi nền ${formatNumber(report.rules.baseThdi, 0, "%")} theo tài liệu, sau đó điều chỉnh theo tỷ lệ tải phi tuyến quy đổi <strong>${formatNumber(report.nonlinearPct, 1, "%")}</strong>.`,
    `Công suất bù đề xuất theo MBA đạt <strong>${formatNumber(report.baseCompKvar, 1, "kVAr")}</strong>, trong khi nhu cầu theo cosphi đạt <strong>${formatNumber(report.cosCompKvar, 1, "kVAr")}</strong>. Giá trị chọn sơ bộ là <strong>${formatNumber(report.totalKvar, 1, "kVAr")}</strong>.`,
    `Dòng định mức MBA xấp xỉ <strong>${formatNumber(report.inA, 1, "A")}</strong>, dòng tải sử dụng <strong>${formatNumber(report.ilA, 1, "A")}</strong>, Isc đánh giá <strong>${formatNumber(report.iscKa, 1, "kA")}</strong>. THDu ước tính <strong>${formatNumber(report.thdu, 1, "%")}</strong> để theo dõi nguy cơ méo điện áp.`,
    `Giải pháp được đề xuất là <strong>${report.solution}</strong>; ưu tiên <strong>${report.capModel}</strong>, cuộn kháng <strong>${report.reactorPct}</strong>, điện áp tụ không nên thấp hơn <strong>${report.capVoltage} VAC</strong>.`,
    report.ahfNeeded
      ? `Do THDi cao hoặc có tải biến động nặng, cân nhắc AHF mục tiêu THDi sau lọc ${formatNumber(report.ahf.targetThdi, 0, "%")} với công suất sơ bộ <strong>${formatNumber(report.ahf.recommendedA, 1, "A")}</strong> (${formatNumber(report.ahf.recommendedKva, 1, "kVA")}).`
      : "Cấu hình hiện tại chưa bắt buộc AHF, tuy nhiên vẫn nên đo PQ thực tế sau khi vận hành nếu dự án có load profile biến thiên.",
  ];
  document.getElementById("analysisNarrative").innerHTML = narrative.map((item) => `<p>${item}</p>`).join("");

  const warningsHtml = report.warnings.map((warning) => `
    <article class="warning warning--${warning.level}">
      <h4>${warning.title}</h4>
      <p>${warning.body}</p>
    </article>
  `).join("");
  document.getElementById("warningsList").innerHTML = warningsHtml;

  const harmonicPills = report.harmonics.length
    ? report.harmonics.map((item) => `<span class="pill">H${item}</span>`).join("")
    : `<span class="pill pill--muted">Không có nguồn chỉnh lưu nổi bật</span>`;
  document.getElementById("harmonicList").innerHTML = `
    <p>Bộ chỉnh lưu ${report.input.rectifierPulse || 0} xung có xu hướng sinh các bậc hài ưu thế:</p>
    <div class="pill-row">${harmonicPills}</div>
  `;
}

function getImageDataUrl(image) {
  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  return canvas.toDataURL("image/png");
}

async function exportPdf() {
  if (!latestReport) return;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const left = 15;
  let y = 18;

  if (brandLogo?.complete) {
    const logoDataUrl = getImageDataUrl(brandLogo);
    doc.addImage(logoDataUrl, "PNG", 150, 10, 42, 25, undefined, "FAST");
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("MASTER Advisor Report", left, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Loại công trình: ${latestReport.rules.label}`, left, y);
  y += 6;
  doc.text(`Ngày xuất: ${new Date().toLocaleString("vi-VN")}`, left, y);
  y += 10;

  const lines = [
    `Công suất MBA tổng: ${formatNumber(latestReport.totalTransformerKva, 1, "kVA")}`,
    `Công suất bù theo MBA: ${formatNumber(latestReport.baseCompKvar, 1, "kVAr")}`,
    `Công suất bù theo cosphi: ${formatNumber(latestReport.cosCompKvar, 1, "kVAr")}`,
    `Dung lượng đề xuất: ${formatNumber(latestReport.totalKvar, 1, "kVAr")}`,
    `THDi / THDu dự đoán: ${formatNumber(latestReport.thdi, 1, "%")} / ${formatNumber(latestReport.thdu, 1, "%")}`,
    `Cuộn kháng đề xuất: ${latestReport.reactorPct}`,
    `Điện áp tụ đề xuất: ${latestReport.capVoltage} VAC`,
    `Loại tụ phù hợp: ${latestReport.capModel}`,
    latestReport.ahfNeeded
      ? `AHF đề xuất: ${formatNumber(latestReport.ahf.recommendedA, 1, "A")} (${formatNumber(latestReport.ahf.recommendedKva, 1, "kVA")})`
      : "AHF đề xuất: Chưa bắt buộc",
    `Giải pháp tổng thể: ${latestReport.solution}`,
  ];

  lines.forEach((line) => {
    const wrapped = doc.splitTextToSize(line, 180);
    doc.text(wrapped, left, y);
    y += wrapped.length * 5;
  });

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.text("Cảnh báo kỹ thuật", left, y);
  y += 6;
  doc.setFont("helvetica", "normal");

  latestReport.warnings.forEach((warning, index) => {
    const text = `${index + 1}. ${warning.title}: ${warning.body}`;
    const wrapped = doc.splitTextToSize(text, 180);
    if (y + wrapped.length * 5 > 280) {
      doc.addPage();
      y = 18;
    }
    doc.text(wrapped, left, y);
    y += wrapped.length * 5 + 2;
  });

  doc.save(`MASTER-report-${Date.now()}.pdf`);
}

function runAnalysis() {
  const input = readFormData();
  const report = computeReport(input);
  renderReport(report);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runAnalysis();
});

form.addEventListener("input", () => {
  runAnalysis();
});

exportPdfButton.addEventListener("click", exportPdf);

runAnalysis();
