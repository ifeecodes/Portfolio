
        // ==================== DOM ELEMENTS ==================== //
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const html = document.documentElement;

// ==================== MOBILE MENU TOGGLE ==================== //
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
    }
});

// ==================== THEME TOGGLE ==================== //
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// Load saved theme or default to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// ==================== FORM VALIDATION ==================== //
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    let isValid = true;
    
    // Clear previous errors
    nameError.classList.remove('show');
    emailError.classList.remove('show');
    messageError.classList.remove('show');
    
    // Validate name
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.classList.add('show');
        isValid = false;
    } else if (name.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameError.classList.add('show');
        isValid = false;
    }
    
    // Validate email
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailError.classList.add('show');
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email';
        emailError.classList.add('show');
        isValid = false;
    }
    
    // Validate message
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required';
        messageError.classList.add('show');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        messageError.classList.add('show');
        isValid = false;
    }
    
    return isValid;
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        // Form is valid, here you could send the form data to a server
        console.log('Form is valid, sending...');
        
        // Show success message (temporary)
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Message sent! ✓';
        submitBtn.disabled = true;
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    }
});

// ==================== SCROLL REVEAL ANIMATIONS ==================== //
const revealElements = document.querySelectorAll('.skill-card, .project-card, .service-card, .highlight-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // Optional: Stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    observer.observe(el);
});

// ==================== ACTIVE NAV LINK ==================== //
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Check if link href matches current section
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = '';
        }
    });
});

// ==================== SMOOTH LINK NAVIGATION ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== NAVBAR BACKGROUND ON SCROLL ==================== //
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--box-shadow-main)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ==================== PAGE LOAD ANIMATION ==================== //
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
});

// ==================== HANDLE FORM INPUT CLEARING ==================== //
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        const errorId = input.id + 'Error';
        const errorEl = document.getElementById(errorId);
        if (errorEl) {
            errorEl.classList.remove('show');
        }
    });
});

// ==================== PREVENT SPAM SUBMISSIONS ==================== //
let isSubmitting = false;

contactForm.addEventListener('submit', (e) => {
    if (isSubmitting) {
        e.preventDefault();
        return;
    }
    
    isSubmitting = true;
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    
    // Re-enable after 3 seconds
    setTimeout(() => {
        isSubmitting = false;
        submitBtn.disabled = false;
    }, 3000);
});
   