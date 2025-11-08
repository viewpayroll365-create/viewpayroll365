// script.js - Shared behaviors for all pages
document.addEventListener('DOMContentLoaded', function() {

  // =============================
  // 1. Set current year in footer
  // =============================
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // =============================
  // 2. Mobile navigation toggle
  // =============================
  const toggle = document.getElementById('mobileToggle');
  const menu = document.querySelector('nav ul');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      // Toggle ARIA attribute
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isExpanded));

      // Toggle mobile menu
      menu.classList.toggle('active');
    });
  }

  // =============================
  // 3. Simple client-side form handler (placeholder)
  // =============================
  function handleForm(ev) {
    ev.preventDefault();
    alert('Thank you! Your enquiry has been prepared locally. Replace this with a real form handler before publishing.');
    ev.target.reset();
  }

  const contactForm = document.getElementById('contactForm');
  const quoteForm = document.getElementById('quoteForm');

  if (contactForm) contactForm.addEventListener('submit', handleForm);
  if (quoteForm) quoteForm.addEventListener('submit', handleForm);

});
