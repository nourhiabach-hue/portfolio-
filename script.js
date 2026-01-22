// Animation au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observer les sections
document.querySelectorAll('.about, .projects, .skills').forEach(section => {
  observer.observe(section);
});

// Animation des barres de compétences
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetWidth = entry.target.style.width;
      entry.target.style.width = '0';
      setTimeout(() => {
        entry.target.style.width = targetWidth;
      }, 200);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));