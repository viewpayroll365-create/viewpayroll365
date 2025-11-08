document.addEventListener('DOMContentLoaded', function() {

  // Set current year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Mobile toggle
  const toggle = document.getElementById('mobileToggle');
  const menu = document.querySelector('nav ul');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active'); // show/hide menu
      toggle.setAttribute('aria-expanded', menu.classList.contains('active'));
    });
  }

});

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
