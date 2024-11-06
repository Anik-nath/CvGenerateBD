window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const delay = 1500;
  document.body.classList.add("content-hidden");
  setTimeout(() => {
    preloader.style.display = "none";
    document.body.classList.remove("content-hidden");
  }, delay);
});
