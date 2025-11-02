/* script.js - shared behaviors */
document.addEventListener('DOMContentLoaded', function(){
  // set year in footer
  var yr = document.getElementById('yr');
  if(yr) yr.textContent = new Date().getFullYear();

  // mobile nav toggle
  const toggle = document.getElementById('mobileToggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const nav = document.querySelector('nav ul');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(nav.style.display === 'flex'){nav.style.display='none';}
      else{
        nav.style.display='flex';
        nav.style.flexDirection='column';
        nav.style.background='var(--glass)';
        nav.style.padding='12px';
        nav.style.position='absolute';
        nav.style.right='28px';
        nav.style.top='80px';
        nav.style.borderRadius='12px';
      }
    });
  }

  // simple client-side form handler (placeholder)
  function handleForm(ev){
    ev.preventDefault();
    alert('Thank you! Your enquiry has been prepared locally. Replace this with a real form handler before publishing.');
    ev.target.reset();
  }
  var cf = document.getElementById('contactForm');
  if(cf) cf.addEventListener('submit', handleForm);
  var qf = document.getElementById('quoteForm');
  if(qf) qf.addEventListener('submit', handleForm);
});
