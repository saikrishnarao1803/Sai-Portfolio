// ============================================
// Portfolio Website - Interactive JavaScript
// ============================================

(function() {
  'use strict';

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // ============================================
  // Smooth Scrolling
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // Scroll Animations
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.skill-category, .timeline-item, .project-card, .education-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

  // ============================================
  // Header Scroll Effect
  // ============================================
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
      // Scrolling down
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      // Scrolling up
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
  });

  // ============================================
  // Project Filter (if needed in future)
  // ============================================
  const projectFilters = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Remove active class from all filters
      projectFilters.forEach(f => f.classList.remove('active'));
      // Add active class to clicked filter
      this.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'block';
        } else {
          const projectCategory = card.getAttribute('data-category');
          if (projectCategory === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // ============================================
  // Update Current Year in Footer
  // ============================================
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ============================================
  // Typing Effect for Hero (optional enhancement)
  // ============================================
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && heroTitle.hasAttribute('data-typing')) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    function type() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }
    
    type();
  }

  // ============================================
  // Active Navigation Link on Scroll
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else if (navLink) {
        navLink.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavigation);

  // ============================================
  // Prevent transition on window resize
  // ============================================
  let resizeTimer;
  window.addEventListener('resize', function() {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  });

  // ============================================
  // Console Message
  // ============================================
  console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #14b8a6; font-size: 16px; font-weight: bold;');
  console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #a8b3c7; font-size: 14px;');

})();
