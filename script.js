/**
 * Sai Krishna Rao - Portfolio JavaScript
 * Modern interactive features and animations
 */

(function() {
  'use strict';

  // ========== Theme Toggle ==========
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const themeIcon = themeToggle?.querySelector('.theme-icon');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    root.classList.add('light');
    if (themeIcon) themeIcon.textContent = '☀︎';
  }

  // Theme toggle handler
  themeToggle?.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if (themeIcon) {
      themeIcon.textContent = isLight ? '☀︎' : '☾';
    }
  });

  // ========== Mobile Navigation ==========
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  mobileMenuToggle?.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mainNav?.classList.toggle('active');
    document.body.style.overflow = mainNav?.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        mobileMenuToggle?.classList.remove('active');
        mainNav?.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close mobile menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      mobileMenuToggle?.classList.remove('active');
      mainNav?.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ========== Smooth Scrolling ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== Project Filtering ==========
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Get filter value
      const filterValue = button.getAttribute('data-filter');

      // Filter projects
      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.5s ease-out forwards';
        } else {
          const categories = card.getAttribute('data-category');
          if (categories && categories.includes(filterValue)) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeIn 0.5s ease-out forwards';
          } else {
            card.classList.add('hidden');
          }
        }
      });
    });
  });

  // ========== Intersection Observer for Animations ==========
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    '.skill-category, .timeline-item, .project-card, .education-card, .about-card'
  );
  
  animatedElements.forEach(el => observer.observe(el));

  // ========== Navbar Background on Scroll ==========
  const topbar = document.querySelector('.topbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 10) {
      topbar?.classList.add('scrolled');
    } else {
      topbar?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // ========== Brand Button Handler ==========
  const brandBtn = document.getElementById('brandBtn');
  
  brandBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ========== Contact Form Handler ==========
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  contactForm?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const action = this.getAttribute('action');
    
    // Check if form action is configured
    if (!action || action.includes('YOUR_FORM_ID')) {
      alert('Please configure the Formspree form action endpoint in the contact form.\n\nReplace "YOUR_FORM_ID" with your actual Formspree form ID.');
      return;
    }
    
    const formData = new FormData(this);
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn?.textContent;
    
    // Show loading state
    if (submitBtn) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    }
    
    try {
      const response = await fetch(action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Success
        this.reset();
        if (contactSuccess) {
          contactSuccess.style.display = 'block';
          setTimeout(() => {
            contactSuccess.style.display = 'none';
          }, 5000);
        }
      } else {
        // Error
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again or contact me directly via email.');
      console.error('Form submission error:', error);
    } finally {
      // Reset button state
      if (submitBtn) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    }
  });

  // ========== Footer Year ==========
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ========== Performance Optimization ==========
  // Lazy load images
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  // ========== Active Nav Link on Scroll ==========
  const sections = document.querySelectorAll('section[id]');
  
  function setActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('active-link');
      } else {
        navLink?.classList.remove('active-link');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveNavLink);
  setActiveNavLink(); // Call once on load

  // ========== Keyboard Navigation ==========
  document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && mainNav?.classList.contains('active')) {
      mobileMenuToggle?.classList.remove('active');
      mainNav?.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ========== Console Message ==========
  console.log('%c👋 Hi there!', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
  console.log('%cLooking for a Data Engineer? Let\'s connect!', 'color: #94a3b8; font-size: 14px;');
  console.log('%cEmail: saikrishnarao1803@gmail.com', 'color: #10b981; font-size: 14px;');

})();
