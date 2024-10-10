let skillCount = 1;
let languageCount = 1;
let experienceCount = 1;
let educationCount = 1;
let certificationCount = 1;
let projectCount = 1;
let referenceCounter = 1;

// Function to create a new input section dynamically
function createInputSection(containerId, inputHtml) {
  const container = document.getElementById(containerId);
  const div = document.createElement("div");
  div.classList.add("form-group", "mb-3");
  div.innerHTML = inputHtml;
  container.appendChild(div);
  div.querySelector(".remove-section").addEventListener("click", function () {
    div.remove();
  });
}

// Skills Section
document.getElementById("add-skill").addEventListener("click", function () {
  createInputSection(
    "skills-container",
    `
      <input type="text" class="form-control" placeholder="Skill Name" />
      <input type="text" class="form-control" placeholder="Proficiency (e.g., Beginner, Intermediate, Advanced)" id="skill-proficiency-${++skillCount}" />
      <button type="button" class="btn bg-danger text-white remove-section mt-2"><i class="fas fa-trash"></i></button>
    `
  );
});

// Languages Section
document.getElementById("add-language").addEventListener("click", function () {
  createInputSection(
    "languages-container",
    `
      <input type="text" class="form-control" placeholder="Language" />
      <input type="text" class="form-control" placeholder="Proficiency (e.g., Beginner, Intermediate, Advanced)" id="language-proficiency-${++languageCount}" />
      <button type="button" class="btn bg-danger text-white remove-section mt-2"><i class="fas fa-trash"></i></button>
    `
  );
});

// Work Experience Section
document
  .getElementById("add-experience")
  .addEventListener("click", function () {
    createInputSection(
      "work-experience-container",
      `
      <input type="text" class="form-control" placeholder="Job Title" />
      <div class="d-flex">
        <input type="date" class="form-control" placeholder="From Year" />
        <input type="date" class="form-control mx-2" placeholder="To Year" />
      </div>
      <textarea class="form-control" rows="2" placeholder="Description"></textarea>
      <button type="button" class="btn bg-danger text-white remove-section mt-2"><i class="fas fa-trash"></i></button>
    `
    );
  });

// Education Section
document.getElementById("add-education").addEventListener("click", function () {
  createInputSection(
    "education-container",
    `
      <input type="text" class="form-control" placeholder="Degree" />
      <input type="text" class="form-control" placeholder="Institution Name" />
      <div class="d-flex">
        <input type="date" class="form-control" placeholder="From Year" />
        <input type="date" class="form-control mx-2" placeholder="To Year" />
      </div>
      <button type="button" class="btn bg-danger text-white remove-section mt-2"><i class="fas fa-trash"></i></button>
    `
  );
});

// Certifications Section
document
  .getElementById("add-certification")
  .addEventListener("click", function () {
    createInputSection(
      "certifications-container",
      `
      <input type="text" class="form-control" placeholder="Certification Name" />
      <input type="text" class="form-control" placeholder="Issuing Organization" />
      <input type="text" class="form-control" placeholder="Year" />
      <button type="button" class="btn bg-danger text-white remove-section mt-2"><i class="fas fa-trash"></i></button>
    `
    );
  });

// References Section
document.getElementById("add-reference").addEventListener("click", function () {
  referenceCounter++; // Increment counter for each new reference
  createInputSection(
    "references-container",
    `
        <input type="text" class="form-control" placeholder="Reference Name" id="reference-${referenceCounter}" />
        <input type="text" class="form-control" placeholder="Designation" id="designation-${referenceCounter}" />
        <input type="text" class="form-control" placeholder="Contact Information" id="contact-ref-${referenceCounter}" />
        <button type="button" class="btn bg-danger text-white remove-section mt-2"><i class="fas fa-trash "></i></button>
      `
  );
});
// Projects Section
document.getElementById("add-project").addEventListener("click", function () {
  createInputSection(
    "projects-container",
    `
      <input type="text" class="form-control" placeholder="Project Name" />
      <textarea class="form-control" rows="2" placeholder="Project Description"></textarea>
      <button type="button" class="btn bg-danger text-white remove-section mt-2"><i class="fas fa-trash"></i></button>
    `
  );
});