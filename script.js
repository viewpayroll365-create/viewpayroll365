document.addEventListener('DOMContentLoaded', function() {

  // Set year in footer
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const toggle = document.getElementById('mobileToggle');
  const menu = document.querySelector('nav ul');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active'); // toggle mobile menu
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isExpanded));
    });
  }

  // Form handler placeholder
  function handleForm(ev) {
    ev.preventDefault();
    alert('Thank you! Your enquiry has been prepared locally.');
    ev.target.reset();
  }

  const contactForm = document.getElementById('contactForm');
  const quoteForm = document.getElementById('quoteForm');

  if (contactForm) contactForm.addEventListener('submit', handleForm);
  if (quoteForm) quoteForm.addEventListener('submit', handleForm);

});
