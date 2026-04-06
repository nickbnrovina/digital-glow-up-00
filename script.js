// Intersection Observer for scroll animations
const scrollElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');

const elementInView = (el, dividend = 1.1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const displayScrollElement = (element) => {
    element.classList.add('appear');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.1)) {
            displayScrollElement(el);
        }
    })
}

// Initial check
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
});

// Check on scroll
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger to X
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when a link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Aanvraag Verzenden...';
        submitBtn.disabled = true;

        // Simulate API call delay
        setTimeout(() => {
            submitBtn.textContent = 'Succesvol Verzonden!';
            submitBtn.style.background = '#00c853';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }, 1500);
    });
}
