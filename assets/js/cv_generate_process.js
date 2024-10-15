let currentStep = 1;

function showStep(step) {
  document
    .querySelectorAll(".process-tab-content")
    .forEach((content) => content.classList.add("d-none"));
  document
    .querySelectorAll(".timeline .step")
    .forEach((stepEl) => stepEl.classList.remove("active"));

  document.getElementById(`step-${step}-content`).classList.remove("d-none");
  document.getElementById(`step${step}`).classList.add("active");
  currentStep = step;

  if (step === 3) {
    updateCVPreview();
  }
}

function nextStep() {
  if (currentStep < 4) {
    showStep(currentStep + 1);
  }
}

function prevStep() {
  if (currentStep > 1) {
    showStep(currentStep - 1);
  }
}



