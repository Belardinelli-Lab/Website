// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active navigation link highlighting
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in animation to sections
    const animatedElements = document.querySelectorAll('.research-card, .goal, .team-member, .collaboration-item, .publication-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Typing effect for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Initialize typing effect
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
    
    // Contact form animation (if form is added later)
    function animateContactForm() {
        const contactInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        contactInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
    
    // Call contact form animation if form exists
    animateContactForm();
    
    // Publications loading (placeholder for future API integration)
    function loadPublications() {
        const publicationsList = document.getElementById('publications-list');
        if (publicationsList) {
            // Placeholder for publications - can be replaced with actual API call
            const placeholderHTML = `
                <div class="publication-item">
                    <p class="publication-note">
                        Publications are dynamically loaded from the University of Trento database. 
                        Please visit the link above for the most current list of Dr. Belardinelli's research publications.
                    </p>
                </div>
            `;
            publicationsList.innerHTML = placeholderHTML;
        }
    }
    
    loadPublications();
    
    // Scroll-to-top functionality
    function createScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
            cursor: pointer;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        `;
        
        document.body.appendChild(scrollBtn);
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.transform = 'translateY(0)';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.transform = 'translateY(10px)';
            }
        });
        
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        scrollBtn.addEventListener('mouseenter', function() {
            this.style.background = '#2980b9';
            this.style.transform = 'scale(1.1)';
        });
        
        scrollBtn.addEventListener('mouseleave', function() {
            this.style.background = '#3498db';
            this.style.transform = 'scale(1)';
        });
    }
    
    createScrollToTop();
    
    // Parallax effect for hero section
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    }
    
    window.addEventListener('scroll', parallaxEffect);
    
    // Loading animation
    function showLoadingComplete() {
        document.body.classList.add('loaded');
        
        // Add CSS for loading state
        const style = document.createElement('style');
        style.textContent = `
            body.loaded * {
                animation: fadeInUp 0.6s ease forwards;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Show loading complete after DOM is fully loaded
    setTimeout(showLoadingComplete, 500);
});

// Utility functions for future enhancements

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Format publication data (for future API integration)
function formatPublication(publication) {
    return `
        <div class="publication-item">
            <h4>${publication.title}</h4>
            <p class="authors">${publication.authors}</p>
            <p class="journal">${publication.journal}, ${publication.year}</p>
            <a href="${publication.doi}" target="_blank" class="doi-link">DOI: ${publication.doi}</a>
        </div>
    `;
}

// Search functionality (for future implementation)
function searchPublications(query) {
    // Placeholder for search functionality
    console.log('Searching publications for:', query);
}

// Social media sharing (for future implementation)
function shareOnSocialMedia(platform, url, text) {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
}

// Performance monitoring
function measurePerformance() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
        }, 0);
    });
}

measurePerformance();

// Publications expandable preview functionality
function togglePreview(button) {
    const publicationItem = button.closest('.publication-item');
    const details = publicationItem.querySelector('.publication-details');
    const icon = button.querySelector('i');
    
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.classList.add('expanded');
        button.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Abstract';
        
        // Smooth scroll animation
        setTimeout(() => {
            details.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }, 100);
    } else {
        details.style.display = 'none';
        button.classList.remove('expanded');
        button.innerHTML = '<i class="fas fa-chevron-down"></i> Read Abstract';
    }
}

// Track PDF downloads
function trackPDFDownload(pdfName) {
    // Analytics tracking for PDF downloads
    if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
            'event_category': 'Publications',
            'event_label': pdfName
        });
    }
    console.log('PDF downloaded:', pdfName);
}

// Application Form Functions
function toggleApplicationForm() {
    const form = document.getElementById('applicationForm');
    const isVisible = form.style.display !== 'none';
    
    if (isVisible) {
        form.classList.remove('active');
        setTimeout(() => {
            form.style.display = 'none';
        }, 300);
    } else {
        form.style.display = 'flex';
        setTimeout(() => {
            form.classList.add('active');
        }, 10);
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const fileInput = document.getElementById('cv');
    const fileUploadArea = document.querySelector('.file-upload-area');
    const fileUploadText = document.querySelector('.file-upload-text span');
    
    // File upload handling
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            fileUploadText.textContent = `Selected: ${file.name}`;
            fileUploadArea.style.borderColor = '#28a745';
            fileUploadArea.style.background = '#f8fff9';
        } else {
            fileUploadText.textContent = 'Click to select your CV or drag and drop';
            fileUploadArea.style.borderColor = '#e1e8ed';
            fileUploadArea.style.background = '';
        }
    });
    
    // Drag and drop functionality
    fileUploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.borderColor = '#667eea';
        this.style.background = '#f8f9ff';
    });
    
    fileUploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.borderColor = '#e1e8ed';
        this.style.background = '';
    });
    
    fileUploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            fileInput.dispatchEvent(new Event('change'));
        }
        this.style.borderColor = '#e1e8ed';
        this.style.background = '';
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = {};
            
            // Collect form data
            for (let [key, value] of formData.entries()) {
                if (key !== 'cv') {
                    data[key] = value;
                }
            }
            
            // Get file info
            const cvFile = fileInput.files[0];
            
            // Create email content
            let emailBody = `Dear Prof. Belardinelli,\n\n`;
            emailBody += `I am writing to express my interest in joining the Brain Plasticity Laboratory at CIMeC.\n\n`;
            emailBody += `APPLICATION DETAILS:\n`;
            emailBody += `Name: ${data.fullName}\n`;
            emailBody += `Email: ${data.email}\n`;
            emailBody += `Phone: ${data.phone || 'Not provided'}\n`;
            emailBody += `Position of Interest: ${data.position}\n`;
            emailBody += `Current Institution: ${data.university || 'Not provided'}\n\n`;
            emailBody += `RESEARCH INTERESTS & MOTIVATION:\n${data.researchInterest}\n\n`;
            if (cvFile) {
                emailBody += `CV file attached: ${cvFile.name}\n\n`;
            }
            emailBody += `Thank you for your consideration.\n\nBest regards,\n${data.fullName}`;
            
            // Create mailto link
            const subject = encodeURIComponent(`Application to Join Brain Plasticity Laboratory - ${data.fullName}`);
            const body = encodeURIComponent(emailBody);
            const mailtoLink = `mailto:paolo.belardinelli@unitn.it?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Your email client will open with the application details. Please attach your CV file before sending.');
            
            // Close form
            toggleApplicationForm();
        });
    }
    
    // Close form when clicking outside
    document.addEventListener('click', function(e) {
        const form = document.getElementById('applicationForm');
        const formContainer = document.querySelector('.form-container');
        
        if (form && form.classList.contains('active') && !formContainer.contains(e.target)) {
            toggleApplicationForm();
        }
    });
});