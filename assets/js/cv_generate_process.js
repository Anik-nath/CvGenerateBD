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

function updateCVPreview() {
  const accountSettings = {
    displayName: document.getElementById("displayname").value,
    fullName: document.getElementById("fullname").value,
    birthdate: document.getElementById("birthdate").value,
    jobTitle: document.getElementById("job-title").value,
    experience: document.getElementById("experience").value,
    education: document.getElementById("education").value,
  };

  document.getElementById("preview-name").innerText = accountSettings.fullName;
  document.getElementById("preview-job-title").innerText =
    accountSettings.jobTitle;
  document.getElementById("preview-experience").innerText =
    accountSettings.experience;
  document.getElementById("preview-education").innerText =
    accountSettings.education;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text(document.getElementById("preview-name").innerText, 10, 10);
  doc.text(
    "Job Title: " + document.getElementById("preview-job-title").innerText,
    10,
    20
  );
  doc.text(
    "Experience: " + document.getElementById("preview-experience").innerText,
    10,
    30
  );
  doc.text(
    "Education: " + document.getElementById("preview-education").innerText,
    10,
    40
  );

  doc.save("cv.pdf");
}
