// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in on scroll
const elements = document.querySelectorAll('.fade-in');

function showElements() {
  const triggerBottom = window.innerHeight * 0.9;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add('visible');
  });
}

window.addEventListener('scroll', showElements);
showElements();

