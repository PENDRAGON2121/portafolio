// Mobile menu toggle
document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.add('hidden');
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in animation when scrolling
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = function() {
    for (let i = 0; i < fadeElements.length; i++) {
        const elem = fadeElements[i];
        const distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        
        if (distInView < 0) {
            elem.classList.add('fade-in');
        }
    }
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); 