const text = "Aspiring Junior Developer";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

function scrollTocontact() {
  document.getElementById("contact-card").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("contact-card").addEventListener("click", scrollTocontact);
card.addEventListener('mouseleave', () => {
  const cards = document.querySelectorAll('.contact-card');
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * 12;
  const rotateY = ((x - centerX) / centerX) * 12;
  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});


typeEffect();

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Animated 3D Card Effect for all project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});


