const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");
});


// Typing Effect
const textArray = [
  "Frontend Developer",
  "Web Designer",
  
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < textArray[index].length) {
    typingElement.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// About section fade-in animation
const aboutSection = document.querySelector(".about");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutSection.classList.add("show");
    }
  });
});

observer.observe(aboutSection);


// Skill progress animation
const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      progressBars.forEach(bar => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = value + "%";
      });
    }
  });
}, { threshold: 0.3 });

skillsObserver.observe(skillsSection);


// Reveal service cards on scroll
const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

serviceCards.forEach(card => {
  serviceObserver.observe(card);
});

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
// Timeline reveal animation
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});


// Simple Testimonials Slider
const slides = document.querySelectorAll(".testimonial-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Initial display
showSlide(currentIndex);

// Next slide
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Previous slide
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});


// Simple form validation/submit simulation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === "") {
    formMessage.style.color = "#f87171"; // Red for error
    formMessage.textContent = "Please fill in all fields!";
    return;
  }

  // Simulate successful submission
  formMessage.style.color = "#06b6d4"; // Cyan for success
  formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;

  // Reset form
  contactForm.reset();
});

// Smooth scroll for footer links
const footerLinks = document.querySelectorAll(".footer-links a");

footerLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});
