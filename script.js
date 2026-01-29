// Modern Portfolio JavaScript
(function() {
  'use strict';

  // ===== Current Year in Footer =====
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ===== Mobile Navigation Toggle =====
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      
      // Animate hamburger icon
      const hamburger = mobileToggle.querySelector('.hamburger');
      if (hamburger) {
        hamburger.style.transform = navMenu.classList.contains('active') 
          ? 'rotate(45deg)' 
          : 'rotate(0)';
      }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const hamburger = mobileToggle.querySelector('.hamburger');
        if (hamburger) {
          hamburger.style.transform = 'rotate(0)';
        }
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const hamburger = mobileToggle.querySelector('.hamburger');
        if (hamburger) {
          hamburger.style.transform = 'rotate(0)';
        }
      }
    });
  }

  // ===== Smooth Scrolling for Navigation Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Navbar Scroll Effect =====
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    
    lastScroll = currentScroll;
  });

  // ===== Project Filter (Optional) =====
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 10);
          } else {
            const category = card.getAttribute('data-category');
            if (category === filter) {
              card.style.display = 'block';
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
              }, 10);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'scale(0.9)';
              setTimeout(() => {
                card.style.display = 'none';
              }, 250);
            }
          }
        });
      });
    });
  }

  // ===== Contact Form Handling =====
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      // TODO: Implement actual form submission
      // This is a placeholder - integrate with Formspree, EmailJS, or backend API
      console.log('Form submitted:', data);
      
      // Show success message (placeholder)
      alert('Thank you for your message! This is a demo form. Please integrate with a backend service to enable actual email sending.');
      
      // Reset form
      contactForm.reset();
    });
  }

  // ===== Intersection Observer for Animations =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for fade-in animation
  document.querySelectorAll('.skill-card, .project-card, .timeline-item, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ===== Active Navigation Link Highlighting =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavigation);

  // ===== Keyboard Navigation Support =====
  document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        const hamburger = mobileToggle.querySelector('.hamburger');
        if (hamburger) {
          hamburger.style.transform = 'rotate(0)';
        }
      }
    }
  });

  // ===== Console Message =====
  console.log('%c🚀 Portfolio Site Loaded Successfully!', 'color: #14b8a6; font-size: 16px; font-weight: bold;');
  console.log('%cBuilt with ❤️ by Sai Krishna Rao', 'color: #a0aec0; font-size: 12px;');

})();
