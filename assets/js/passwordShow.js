function toggleEye(element) {
  const targetId = element.getAttribute("data-target");
  const inputField = document.getElementById(targetId);

  const type =
    inputField.getAttribute("type") === "password" ? "text" : "password";
  inputField.setAttribute("type", type);

  const icon = element.querySelector("i");
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
}

document.querySelectorAll(".toggle-password").forEach((element) => {
  element.addEventListener("click", function () {
    toggleEye(this);
  });
});
