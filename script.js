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

  // ===========================
  // Message Dialog Functionality
  // ===========================
  const messageDialog = document.getElementById('messageDialog');
  const openMessageBtn = document.getElementById('openMessageDialog');
  const closeMessageBtn = document.getElementById('closeMessageDialog');
  const cancelMessageBtn = document.getElementById('cancelMessage');
  const messageForm = document.getElementById('messageForm');
  const formFeedback = document.getElementById('formFeedback');

  // Open dialog
  if (openMessageBtn && messageDialog) {
    openMessageBtn.addEventListener('click', function() {
      messageDialog.classList.add('active');
      messageDialog.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      
      // Focus on first input
      const firstInput = messageDialog.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    });
  }

  // Close dialog function
  function closeDialog() {
    if (messageDialog) {
      messageDialog.classList.remove('active');
      messageDialog.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Restore scroll
      
      // Reset form and feedback
      if (messageForm) {
        messageForm.reset();
      }
      if (formFeedback) {
        formFeedback.className = 'form-feedback';
        formFeedback.textContent = '';
      }
    }
  }

  // Close dialog on close button click
  if (closeMessageBtn) {
    closeMessageBtn.addEventListener('click', closeDialog);
  }

  // Close dialog on cancel button click
  if (cancelMessageBtn) {
    cancelMessageBtn.addEventListener('click', closeDialog);
  }

  // Close dialog on overlay click
  if (messageDialog) {
    messageDialog.addEventListener('click', function(e) {
      if (e.target === messageDialog || e.target.classList.contains('modal-overlay')) {
        closeDialog();
      }
    });
  }

  // Close dialog on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && messageDialog && messageDialog.classList.contains('active')) {
      closeDialog();
    }
  });

  // Handle form submission
  if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('senderName').value.trim(),
        linkedinUsername: document.getElementById('linkedinUsername').value.trim(),
        message: document.getElementById('messageText').value.trim()
      };

      // Validate form
      if (!formData.name || !formData.linkedinUsername || !formData.message) {
        showFeedback('error', 'Please fill in all required fields.');
        return;
      }

      // Validate LinkedIn username format (alphanumeric and hyphens only)
      const linkedinUsernamePattern = /^[a-zA-Z0-9-]{3,100}$/;
      if (!linkedinUsernamePattern.test(formData.linkedinUsername)) {
        showFeedback('error', 'LinkedIn username should be 3-100 characters, using only letters, numbers, and hyphens.');
        return;
      }

      // Sanitize input to prevent email header injection
      const sanitize = (str) => str.replace(/[\r\n]/g, ' ').trim();
      const sanitizedData = {
        name: sanitize(formData.name),
        linkedinUsername: sanitize(formData.linkedinUsername),
        message: sanitize(formData.message)
      };

      // Create mailto link with pre-filled content
      // Note: Direct LinkedIn messaging API requires OAuth authentication which is not feasible
      // for a static portfolio. Using email as the delivery method provides a functional alternative.
      const subject = encodeURIComponent(`Portfolio Contact from ${sanitizedData.name}`);
      const body = encodeURIComponent(
        `Name: ${sanitizedData.name}\n` +
        `LinkedIn: https://www.linkedin.com/in/${sanitizedData.linkedinUsername}\n\n` +
        `Message:\n${sanitizedData.message}\n\n` +
        `---\nSent from portfolio contact form`
      );
      
      const mailtoLink = `mailto:saikrishnarao1803@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client using a temporary anchor element for better cross-browser compatibility
      const tempLink = document.createElement('a');
      tempLink.href = mailtoLink;
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      
      // Show success message
      showFeedback('success', 
        'Your email client should open with a pre-filled message. ' +
        'Please review and send it to complete your message. ' +
        'If your email client didn\'t open, please email me directly at saikrishnarao1803@gmail.com'
      );
      
      // Reset form after success message is shown (after 10 seconds to match success message duration)
      setTimeout(() => {
        messageForm.reset();
      }, 10000);
    });
  }

  function showFeedback(type, message) {
    if (formFeedback) {
      formFeedback.className = `form-feedback ${type}`;
      formFeedback.textContent = message;
      
      // Auto-hide success messages after 10 seconds
      if (type === 'success') {
        setTimeout(() => {
          formFeedback.className = 'form-feedback';
          formFeedback.textContent = '';
        }, 10000);
      }
    }
  }

})();
