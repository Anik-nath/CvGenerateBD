function toggleText() {
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.hidden) {
    moreText.hidden = false;
    btn.textContent = "Read Less";
  } else {
    moreText.hidden = true;
    btn.textContent = "Read More";
  }
}
