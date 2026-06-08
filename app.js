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

const PRESET_VALUES = {
  "nha-o": { transformerKva: 750, loadPowerKw: 500, cosPhiBefore: 0.86, cosPhiTarget: 0.96, motorDirectPct: 12, vfdPct: 12, upsPct: 4, ledPct: 18, hvacPct: 16, rectifierPct: 2, weldingPct: 0, furnacePct: 0, singlePhasePct: 55 },
  "building": { transformerKva: 1000, loadPowerKw: 850, cosPhiBefore: 0.84, cosPhiTarget: 0.96, motorDirectPct: 18, vfdPct: 18, upsPct: 12, ledPct: 18, hvacPct: 22, rectifierPct: 4, weldingPct: 0, furnacePct: 0, singlePhasePct: 35 },
  "thuong-mai": { transformerKva: 1250, loadPowerKw: 980, cosPhiBefore: 0.83, cosPhiTarget: 0.96, motorDirectPct: 12, vfdPct: 20, upsPct: 10, ledPct: 20, hvacPct: 24, rectifierPct: 5, weldingPct: 0, furnacePct: 0, singlePhasePct: 45 },
  "data-center": { transformerKva: 1600, loadPowerKw: 1200, cosPhiBefore: 0.9, cosPhiTarget: 0.98, motorDirectPct: 5, vfdPct: 12, upsPct: 32, ledPct: 18, hvacPct: 18, rectifierPct: 10, weldingPct: 0, furnacePct: 0, singlePhasePct: 28 },
  "server-room": { transformerKva: 1000, loadPowerKw: 700, cosPhiBefore: 0.89, cosPhiTarget: 0.98, motorDirectPct: 5, vfdPct: 10, upsPct: 28, ledPct: 16, hvacPct: 20, rectifierPct: 8, weldingPct: 0, furnacePct: 0, singlePhasePct: 25 },
  "co-khi": { transformerKva: 1250, loadPowerKw: 950, cosPhiBefore: 0.82, cosPhiTarget: 0.95, motorDirectPct: 28, vfdPct: 16, upsPct: 2, ledPct: 6, hvacPct: 10, rectifierPct: 6, weldingPct: 10, furnacePct: 0, singlePhasePct: 12 },
  "nhua-bao-bi": { transformerKva: 1600, loadPowerKw: 1300, cosPhiBefore: 0.8, cosPhiTarget: 0.95, motorDirectPct: 14, vfdPct: 28, upsPct: 2, ledPct: 5, hvacPct: 12, rectifierPct: 8, weldingPct: 3, furnacePct: 12, singlePhasePct: 10 },
  "det-may": { transformerKva: 1250, loadPowerKw: 980, cosPhiBefore: 0.81, cosPhiTarget: 0.95, motorDirectPct: 18, vfdPct: 24, upsPct: 2, ledPct: 10, hvacPct: 12, rectifierPct: 4, weldingPct: 0, furnacePct: 3, singlePhasePct: 18 },
  "thuc-pham": { transformerKva: 1250, loadPowerKw: 990, cosPhiBefore: 0.82, cosPhiTarget: 0.95, motorDirectPct: 18, vfdPct: 22, upsPct: 3, ledPct: 7, hvacPct: 20, rectifierPct: 5, weldingPct: 0, furnacePct: 5, singlePhasePct: 15 },
  "xi-mang": { transformerKva: 2000, loadPowerKw: 1600, cosPhiBefore: 0.81, cosPhiTarget: 0.95, motorDirectPct: 24, vfdPct: 22, upsPct: 2, ledPct: 4, hvacPct: 8, rectifierPct: 8, weldingPct: 6, furnacePct: 6, singlePhasePct: 8 },
  "thep": { transformerKva: 2500, loadPowerKw: 2100, cosPhiBefore: 0.78, cosPhiTarget: 0.95, motorDirectPct: 12, vfdPct: 20, upsPct: 2, ledPct: 3, hvacPct: 6, rectifierPct: 14, weldingPct: 16, furnacePct: 18, singlePhasePct: 6 },
  "lo-ho-quang": { transformerKva: 3000, loadPowerKw: 2500, cosPhiBefore: 0.76, cosPhiTarget: 0.95, motorDirectPct: 8, vfdPct: 16, upsPct: 1, ledPct: 2, hvacPct: 4, rectifierPct: 15, weldingPct: 14, furnacePct: 24, singlePhasePct: 4 },
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
const exportWordButton = document.getElementById("exportWordButton");
const brandLogo = document.getElementById("brandLogo");
const projectSelectRaw = form.elements.projectType;
const projectSelect = {
  get value() {
    return projectSelectRaw instanceof RadioNodeList ? projectSelectRaw.value : (projectSelectRaw?.value || "");
  },
  set value(val) {
    if (projectSelectRaw instanceof RadioNodeList) {
      projectSelectRaw.value = val;
    } else if (projectSelectRaw) {
      projectSelectRaw.value = val;
    }
  },
  addEventListener(event, callback) {
    if (projectSelectRaw instanceof RadioNodeList) {
      projectSelectRaw.forEach((radio) => {
        radio.addEventListener(event, callback);
      });
    } else if (projectSelectRaw) {
      projectSelectRaw.addEventListener(event, callback);
    }
  }
};
const presetButtons = document.querySelectorAll("[data-project-preset]");
const mirroredInputs = document.querySelectorAll("[data-mirror]");
const conditionalFields = document.querySelectorAll("[data-show-if]");
const projectPresetNote = document.getElementById("projectPresetNote");
const declaredPctLabel = document.getElementById("declaredPctLabel");
const nonlinearPctLabel = document.getElementById("nonlinearPctLabel");
const loadMixHint = document.getElementById("loadMixHint");
const declaredPctBar = document.getElementById("declaredPctBar");


let latestReport = null;

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

function setFieldValue(name, value) {
  const field = form.elements[name];
  if (!field) return;
  field.value = value;
  updateMirror(name, value);
}

function updateMirror(name, value) {
  const mirror = document.querySelector(`[data-mirror="${name}"]`);
  if (mirror) mirror.value = value;
}

function applyProjectPreset(projectType) {
  const preset = PRESET_VALUES[projectType];
  const rule = PROJECT_RULES[projectType];
  if (!preset || !rule) return;

  Object.entries(preset).forEach(([name, value]) => setFieldValue(name, value));
  projectSelect.value = projectType;
  if (projectPresetNote) {
    projectPresetNote.innerHTML = `
      <h3>${rule.label}</h3>
      <p>THDi nền ${rule.baseThdi}% • Bù sơ bộ ${rule.baseComp * 100}% MBA</p>
    `;
  }
  runAnalysis();
}

function syncMirrorsFromForm() {
  mirroredInputs.forEach((input) => {
    const name = input.dataset.mirror;
    input.value = form.elements[name].value;
  });
}

function bindMirrors() {
  mirroredInputs.forEach((input) => {
    const source = form.elements[input.dataset.mirror];
    input.addEventListener("input", () => {
      const value = clamp(toNumber(input.value), 0, 100);
      source.value = value;
      input.value = value;
      runAnalysis();
    });
    source.addEventListener("input", () => {
      input.value = source.value;
    });
  });
}

function updateConditionalFields() {
  conditionalFields.forEach((field) => {
    const [name, expected] = field.dataset.showIf.split(":");
    const visible = form.elements[name]?.value === expected;
    field.classList.toggle("is-hidden", !visible);
  });
}

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

function renderInputHealth(report) {
  declaredPctLabel.textContent = formatNumber(report.declaredPct, 0, "%");
  nonlinearPctLabel.textContent = formatNumber(report.nonlinearPct, 1, "%");

  let hint = "Cơ cấu tải hợp lý";
  if (report.declaredPct < 70) hint = "Thiếu nhóm tải";
  else if (report.declaredPct > 105) hint = "Có khả năng chồng lắp";
  else if (report.nonlinearPct > 40) hint = "Phi tuyến rất cao";
  else if (report.nonlinearPct > 25) hint = "Phi tuyến đáng chú ý";
  loadMixHint.textContent = hint;

  const width = clamp(report.declaredPct, 0, 120) / 1.2;
  declaredPctBar.style.width = `${width}%`;
  declaredPctBar.style.background = report.declaredPct > 105
    ? "linear-gradient(90deg, #c2410c, #f97316)"
    : report.declaredPct < 70
      ? "linear-gradient(90deg, #b7791f, #eab308)"
      : "linear-gradient(90deg, #0f6c5c, #41b49c)";
}

function renderReport(report) {
  latestReport = report;
  renderInputHealth(report);

  document.getElementById("sidebarThdi").textContent = formatNumber(report.thdi, 1, "%");
  document.getElementById("sidebarSolution").textContent = report.solution;
  document.getElementById("summaryMbaKvar").textContent = formatNumber(report.baseCompKvar, 1, "kVAr");
  document.getElementById("summaryCosKvar").textContent = formatNumber(report.cosCompKvar, 1, "kVAr");
  document.getElementById("summaryTotalKvar").textContent = formatNumber(report.totalKvar, 1, "kVAr");
  document.getElementById("summaryReactor").textContent = report.reactorPct;
  document.getElementById("summaryAhf").textContent = report.ahfNeeded
    ? `${formatNumber(report.ahf.recommendedA, 1, "A")} / ${formatNumber(report.ahf.recommendedKva, 1, "kVA")}`
    : "Chưa cần AHF";
  document.getElementById("summaryCapVoltage").textContent = `${report.capVoltage} VAC`;

  const narrative = [
    `Loại công trình <strong>${report.rules.label}</strong> được gán mức THDi nền ${formatNumber(report.rules.baseThdi, 0, "%")} và hệ số bù sơ bộ ${report.rules.baseComp * 100}% công suất MBA.`,
    `Với cơ cấu tải hiện tại, phần mềm đánh giá tải phi tuyến quy đổi ở mức <strong>${formatNumber(report.nonlinearPct, 1, "%")}</strong> và chọn dung lượng bù sơ bộ <strong>${formatNumber(report.totalKvar, 1, "kVAr")}</strong>.`,
    `Dòng tải sử dụng khoảng <strong>${formatNumber(report.ilA, 1, "A")}</strong>, Isc đánh giá <strong>${formatNumber(report.iscKa, 1, "kA")}</strong>, THDu ước tính <strong>${formatNumber(report.thdu, 1, "%")}</strong>.`,
    `Giải pháp đang nghiêng về <strong>${report.solution}</strong>; ưu tiên <strong>${report.capModel}</strong> với điện áp tụ không thấp hơn <strong>${report.capVoltage} VAC</strong>.`,
    report.ahfNeeded
      ? `Do rủi ro hài cao, nên cân nhắc AHF mục tiêu THDi sau lọc ${formatNumber(report.ahf.targetThdi, 0, "%")} với sizing sơ bộ <strong>${formatNumber(report.ahf.recommendedA, 1, "A")}</strong> (${formatNumber(report.ahf.recommendedKva, 1, "kVA")}).`
      : "Cấu hình hiện tại chưa bắt buộc AHF, nhưng vẫn nên đo PQ thực tế khi dự án đi vào vận hành.",
  ];
  document.getElementById("analysisNarrative").innerHTML = narrative.map((item) => `<p>${item}</p>`).join("");

  const warningsHtml = report.warnings.map((warning) => {
    let icon = "";
    if (warning.level === "danger") {
      icon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    } else if (warning.level === "warning") {
      icon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
    } else {
      icon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg>`;
    }
    return `
      <article class="warning warning--${warning.level}">
        <h4>${icon}${warning.title}</h4>
        <p>${warning.body}</p>
      </article>
    `;
  }).join("");
  document.getElementById("warningsList").innerHTML = warningsHtml;

  const harmonicPills = report.harmonics.length
    ? report.harmonics.map((item) => `<span class="pill">H${item}</span>`).join("")
    : `<span class="pill pill--muted">Không có nguồn chỉnh lưu nổi bật</span>`;
  document.getElementById("harmonicList").innerHTML = `
    <p>Bộ chỉnh lưu ${report.input.rectifierPulse || 0} xung có xu hướng sinh các bậc hài ưu thế:</p>
    <div class="pill-row">${harmonicPills}</div>
  `;

  updateOscilloscope(report);
}

function updateOscilloscope(report) {
  const scopeWave = document.getElementById("scopeWave");
  const scopeArea = document.getElementById("scopeArea");
  const scopeStatus = document.getElementById("scopeStatus");
  const scopeThdiVal = document.getElementById("scopeThdiVal");
  const scopeHarmonicsVal = document.getElementById("scopeHarmonicsVal");

  if (!scopeWave || !scopeArea) return;

  const thdiVal = report.thdi || 0;
  scopeThdiVal.textContent = formatNumber(thdiVal, 1, "%");

  let color = "#13795b"; // default --ok green
  let bgColor = "#ecfbf5"; // light green
  let statusText = "ỔN ĐỊNH";

  if (thdiVal > 40) {
    color = "#c2410c"; // --danger orange/red
    bgColor = "#fff1ec";
    statusText = "MÉO DẠNG NẶNG (NGUY HIỂM)";
  } else if (thdiVal > 25) {
    color = "#b7791f"; // --warn orange
    bgColor = "#fff9e8";
    statusText = "MÉO DẠNG ĐÁNG KỂ";
  } else if (thdiVal > 15) {
    color = "#2563eb"; // blue
    bgColor = "#eef6ff";
    statusText = "DAO ĐỘNG NHẸ";
  }

  scopeStatus.textContent = statusText;
  scopeStatus.style.color = color;
  scopeStatus.style.backgroundColor = bgColor;
  scopeWave.style.stroke = color;
  scopeArea.style.color = color;

  if (report.harmonics && report.harmonics.length) {
    scopeHarmonicsVal.textContent = report.harmonics.map((h) => `H${h}`).join(", ");
  } else {
    scopeHarmonicsVal.textContent = "Không nổi bật";
  }

  const width = 300;
  const baseline = 65;
  const maxAmp = 40;

  const points = [];
  const d = Math.min((thdiVal / 100) * 1.8, 1.2);

  for (let x = 0; x <= width; x += 3) {
    const radians = (x / width) * 2 * Math.PI * 2;
    let y = Math.sin(radians);

    if (d > 0.05) {
      y += d * 0.28 * Math.sin(3 * radians);
      y -= d * 0.18 * Math.sin(5 * radians);
      y += d * 0.12 * Math.sin(7 * radians);
    }

    const scale = 1 / (1 + d * 0.55);
    const finalY = baseline - (y * scale * maxAmp);
    points.push(`${x},${finalY.toFixed(1)}`);
  }

  const pathD = `M ${points.join(" L ")}`;
  scopeWave.setAttribute("d", pathD);

  const areaPathD = `M 0 130 L ${points.join(" L ")} L 300 130 Z`;
  scopeArea.setAttribute("d", areaPathD);
}



function getImageDataUrl(image) {
  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  return canvas.toDataURL("image/png");
}

let regularFontBase64 = null;
let boldFontBase64 = null;

function uint8ArrayToBase64(uint8) {
  const CHUNK_SIZE = 0x8000;
  let index = 0;
  const length = uint8.length;
  let result = '';
  let slice;
  while (index < length) {
    slice = uint8.subarray(index, Math.min(index + CHUNK_SIZE, length));
    result += String.fromCharCode.apply(null, slice);
    index += CHUNK_SIZE;
  }
  return window.btoa(result);
}

function convertVietnameseAccents(str) {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

async function loadFonts() {
  if (regularFontBase64 && boldFontBase64) return true;

  const originalText = exportPdfButton.textContent;
  exportPdfButton.textContent = "Đang tải font Việt...";
  exportPdfButton.disabled = true;

  try {
    let regRes, boldRes;
    try {
      [regRes, boldRes] = await Promise.all([
        fetch("./assets/fonts/Montserrat-Regular.ttf"),
        fetch("./assets/fonts/Montserrat-Bold.ttf")
      ]);
      if (!regRes.ok || !boldRes.ok) {
        throw new Error("Local fonts not found or failed to load");
      }
    } catch (localError) {
      console.warn("Could not load local Montserrat fonts, falling back to Google CDN...", localError);
      [regRes, boldRes] = await Promise.all([
        fetch("https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-.ttf"),
        fetch("https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-.ttf")
      ]);
    }

    if (!regRes.ok || !boldRes.ok) {
      throw new Error("Không thể tải font từ CDN.");
    }

    const [regBuffer, boldBuffer] = await Promise.all([
      regRes.arrayBuffer(),
      boldRes.arrayBuffer()
    ]);

    regularFontBase64 = uint8ArrayToBase64(new Uint8Array(regBuffer));
    boldFontBase64 = uint8ArrayToBase64(new Uint8Array(boldBuffer));
    return true;
  } catch (error) {
    console.error("Font loading error:", error);
    alert("Không thể tải font chữ tiếng Việt. Báo cáo sẽ được xuất bằng font mặc định (không dấu).");
    return false;
  } finally {
    exportPdfButton.textContent = originalText;
    exportPdfButton.disabled = false;
  }
}

function drawKeyValueRow(doc, yPos, items) {
  const margin = 20;
  const totalWidth = 170;
  const numCols = items.length;
  const colW = totalWidth / numCols;
  const hasMontserrat = doc.getFont().fontName === "Montserrat";
  
  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  
  items.forEach((item, index) => {
    const startX = margin + index * colW;
    const lbl = hasMontserrat ? item.label : convertVietnameseAccents(item.label);
    doc.text(lbl, startX, yPos);
  });
  
  yPos += 3.5;
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(9.5);
  
  items.forEach((item, index) => {
    const startX = margin + index * colW;
    const val = hasMontserrat ? item.value : convertVietnameseAccents(item.value);
    doc.text(val, startX, yPos);
  });
  
  yPos += 2.5;
  doc.setDrawColor(241, 245, 249);
  doc.setLineWidth(0.15);
  doc.line(margin, yPos, margin + totalWidth, yPos);
  
  return yPos + 4.5;
}

function drawCard(doc, x, y, w, h, title, val, details, accentColor) {
  const hasMontserrat = doc.getFont().fontName === "Montserrat";
  
  doc.setFillColor(250, 250, 250);
  doc.rect(x, y, w, h, "F");
  
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.25);
  doc.rect(x, y, w, h, "S");
  
  doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.rect(x, y, w, 1.5, "F");
  
  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(hasMontserrat ? title : convertVietnameseAccents(title), x + 4, y + 6);
  
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(hasMontserrat ? val : convertVietnameseAccents(val), x + 4, y + 12.5);
  
  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(hasMontserrat ? details : convertVietnameseAccents(details), x + 4, y + 18);
}

function drawFooter(doc, pageNum, totalPages, hasMontserrat) {
  const y = 285;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.25);
  doc.line(20, y - 4, 190, y - 4);
  
  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  
  const footerText = hasMontserrat 
    ? "MASTER Engineering Suite • Báo cáo chất lượng điện năng & giải pháp bù phản kháng"
    : "MASTER Engineering Suite - Bao cao chat luong dien nang & giai phap bu phan khang";
    
  doc.text(footerText, 20, y);
  doc.text(`Trang ${pageNum} / ${totalPages}`, 190, y, { align: "right" });
}

async function exportPdf() {
  if (!latestReport) return;

  const fontsLoaded = await loadFonts();

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  
  if (fontsLoaded && regularFontBase64 && boldFontBase64) {
    try {
      doc.addFileToVFS("Montserrat-Regular.ttf", regularFontBase64);
      doc.addFont("Montserrat-Regular.ttf", "Montserrat", "normal");
      doc.addFileToVFS("Montserrat-Bold.ttf", boldFontBase64);
      doc.addFont("Montserrat-Bold.ttf", "Montserrat", "bold");
      doc.setFont("Montserrat", "normal");
    } catch (e) {
      console.error("Error registering custom fonts in jsPDF:", e);
      doc.setFont("helvetica", "normal");
    }
  } else {
    doc.setFont("helvetica", "normal");
  }

  // Draw Page 1
  let yPos = 10;
  
  doc.setFillColor(15, 108, 92);
  doc.rect(20, yPos, 170, 3, "F");
  
  let headerY = yPos + 10;
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 108, 92);
  doc.text("MASTER ENGINEERING SUITE", 20, headerY);

  if (brandLogo && brandLogo.complete) {
    try {
      const logoDataUrl = getImageDataUrl(brandLogo);
      doc.addImage(logoDataUrl, "PNG", 154, headerY - 5, 36, 12, undefined, "FAST");
    } catch (e) {
      console.warn("Could not render logo in PDF:", e);
    }
  } else {
    doc.setFont(doc.getFont().fontName, "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 108, 92);
    doc.text("MASTER", 190, headerY, { align: "right" });
  }

  headerY += 12;
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  
  const hasMontserrat = doc.getFont().fontName === "Montserrat";
  const docTitle = hasMontserrat 
    ? "BÁO CÁO PHÂN TÍCH CHẤT LƯỢNG ĐIỆN & ĐỀ XUẤT GIẢI PHÁP" 
    : "BAO CAO PHAN TICH CHAT LUONG DIEN & DE XUAT GIAI PHAP";
  
  doc.text(docTitle, 20, headerY);

  headerY += 6;
  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  
  const projectLabel = latestReport.rules.label;
  doc.text(hasMontserrat ? `Dự án thiết kế: Loại hình công trình - ${projectLabel}` : `Du an thiet ke: Loai hinh cong trinh - ${PROJECT_RULES[latestReport.input.projectType].label}`, 20, headerY);

  headerY += 4;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.25);
  doc.line(20, headerY, 190, headerY);

  headerY += 6;
  yPos = headerY;

  // Metadata block
  doc.setFillColor(248, 250, 252);
  doc.rect(20, yPos, 170, 10, "F");
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.15);
  doc.rect(20, yPos, 170, 10, "S");

  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  
  const reportCode = "MR-" + Date.now().toString().slice(-6);
  const formattedDate = new Date().toLocaleDateString("vi-VN") + " " + new Date().toLocaleTimeString("vi-VN");
  
  doc.text(hasMontserrat ? `MÃ BÁO CÁO: ${reportCode}` : `MA BAO CAO: ${reportCode}`, 24, yPos + 6.5);
  doc.text(hasMontserrat ? `NGÀY LẬP: ${formattedDate}` : `NGAY LAP: ${formattedDate}`, 70, yPos + 6.5);
  doc.text(hasMontserrat ? "VẬN HÀNH: Liên tục" : "VAN HANH: Lien tuc", 152, yPos + 6.5);
  
  yPos += 16;

  // Section 1: Inputs
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 108, 92);
  doc.text(hasMontserrat ? "I. THÔNG SỐ VẬN HÀNH ĐẦU VÀO" : "I. THONG SO VAN HANH DAU VAO", 20, yPos);
  yPos += 5.5;

  yPos = drawKeyValueRow(doc, yPos, [
    { label: hasMontserrat ? "Công suất 1 MBA" : "Cong suat 1 MBA", value: formatNumber(latestReport.input.transformerKva, 0, "kVA") },
    { label: hasMontserrat ? "Số MBA song song" : "So MBA song song", value: formatNumber(latestReport.input.parallelTransformers, 0) },
    { label: hasMontserrat ? "Công suất tải tổng" : "Cong suat tai tong", value: formatNumber(latestReport.input.loadPowerKw, 0, "kW") }
  ]);

  yPos = drawKeyValueRow(doc, yPos, [
    { label: hasMontserrat ? "Hệ số sử dụng Ku" : "He so su dung Ku", value: formatNumber(latestReport.input.ku, 2) },
    { label: hasMontserrat ? "Dòng phụ tải (IL)" : "Dong phu tai (IL)", value: formatNumber(latestReport.ilA, 1, "A") },
    { label: hasMontserrat ? "Ngắn mạch (Isc)" : "Ngan mach (Isc)", value: formatNumber(latestReport.iscKa, 1, "kA") }
  ]);

  yPos = drawKeyValueRow(doc, yPos, [
    { label: hasMontserrat ? "Điện áp định mức" : "Dien ap dinh muc", value: formatNumber(latestReport.input.ratedVoltage, 0, "V") },
    { label: hasMontserrat ? "Tần số hệ thống" : "Tan so he thong", value: formatNumber(latestReport.input.frequency, 0, "Hz") },
    { label: hasMontserrat ? "Sơ đồ đấu nối" : "So do dau noi", value: latestReport.input.wiring }
  ]);

  yPos = drawKeyValueRow(doc, yPos, [
    { label: hasMontserrat ? "Cosφ trước bù" : "Cosphi truoc bu", value: formatNumber(latestReport.input.cosPhiBefore, 2) },
    { label: hasMontserrat ? "Cosφ mục tiêu" : "Cosphi muc tieu", value: formatNumber(latestReport.input.cosPhiTarget, 2) },
    { label: hasMontserrat ? "Hệ số Uk% MBA" : "He so Uk% MBA", value: formatNumber(latestReport.input.ukPercent, 1, "%") }
  ]);

  yPos = drawKeyValueRow(doc, yPos, [
    { label: hasMontserrat ? "Chỉnh lưu chính" : "Chinh luu chinh", value: latestReport.input.rectifierPulse > 0 ? `${latestReport.input.rectifierPulse} xung` : (hasMontserrat ? "Không có" : "Khong co") },
    { label: hasMontserrat ? "Tải biến động nhanh" : "Tai bien dong nhanh", value: latestReport.input.rapidFluctuation ? (hasMontserrat ? "Có" : "Co") : (hasMontserrat ? "Không" : "Khong") },
    { label: hasMontserrat ? "Thời gian chạy" : "Thoi gian chay", value: formatNumber(latestReport.input.operatingHours, 0, "g/ngày") }
  ]);

  yPos += 2;

  // Section 2: Load Mix Table
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 108, 92);
  doc.text(hasMontserrat ? "II. CƠ CẤU TẢI CHI TIẾT & CHỈ SỐ PHI TUYẾN" : "II. CO CAU TAI CHI TIET & CHI SO PHI TUYEN", 20, yPos);
  yPos += 5.5;

  const loadItems = [
    { label: hasMontserrat ? "Động cơ chạy trực tiếp" : "Dong co chay truc tiep", pct: latestReport.input.motorDirectPct, weight: NONLINEAR_WEIGHTS.motorDirectPct },
    { label: hasMontserrat ? "Biến tần VFD" : "Bien tan VFD", pct: latestReport.input.vfdPct, weight: NONLINEAR_WEIGHTS.vfdPct },
    { label: "UPS", pct: latestReport.input.upsPct, weight: NONLINEAR_WEIGHTS.upsPct },
    { label: "LED / SMPS / Server", pct: latestReport.input.ledPct, weight: NONLINEAR_WEIGHTS.ledPct },
    { label: hasMontserrat ? "Chiller / AHU / Bơm / Quạt" : "Chiller / AHU / Bom / Quat", pct: latestReport.input.hvacPct, weight: NONLINEAR_WEIGHTS.hvacPct },
    { label: hasMontserrat ? "Chỉnh lưu AC/DC" : "Chinh luu AC/DC", pct: latestReport.input.rectifierPct, weight: NONLINEAR_WEIGHTS.rectifierPct },
    { label: hasMontserrat ? "Máy hàn" : "May han", pct: latestReport.input.weldingPct, weight: NONLINEAR_WEIGHTS.weldingPct },
    { label: hasMontserrat ? "Lò nhiệt / lò cảm ứng" : "Lo nhiet / lo cam ung", pct: latestReport.input.furnacePct, weight: NONLINEAR_WEIGHTS.furnacePct },
    { label: hasMontserrat ? "Tải 1 pha trên tổng tải" : "Tai 1 pha tren tong tai", pct: latestReport.input.singlePhasePct, weight: 0 },
  ].filter(item => item.pct > 0);

  doc.setFillColor(241, 245, 249);
  doc.rect(20, yPos, 170, 6, "F");
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text(hasMontserrat ? "Tên nhóm phụ tải" : "Ten nhom phu tai", 22, yPos + 4.2);
  doc.text(hasMontserrat ? "Tỷ lệ khai báo" : "Ty le khai bao", 110, yPos + 4.2, { align: "right" });
  doc.text(hasMontserrat ? "Trọng số phi tuyến" : "Trong so phi tuyen", 145, yPos + 4.2, { align: "right" });
  doc.text(hasMontserrat ? "Quy đổi phi tuyến" : "Quy doi phi tuyen", 188, yPos + 4.2, { align: "right" });

  yPos += 6;
  doc.setFont(doc.getFont().fontName, "normal");
  doc.setTextColor(30, 41, 59);

  loadItems.forEach((item, index) => {
    if (index % 2 === 1) {
      doc.setFillColor(248, 250, 252);
      doc.rect(20, yPos, 170, 6, "F");
    }
    const contribution = item.weight > 0 ? (item.pct * item.weight) : 0;
    
    doc.text(item.label, 22, yPos + 4.2);
    doc.text(formatNumber(item.pct, 0, "%"), 110, yPos + 4.2, { align: "right" });
    doc.text(item.weight > 0 ? formatNumber(item.weight, 2) : "--", 145, yPos + 4.2, { align: "right" });
    doc.text(item.weight > 0 ? formatNumber(contribution, 1, "%") : "--", 188, yPos + 4.2, { align: "right" });

    doc.setDrawColor(241, 245, 249);
    doc.setLineWidth(0.1);
    doc.line(20, yPos + 6, 190, yPos + 6);
    yPos += 6;
  });

  doc.setFillColor(241, 245, 249);
  doc.rect(20, yPos, 170, 6, "F");
  doc.setFont(doc.getFont().fontName, "bold");
  doc.text(hasMontserrat ? "Tổng cộng quy đổi" : "Tong cong quy doi", 22, yPos + 4.2);
  doc.text(formatNumber(latestReport.declaredPct, 0, "%"), 110, yPos + 4.2, { align: "right" });
  doc.text("--", 145, yPos + 4.2, { align: "right" });
  doc.text(formatNumber(latestReport.nonlinearPct, 1, "%"), 188, yPos + 4.2, { align: "right" });
  
  yPos += 11;

  // Section 3: Recommendations Title
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 108, 92);
  doc.text(hasMontserrat ? "III. KẾT QUẢ ĐÁNH GIÁ & ĐỀ XUẤT THIẾT BỊ" : "III. KET QUA DANH GIA & DE XUAT THIET BI", 20, yPos);
  yPos += 5.5;

  const accentHarmonics = latestReport.thdi > 40 ? [194, 65, 12] : (latestReport.thdi > 25 ? [183, 121, 31] : (latestReport.thdi > 15 ? [37, 99, 235] : [19, 121, 91]));
  
  let statusHarmonics = "Lưới ổn định";
  if (latestReport.thdi > 40) {
    statusHarmonics = hasMontserrat ? "Độ méo rất cao (Nguy hiểm)" : "Do meo rat cao (Nguy hiem)";
  } else if (latestReport.thdi > 25) {
    statusHarmonics = hasMontserrat ? "Méo dạng đáng kể" : "Meo dang dang ke";
  } else if (latestReport.thdi > 15) {
    statusHarmonics = hasMontserrat ? "Méo dạng nhẹ" : "Meo dang nhe";
  }

  const accentAhf = latestReport.ahfNeeded ? [194, 65, 12] : [19, 121, 91];

  drawCard(doc, 20, yPos, 82, 22, 
    hasMontserrat ? "Méo dạng sóng hài (THDi / THDu)" : "Meo dang song hai (THDi / THDu)", 
    `THDi: ${formatNumber(latestReport.thdi, 1, "%")} / THDu: ${formatNumber(latestReport.thdu, 1, "%")}`, 
    statusHarmonics, 
    accentHarmonics
  );

  drawCard(doc, 108, yPos, 82, 22, 
    hasMontserrat ? "Bù công suất phản kháng tổng" : "Bu cong suat phan khang tong", 
    formatNumber(latestReport.totalKvar, 1, "kVAr"), 
    hasMontserrat 
      ? `Bù Máp: ${formatNumber(latestReport.baseCompKvar, 1, "kVAr")} | Bù Cosφ: ${formatNumber(latestReport.cosCompKvar, 1, "kVAr")}`
      : `Bu Mba: ${formatNumber(latestReport.baseCompKvar, 1, "kVAr")} | Bu Cosphi: ${formatNumber(latestReport.cosCompKvar, 1, "kVAr")}`, 
    [15, 108, 92]
  );

  yPos += 26;

  drawCard(doc, 20, yPos, 82, 22, 
    hasMontserrat ? "Cuộn kháng & cấp điện áp tụ" : "Cuon khang & cap dien ap tu", 
    hasMontserrat ? `Kháng: ${latestReport.reactorPct} | Tụ: ${latestReport.capVoltage} VAC` : `Khang: ${latestReport.reactorPct} | Tu: ${latestReport.capVoltage} VAC`, 
    hasMontserrat ? `Điện áp tính toán: ${latestReport.capVoltageRaw} V` : `Dien ap tinh toan: ${latestReport.capVoltageRaw} V`, 
    [15, 108, 92]
  );

  drawCard(doc, 108, yPos, 82, 22, 
    hasMontserrat ? "Bộ lọc sóng hài tích cực AHF" : "Bo loc song hai tich cuc AHF", 
    latestReport.ahfNeeded ? (hasMontserrat ? `Khuyến nghị: ${formatNumber(latestReport.ahf.recommendedA, 1, "A")}` : `Khuyen nghi: ${formatNumber(latestReport.ahf.recommendedA, 1, "A")}`) : (hasMontserrat ? "Chưa bắt buộc lắp AHF" : "Chua bat buoc lap AHF"), 
    latestReport.ahfNeeded ? (hasMontserrat ? `Dung lượng: ${formatNumber(latestReport.ahf.recommendedKva, 1, "kVA")} | Mục tiêu: <${latestReport.ahf.targetThdi}%` : `Dung luong: ${formatNumber(latestReport.ahf.recommendedKva, 1, "kVA")} | Muc tieu: <${latestReport.ahf.targetThdi}%`) : (hasMontserrat ? "Mức độ méo hài nằm trong ngưỡng" : "Muc do meo hai nam trong nguong"), 
    accentAhf
  );

  // Page 2
  doc.addPage();
  
  doc.setFillColor(15, 108, 92);
  doc.rect(20, 10, 170, 1.5, "F");

  let yPage2 = 20;

  // GIẢI PHÁP TỔNG THỂ KHUYẾN NGHỊ (Wide Box)
  doc.setFillColor(248, 250, 252);
  doc.rect(20, yPage2, 170, 14, "F");
  doc.setDrawColor(15, 108, 92);
  doc.setLineWidth(0.3);
  doc.rect(20, yPage2, 170, 14, "S");

  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(15, 108, 92);
  doc.text(hasMontserrat ? "GIẢI PHÁP TỔNG THỂ KHUYẾN NGHỊ" : "GIAI PHAP TONG THE KHUYEN NGHI", 24, yPage2 + 5.5);

  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  
  const solText = latestReport.solution + " | " + latestReport.capModel;
  doc.text(hasMontserrat ? solText : convertVietnameseAccents(solText), 24, yPage2 + 10);
  
  yPage2 += 22;

  // Section 4: Narrative Evaluation
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 108, 92);
  doc.text(hasMontserrat ? "IV. ĐÁNH GIÁ CHI TIẾT HỆ THỐNG" : "IV. DANH GIA CHI TIET HE THONG", 20, yPage2);
  yPage2 += 6;

  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);

  const narrativeText = [
    `Loại công trình ${latestReport.rules.label} được gán mức THDi nền ${formatNumber(latestReport.rules.baseThdi, 0, "%")} và hệ số bù sơ bộ ${latestReport.rules.baseComp * 100}% công suất MBA.`,
    `Với cơ cấu tải hiện tại, phần mềm đánh giá tải phi tuyến quy đổi ở mức ${formatNumber(latestReport.nonlinearPct, 1, "%")} và chọn dung lượng bù sơ bộ ${formatNumber(latestReport.totalKvar, 1, "kVAr")}.`,
    `Dòng tải sử dụng khoảng ${formatNumber(latestReport.ilA, 1, "A")}, Isc đánh giá ${formatNumber(latestReport.iscKa, 1, "kA")}, THDu ước tính ${formatNumber(latestReport.thdu, 1, "%")}.`,
    `Giải pháp đang nghiêng về ${latestReport.solution}; ưu tiên ${latestReport.capModel} với điện áp tụ không thấp hơn ${latestReport.capVoltage} VAC.`,
    latestReport.ahfNeeded
      ? `Do rủi ro hài cao, nên cân nhắc AHF mục tiêu THDi sau lọc ${formatNumber(latestReport.ahf.targetThdi, 0, "%")} với sizing sơ bộ ${formatNumber(latestReport.ahf.recommendedA, 1, "A")} (${formatNumber(latestReport.ahf.recommendedKva, 1, "kVA")}).`
      : "Cấu hình hiện tại chưa bắt buộc AHF, nhưng vẫn nên đo PQ thực tế khi dự án đi vào vận hành.",
  ];

  narrativeText.forEach(para => {
    const textToPrint = hasMontserrat ? para : convertVietnameseAccents(para);
    const wrapped = doc.splitTextToSize(textToPrint, 170);
    
    if (yPage2 + wrapped.length * 5 > 275) {
      doc.addPage();
      doc.setFillColor(15, 108, 92);
      doc.rect(20, 12, 170, 1.5, "F");
      yPage2 = 22;
    }
    
    doc.text(wrapped, 20, yPage2);
    yPage2 += wrapped.length * 4.8 + 2.5;
  });

  yPage2 += 4;

  // Section 5: Warnings Title
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 108, 92);
  doc.text(hasMontserrat ? "V. CẢNH BÁO KỸ THUẬT & KHUYẾN NGHỊ" : "V. CANH BAO KY THUAT & KHUYEN NGHI", 20, yPage2);
  yPage2 += 6;

  latestReport.warnings.forEach(warning => {
    let borderRGB, bgRGB, textRGB;
    if (warning.level === "danger") {
      borderRGB = [194, 65, 12];
      bgRGB = [255, 241, 236];
      textRGB = [124, 45, 18];
    } else if (warning.level === "warning") {
      borderRGB = [183, 121, 31];
      bgRGB = [255, 249, 232];
      textRGB = [113, 63, 18];
    } else {
      borderRGB = [19, 121, 91];
      bgRGB = [236, 251, 245];
      textRGB = [6, 78, 59];
    }

    const titleText = hasMontserrat ? warning.title : convertVietnameseAccents(warning.title);
    const bodyText = hasMontserrat ? warning.body : convertVietnameseAccents(warning.body);

    doc.setFont(doc.getFont().fontName, "normal");
    doc.setFontSize(8.5);
    const bodyTextWrapped = doc.splitTextToSize(bodyText, 160);
    const cardHeight = 6 + bodyTextWrapped.length * 4 + 4;

    if (yPage2 + cardHeight > 260) {
      doc.addPage();
      doc.setFillColor(15, 108, 92);
      doc.rect(20, 12, 170, 1.5, "F");
      yPage2 = 22;
      doc.setFont(doc.getFont().fontName, "bold");
      doc.setFontSize(10);
      doc.setTextColor(15, 108, 92);
      doc.text(hasMontserrat ? "V. CẢNH BÁO KỸ THUẬT & KHUYẾN NGHỊ (tiếp)" : "V. CANH BAO KY THUAT & KHUYEN NGHI (tiep)", 20, yPage2);
      yPage2 += 6;
    }

    doc.setFillColor(bgRGB[0], bgRGB[1], bgRGB[2]);
    doc.rect(20, yPage2, 170, cardHeight, "F");

    doc.setFillColor(borderRGB[0], borderRGB[1], borderRGB[2]);
    doc.rect(20, yPage2, 1.8, cardHeight, "F");

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.rect(20, yPage2, 170, cardHeight, "S");

    doc.setFont(doc.getFont().fontName, "bold");
    doc.setFontSize(9);
    doc.setTextColor(textRGB[0], textRGB[1], textRGB[2]);
    doc.text(titleText, 25, yPage2 + 4.5);

    doc.setFont(doc.getFont().fontName, "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(bodyTextWrapped, 25, yPage2 + 9.5);

    yPage2 += cardHeight + 4;
  });

  yPage2 += 4;

  // Expected Harmonics
  if (yPage2 + 20 > 260) {
    doc.addPage();
    doc.setFillColor(15, 108, 92);
    doc.rect(20, 12, 170, 1.5, "F");
    yPage2 = 22;
  }

  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 108, 92);
  doc.text(hasMontserrat ? "VI. THÀNH PHẦN SÓNG HÀI ĐẶC TRƯNG" : "VI. THANH PHAN SONG HAI DAC TRUNG", 20, yPage2);
  yPage2 += 6;

  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  
  const recP = latestReport.input.rectifierPulse || 0;
  const pulseText = hasMontserrat 
    ? `Bộ chỉnh lưu ${recP} xung có xu hướng sinh các bậc hài ưu thế phụ thuộc vào sơ đồ đấu nối:` 
    : `Bo chinh luu ${recP} xung co xu huong sinh cac bac hai uu the phu thuoc vao so do dau noi:`;
  doc.text(pulseText, 20, yPage2);
  yPage2 += 5.5;

  const harmText = latestReport.harmonics.length
    ? latestReport.harmonics.map(h => `H${h}`).join(", ")
    : (hasMontserrat ? "Không ghi nhận hài đặc trưng từ chỉnh lưu." : "Khong ghi nhan hai dac trung tu chinh luu.");
    
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(194, 65, 12);
  doc.text(harmText, 20, yPage2);
  yPage2 += 12;

  // Signature Block
  if (yPage2 > 230) {
    doc.addPage();
    doc.setFillColor(15, 108, 92);
    doc.rect(20, 12, 170, 1.5, "F");
    yPage2 = 25;
  } else {
    yPage2 = 235;
  }

  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.line(20, yPage2, 190, yPage2);
  yPage2 += 8;

  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(hasMontserrat ? "KỸ SƯ THỰC HIỆN" : "KY SU THUC HIEN", 20, yPage2);
  doc.text(hasMontserrat ? "PHÊ DUYỆT BÁO CÁO" : "PHE DUYET BAO CAO", 190, yPage2, { align: "right" });

  yPage2 += 4.5;
  doc.setFont(doc.getFont().fontName, "normal");
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text(hasMontserrat ? "(Ký & ghi rõ họ tên)" : "(Ky & ghi ro ho ten)", 20, yPage2);
  doc.text(hasMontserrat ? "(Ký, đóng dấu & ghi rõ họ tên)" : "(Ky, dong dau & ghi ro ho ten)", 190, yPage2, { align: "right" });

  yPage2 += 20;
  doc.setFont(doc.getFont().fontName, "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(15, 108, 92);
  doc.text("MASTER Advisor System", 20, yPage2);
  doc.text(hasMontserrat ? "Ban Kỹ thuật & Công nghệ" : "Ban Ky thuat & Cong nghe", 190, yPage2, { align: "right" });

  // Pass-2 footer draw
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    drawFooter(doc, i, pageCount, hasMontserrat);
  }

  doc.save(`MASTER-report-${Date.now()}.pdf`);
}

function exportWord() {
  if (!latestReport) return;

  const docTitle = "Báo cáo phân tích chất lượng điện & Đề xuất giải pháp";
  
  const activeLoads = [
    { name: "Động cơ chạy trực tiếp", pct: latestReport.input.motorDirectPct, weight: NONLINEAR_WEIGHTS.motorDirectPct },
    { name: "Biến tần VFD", pct: latestReport.input.vfdPct, weight: NONLINEAR_WEIGHTS.vfdPct },
    { name: "UPS", pct: latestReport.input.upsPct, weight: NONLINEAR_WEIGHTS.upsPct },
    { name: "LED / SMPS / Server", pct: latestReport.input.ledPct, weight: NONLINEAR_WEIGHTS.ledPct },
    { name: "Chiller / AHU / Bơm / Quạt", pct: latestReport.input.hvacPct, weight: NONLINEAR_WEIGHTS.hvacPct },
    { name: "Chỉnh lưu AC/DC", pct: latestReport.input.rectifierPct, weight: NONLINEAR_WEIGHTS.rectifierPct },
    { name: "Máy hàn", pct: latestReport.input.weldingPct, weight: NONLINEAR_WEIGHTS.weldingPct },
    { name: "Lò nhiệt / lò cảm ứng", pct: latestReport.input.furnacePct, weight: NONLINEAR_WEIGHTS.furnacePct },
    { name: "Tải 1 pha trên tổng tải", pct: latestReport.input.singlePhasePct, weight: 0 },
  ].filter(item => item.pct > 0);

  let loadMixRowsHtml = "";
  activeLoads.forEach(item => {
    const contribution = item.weight > 0 ? (item.pct * item.weight) : 0;
    loadMixRowsHtml += `
      <tr>
        <td style="padding: 6px; border: 1px solid #cbd5e1;">${item.name}</td>
        <td style="padding: 6px; border: 1px solid #cbd5e1; text-align: right;">${formatNumber(item.pct, 0, "%")}</td>
        <td style="padding: 6px; border: 1px solid #cbd5e1; text-align: right;">${item.weight > 0 ? formatNumber(item.weight, 2) : "--"}</td>
        <td style="padding: 6px; border: 1px solid #cbd5e1; text-align: right;">${item.weight > 0 ? formatNumber(contribution, 1, "%") : "--"}</td>
      </tr>
    `;
  });

  let warningsHtml = "";
  latestReport.warnings.forEach(warning => {
    let colorHex = "#13795b";
    let bgHex = "#ecfbf5";
    let textHex = "#064e3b";
    
    if (warning.level === "danger") {
      colorHex = "#c2410c";
      bgHex = "#fff1ec";
      textHex = "#7c2d12";
    } else if (warning.level === "warning") {
      colorHex = "#b7791f";
      bgHex = "#fff9e8";
      textHex = "#713f12";
    }

    warningsHtml += `
      <div style="border-left: 4px solid ${colorHex}; background-color: ${bgHex}; padding: 10px; margin-bottom: 12px; border-radius: 4px;">
        <h4 style="margin: 0 0 4px 0; color: ${textHex}; font-size: 11pt;">${warning.title}</h4>
        <p style="margin: 0; color: #475569; font-size: 10pt;">${warning.body}</p>
      </div>
    `;
  });

  const narrativeText = [
    `Loại công trình ${latestReport.rules.label} được gán mức THDi nền ${formatNumber(latestReport.rules.baseThdi, 0, "%")} và hệ số bù sơ bộ ${latestReport.rules.baseComp * 100}% công suất MBA.`,
    `Với cơ cấu tải hiện tại, phần mềm đánh giá tải phi tuyến quy đổi ở mức ${formatNumber(latestReport.nonlinearPct, 1, "%")} và chọn dung lượng bù sơ bộ ${formatNumber(latestReport.totalKvar, 1, "kVAr")}.`,
    `Dòng tải sử dụng khoảng ${formatNumber(latestReport.ilA, 1, "A")}, Isc đánh giá ${formatNumber(latestReport.iscKa, 1, "kA")}, THDu ước tính ${formatNumber(latestReport.thdu, 1, "%")}.`,
    `Giải pháp đang nghiêng về ${latestReport.solution}; ưu tiên ${latestReport.capModel} với điện áp tụ không thấp hơn ${latestReport.capVoltage} VAC.`,
    latestReport.ahfNeeded
      ? `Do rủi ro hài cao, nên cân nhắc AHF mục tiêu THDi sau lọc ${formatNumber(latestReport.ahf.targetThdi, 0, "%")} với sizing sơ bộ ${formatNumber(latestReport.ahf.recommendedA, 1, "A")} (${formatNumber(latestReport.ahf.recommendedKva, 1, "kVA")}).`
      : "Cấu hình hiện tại chưa bắt buộc AHF, nhưng vẫn nên đo PQ thực tế khi dự án đi vào vận hành.",
  ];

  const htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset="utf-8">
      <title>${docTitle}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; font-size: 11pt; }
        .header-table { width: 100%; border: none; margin-bottom: 20px; }
        .header-brand { color: #0f6c5c; font-weight: bold; font-size: 11pt; text-align: left; }
        .header-logo { text-align: right; font-weight: bold; color: #0f6c5c; font-size: 14pt; }
        h1 { color: #0f6c5c; font-size: 16pt; font-weight: bold; margin-top: 20px; margin-bottom: 5px; }
        .subtitle { color: #475569; font-size: 11pt; margin-bottom: 15px; }
        .meta-table { width: 100%; border: 1px solid #e2e8f0; background-color: #f8fafc; margin-bottom: 25px; }
        .meta-table td { padding: 6px 12px; border: none; font-size: 9.5pt; color: #475569; }
        h2 { color: #0f6c5c; font-size: 12pt; font-weight: bold; border-bottom: 1.5px solid #0f6c5c; padding-bottom: 4px; margin-top: 25px; margin-bottom: 10px; }
        .data-table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
        .data-table th, .data-table td { border: 1px solid #cbd5e1; padding: 6px 10px; text-align: left; font-size: 10pt; }
        .data-table th { background-color: #f1f5f9; color: #334155; font-weight: bold; }
        .highlight-row { background-color: #f8fafc; }
        .card-table { width: 100%; border-spacing: 10px; border-collapse: separate; margin-bottom: 20px; }
        .card-td { border: 1px solid #e2e8f0; background-color: #fafafa; padding: 10px; width: 50%; vertical-align: top; border-radius: 4px; }
        .card-td h3 { margin: 0 0 6px 0; color: #64748b; font-size: 9pt; font-weight: normal; }
        .card-td .value { margin: 0 0 4px 0; color: #0f172a; font-size: 13pt; font-weight: bold; }
        .card-td .desc { margin: 0; color: #475569; font-size: 8.5pt; }
        .solution-box { border: 1.5px solid #0f6c5c; background-color: #f8fafc; padding: 12px; margin-bottom: 25px; border-radius: 4px; }
        .solution-box h3 { margin: 0 0 4px 0; color: #0f6c5c; font-size: 10pt; font-weight: bold; }
        .solution-box p { margin: 0; color: #1e293b; font-size: 10.5pt; }
        .narrative-p { font-size: 10.5pt; text-align: justify; margin-bottom: 10px; color: #334155; }
        .footer-line { border-top: 1px solid #cbd5e1; margin-top: 40px; padding-top: 8px; font-size: 8.5pt; color: #94a3b8; }
        .signature-table { width: 100%; border: none; margin-top: 50px; }
        .signature-table td { border: none; padding: 5px; width: 50%; vertical-align: top; text-align: center; }
        .signature-table .title { font-weight: bold; color: #475569; font-size: 10pt; }
        .signature-table .desc { color: #94a3b8; font-size: 8.5pt; margin-bottom: 60px; }
        .signature-table .name { font-weight: bold; color: #0f6c5c; font-size: 10pt; }
      </style>
    </head>
    <body>
      <table class="header-table" style="width: 100%;">
        <tr>
          <td class="header-brand" style="text-align: left;">MASTER ENGINEERING SUITE</td>
          <td class="header-logo" style="text-align: right;">MASTER</td>
        </tr>
      </table>

      <h1 style="color: #0f6c5c; font-size: 16pt;">BÁO CÁO PHÂN TÍCH CHẤT LƯỢNG ĐIỆN & ĐỀ XUẤT GIẢI PHÁP</h1>
      <div class="subtitle" style="color: #475569; font-size: 11pt;">Dự án thiết kế: Loại hình công trình - ${latestReport.rules.label}</div>

      <table class="meta-table" style="width: 100%; border: 1px solid #e2e8f0; background-color: #f8fafc;">
        <tr>
          <td style="padding: 6px 12px;"><strong>MÃ BÁO CÁO:</strong> MR-${Date.now().toString().slice(-6)}</td>
          <td style="padding: 6px 12px;"><strong>NGÀY LẬP:</strong> ${new Date().toLocaleDateString("vi-VN")} ${new Date().toLocaleTimeString("vi-VN")}</td>
          <td style="padding: 6px 12px;"><strong>VẬN HÀNH:</strong> Liên tục</td>
        </tr>
      </table>

      <h2>I. THÔNG SỐ VẬN HÀNH ĐẦU VÀO</h2>
      <table class="data-table" style="width: 100%; border-collapse: collapse;">
        <tr class="highlight-row" style="background-color: #f8fafc;">
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Công suất 1 MBA:</strong> ${formatNumber(latestReport.input.transformerKva, 0, "kVA")}</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Số MBA song song:</strong> ${formatNumber(latestReport.input.parallelTransformers, 0)} máy</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Công suất tải tổng:</strong> ${formatNumber(latestReport.input.loadPowerKw, 0, "kW")}</td>
        </tr>
        <tr>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Hệ số sử dụng Ku:</strong> ${formatNumber(latestReport.input.ku, 2)}</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Dòng phụ tải (IL):</strong> ${formatNumber(latestReport.ilA, 1, "A")}</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Ngắn mạch (Isc):</strong> ${formatNumber(latestReport.iscKa, 1, "kA")}</td>
        </tr>
        <tr class="highlight-row" style="background-color: #f8fafc;">
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Điện áp định mức:</strong> ${formatNumber(latestReport.input.ratedVoltage, 0, "V")}</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Tần số hệ thống:</strong> ${formatNumber(latestReport.input.frequency, 0, "Hz")}</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Sơ đồ đấu nối:</strong> ${latestReport.input.wiring}</td>
        </tr>
        <tr>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Cosφ trước bù:</strong> ${formatNumber(latestReport.input.cosPhiBefore, 2)}</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Cosφ mục tiêu:</strong> ${formatNumber(latestReport.input.cosPhiTarget, 2)}</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Hệ số Uk% MBA:</strong> ${formatNumber(latestReport.input.ukPercent, 1, "%")}</td>
        </tr>
        <tr class="highlight-row" style="background-color: #f8fafc;">
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Chỉnh lưu chính:</strong> ${latestReport.input.rectifierPulse > 0 ? `${latestReport.input.rectifierPulse} xung` : "Không có"}</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Tải biến động nhanh:</strong> ${latestReport.input.rapidFluctuation ? "Có" : "Không"}</td>
          <td style="padding: 6px 10px; border: 1px solid #cbd5e1;"><strong>Thời gian chạy:</strong> ${formatNumber(latestReport.input.operatingHours, 0, "giờ/ngày")}</td>
        </tr>
      </table>

      <h2>II. CƠ CẤU TẢI CHI TIẾT & CHỈ SỐ PHI TUYẾN</h2>
      <table class="data-table" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f1f5f9;">
            <th style="padding: 6px 10px; border: 1px solid #cbd5e1;">Tên nhóm phụ tải</th>
            <th style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: right;">Tỷ lệ khai báo</th>
            <th style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: right;">Trọng số phi tuyến</th>
            <th style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: right;">Quy đổi phi tuyến</th>
          </tr>
        </thead>
        <tbody>
          ${loadMixRowsHtml}
          <tr style="background-color: #f1f5f9; font-weight: bold;">
            <td style="padding: 6px 10px; border: 1px solid #cbd5e1;">Tổng cộng quy đổi</td>
            <td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: right;">${formatNumber(latestReport.declaredPct, 0, "%")}</td>
            <td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: right;">--</td>
            <td style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: right;">${formatNumber(latestReport.nonlinearPct, 1, "%")}</td>
          </tr>
        </tbody>
      </table>

      <h2>III. KẾT QUẢ ĐÁNH GIÁ & ĐỀ XUẤT THIẾT BỊ</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="width: 50%; padding: 8px; vertical-align: top;">
            <div style="border: 1px solid #cbd5e1; border-top: 3px solid ${latestReport.thdi > 40 ? "#c2410c" : (latestReport.thdi > 25 ? "#b7791f" : "#13795b")}; background-color: #fafafa; padding: 10px; min-height: 80px;">
              <h3 style="margin: 0 0 6px 0; color: #64748b; font-size: 9pt; font-weight: normal;">Méo dạng sóng hài (THDi / THDu)</h3>
              <div style="margin: 0 0 4px 0; color: #0f172a; font-size: 12pt; font-weight: bold;">THDi: ${formatNumber(latestReport.thdi, 1, "%")} / THDu: ${formatNumber(latestReport.thdu, 1, "%")}</div>
              <p style="margin: 0; color: #475569; font-size: 8.5pt;">${latestReport.thdi > 40 ? "Độ méo rất cao (Nguy hiểm)" : (latestReport.thdi > 25 ? "Méo dạng đáng kể" : (latestReport.thdi > 15 ? "Méo dạng nhẹ" : "Lưới ổn định"))}</p>
            </div>
          </td>
          <td style="width: 50%; padding: 8px; vertical-align: top;">
            <div style="border: 1px solid #cbd5e1; border-top: 3px solid #0f6c5c; background-color: #fafafa; padding: 10px; min-height: 80px;">
              <h3 style="margin: 0 0 6px 0; color: #64748b; font-size: 9pt; font-weight: normal;">Bù công suất phản kháng tổng</h3>
              <div style="margin: 0 0 4px 0; color: #0f172a; font-size: 12pt; font-weight: bold;">${formatNumber(latestReport.totalKvar, 1, "kVAr")}</div>
              <p style="margin: 0; color: #475569; font-size: 8.5pt;">MBA: ${formatNumber(latestReport.baseCompKvar, 1, "kVAr")} | Cosφ: ${formatNumber(latestReport.cosCompKvar, 1, "kVAr")}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="width: 50%; padding: 8px; vertical-align: top;">
            <div style="border: 1px solid #cbd5e1; border-top: 3px solid #0f6c5c; background-color: #fafafa; padding: 10px; min-height: 80px;">
              <h3 style="margin: 0 0 6px 0; color: #64748b; font-size: 9pt; font-weight: normal;">Cuộn kháng & cấp điện áp tụ</h3>
              <div style="margin: 0 0 4px 0; color: #0f172a; font-size: 12pt; font-weight: bold;">Kháng: ${latestReport.reactorPct} | Tụ: ${latestReport.capVoltage} VAC</div>
              <p style="margin: 0; color: #475569; font-size: 8.5pt;">Điện áp tính toán: ${latestReport.capVoltageRaw} V</p>
            </div>
          </td>
          <td style="width: 50%; padding: 8px; vertical-align: top;">
            <div style="border: 1px solid #cbd5e1; border-top: 3px solid ${latestReport.ahfNeeded ? "#c2410c" : "#13795b"}; background-color: #fafafa; padding: 10px; min-height: 80px;">
              <h3 style="margin: 0 0 6px 0; color: #64748b; font-size: 9pt; font-weight: normal;">Bộ lọc sóng hài tích cực AHF</h3>
              <div style="margin: 0 0 4px 0; color: #0f172a; font-size: 12pt; font-weight: bold;">${latestReport.ahfNeeded ? "Khuyến nghị: " + formatNumber(latestReport.ahf.recommendedA, 1, "A") : "Chưa bắt buộc lắp AHF"}</div>
              <p style="margin: 0; color: #475569; font-size: 8.5pt;">${latestReport.ahfNeeded ? `Dung lượng: ${formatNumber(latestReport.ahf.recommendedKva, 1, "kVA")} | Mục tiêu: <${latestReport.ahf.targetThdi}%` : "Mức độ méo hài nằm trong ngưỡng"}</p>
            </div>
          </td>
        </tr>
      </table>

      <div class="solution-box" style="border: 1.5px solid #0f6c5c; background-color: #f8fafc; padding: 12px; margin-bottom: 25px;">
        <h3 style="margin: 0 0 4px 0; color: #0f6c5c; font-size: 10pt; font-weight: bold;">GIẢI PHÁP TỔNG THỂ KHUYẾN NGHỊ</h3>
        <p style="margin: 0; color: #1e293b; font-size: 10.5pt;">${latestReport.solution} | ${latestReport.capModel}</p>
      </div>

      <h2>IV. ĐÁNH GIÁ CHI TIẾT HỆ THỐNG</h2>
      <p class="narrative-p" style="margin-bottom: 10px;">${narrativeText[0]}</p>
      <p class="narrative-p" style="margin-bottom: 10px;">${narrativeText[1]}</p>
      <p class="narrative-p" style="margin-bottom: 10px;">${narrativeText[2]}</p>
      <p class="narrative-p" style="margin-bottom: 10px;">${narrativeText[3]}</p>
      <p class="narrative-p" style="margin-bottom: 10px;">${narrativeText[4]}</p>

      <h2>V. CẢNH BÁO KỸ THUẬT & KHUYẾN NGHỊ</h2>
      ${warningsHtml}

      <h2 style="margin-top: 25px;">VI. THÀNH PHẦN SÓNG HÀI ĐẶC TRƯNG</h2>
      <p style="font-size: 10.5pt; margin-bottom: 6px;">Bộ chỉnh lưu ${latestReport.input.rectifierPulse || 0} xung có xu hướng sinh các bậc hài ưu thế phụ thuộc vào sơ đồ đấu nối:</p>
      <p style="font-size: 11pt; color: #b91c1c; font-weight: bold; margin: 0 0 30px 0;">${latestReport.harmonics.length ? latestReport.harmonics.map(h => `H${h}`).join(", ") : "Không có"}</p>

      <table class="signature-table" style="width: 100%;">
        <tr>
          <td style="text-align: center; width: 50%;">
            <div class="title" style="font-weight: bold; color: #475569;">KỸ SƯ THỰC HIỆN</div>
            <div class="desc" style="color: #94a3b8; font-size: 8.5pt; margin-bottom: 60px;">(Ký & ghi rõ họ tên)</div>
            <div class="name" style="font-weight: bold; color: #0f6c5c;">MASTER Advisor System</div>
          </td>
          <td style="text-align: center; width: 50%;">
            <div class="title" style="font-weight: bold; color: #475569;">PHÊ DUYỆT BÁO CÁO</div>
            <div class="desc" style="color: #94a3b8; font-size: 8.5pt; margin-bottom: 60px;">(Ký, đóng dấu & ghi rõ họ tên)</div>
            <div class="name" style="font-weight: bold; color: #0f6c5c;">Ban Kỹ thuật & Công nghệ</div>
          </td>
        </tr>
      </table>

      <div class="footer-line" style="border-top: 1px solid #cbd5e1; margin-top: 40px; padding-top: 8px; font-size: 8.5pt; color: #94a3b8;">
        MASTER Engineering Suite &bull; Báo cáo phát hành tự động &bull; Tài liệu nội bộ.
      </div>
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff' + htmlContent], {
    type: 'application/msword;charset=utf-8'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `MASTER-report-${Date.now()}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function runAnalysis() {
  updateConditionalFields();
  const input = readFormData();
  const report = computeReport(input);
  renderReport(report);
}

function init() {
  bindMirrors();

  document.querySelectorAll("[data-step-decrement]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetName = btn.dataset.stepDecrement;
      const rangeInput = form.elements[targetName];
      if (rangeInput) {
        const val = clamp(toNumber(rangeInput.value) - 1, 0, 100);
        rangeInput.value = val;
        rangeInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    });
  });

  document.querySelectorAll("[data-step-increment]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetName = btn.dataset.stepIncrement;
      const rangeInput = form.elements[targetName];
      if (rangeInput) {
        const val = clamp(toNumber(rangeInput.value) + 1, 0, 100);
        rangeInput.value = val;
        rangeInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    });
  });

  syncMirrorsFromForm();
  updateConditionalFields();

  presetButtons.forEach((button) => {
    button.addEventListener("click", () => applyProjectPreset(button.dataset.projectPreset));
  });

  projectSelect.addEventListener("change", () => applyProjectPreset(projectSelect.value));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    runAnalysis();
  });

  form.addEventListener("input", () => runAnalysis());
  form.addEventListener("change", () => runAnalysis());
  exportPdfButton.addEventListener("click", exportPdf);
  exportWordButton.addEventListener("click", exportWord);

  applyProjectPreset(projectSelect.value);
}

init();
