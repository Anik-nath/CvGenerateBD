document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("bg-white");
      navbar_height = document.querySelector(".navbar").offsetHeight;
    } else {
      document.getElementById("navbar_top").classList.remove("bg-white");
    }
  });
});
