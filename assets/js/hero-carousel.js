// var swiper = new Swiper(".mySwiper", {
//   effect: "cards",
//   grabCursor: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });


const cards = document.querySelectorAll('.expandable-card');
let activeIndex = 2; // Set the third card as active initially

function cycleCards() {
  cards.forEach((card, index) => {
    card.classList.remove('active');
    if (index === activeIndex) {
      card.classList.add('active');
    }
  });
  activeIndex = (activeIndex + 1) % cards.length;
}

// Automatically expand one card at a time every 2 seconds
setInterval(cycleCards, 2000);

// Start with the third card as active
cycleCards();
