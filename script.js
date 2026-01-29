// Portfolio Interactive Features
(function() {
  'use strict';

  // ===========================
  // Mobile Navigation Toggle
  // ===========================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      }
    });
  }

  // ===========================
  // Smooth Scrolling
  // ===========================
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle internal anchor links
      if (href !== '#' && href.length > 1) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const headerOffset = 80; // Account for fixed header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // ===========================
  // Dynamic Year in Footer
  // ===========================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ===========================
  // Header Scroll Effect
  // ===========================
  const header = document.querySelector('.header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow to header when scrolled
    if (scrollTop > 50) {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
  });

  // ===========================
  // Intersection Observer for Animations
  // ===========================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.skill-category, .timeline-item, .project-card, .education-card, .contact-item'
  );
  
  animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });

  // Add animation class styles
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // ===========================
  // Active Navigation Link Highlighting
  // ===========================
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active-link');
        } else {
          navLink.classList.remove('active-link');
        }
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavigation);

  // Add active link styles
  const activeStyle = document.createElement('style');
  activeStyle.textContent = `
    .nav-link.active-link {
      color: var(--accent-primary);
    }
    .nav-link.active-link::after {
      width: 100%;
    }
  `;
  document.head.appendChild(activeStyle);

  // ===========================
  // Lazy Loading Images
  // ===========================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
  }

  // ===========================
  // Performance: Debounce Scroll Events
  // ===========================
  function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Apply debounce to scroll-based functions
  window.addEventListener('scroll', debounce(highlightNavigation, 20));

  // ===========================
  // Accessibility: Keyboard Navigation
  // ===========================
  // Ensure focus is visible for keyboard users
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });

  // Add keyboard navigation styles
  const keyboardStyle = document.createElement('style');
  keyboardStyle.textContent = `
    body:not(.keyboard-nav) *:focus {
      outline: none;
    }
    .keyboard-nav *:focus {
      outline: 2px solid var(--accent-primary);
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(keyboardStyle);

  // ===========================
  // Console Easter Egg
  // ===========================
  console.log('%c👋 Hello, Developer!', 'color: #64ffda; font-size: 20px; font-weight: bold;');
  console.log('%cInterested in working together? Reach out at saikrishnarao1803@gmail.com', 'color: #8892b0; font-size: 14px;');

})();
