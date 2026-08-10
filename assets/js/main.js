document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var menuBtn = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      var iconOpen = menuBtn.querySelector('.icon-open');
      var iconClose = menuBtn.querySelector('.icon-close');
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden', isOpen);
        iconClose.classList.toggle('hidden', !isOpen);
      }
    });
  }

  // Highlight active nav link
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('text-gold-600', 'font-semibold');
      link.classList.remove('text-forest-600');
    }
  });

  // Prefill the "service needed" dropdown on the contact form from a query string
  // e.g. contact.html?service=strata links from the Services page
  var serviceSelect = document.getElementById('service');
  if (serviceSelect) {
    var params = new URLSearchParams(window.location.search);
    var service = params.get('service');
    if (service) {
      var optionExists = Array.from(serviceSelect.options).some(function (opt) {
        return opt.value === service;
      });
      if (optionExists) {
        serviceSelect.value = service;
      }
    }
  }

  // Reveal-on-scroll animation
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  // Sticky header shadow on scroll
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Basic client-side required-field check with inline messaging (progressive
  // enhancement only — the form still relies on native "required" validation
  // and the host's form backend for real handling)
  var quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      var honeypot = quoteForm.querySelector('input[name="_honeypot"]');
      if (honeypot && honeypot.value) {
        e.preventDefault();
      }
    });
  }
});
