let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}

// Countdown
const countDownDate = new Date("Jul 15, 2025 00:00:00").getTime();
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  if (distance < 0) {
    clearInterval(countdown);
    timerElement.innerHTML = "🎉 It's Time to Celebrate! 🎉";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Hearts animation
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);
