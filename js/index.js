document.addEventListener('DOMContentLoaded', () => {

  const aboutTrigger = document.querySelector('.about-trigger');
  const contactTrigger = document.querySelector('.contact-trigger');

  if (aboutTrigger) {
    aboutTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      aboutTrigger.classList.toggle('open');
    });
  }

  let timer;

  if (contactTrigger) {
    contactTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      contactTrigger.classList.toggle('open');
      clearTimeout(timer);
      timer = setTimeout(() => {
        contactTrigger.classList.remove('open');
      }, 5000);
    });
  }

  document.addEventListener('click', () => {
    contactTrigger?.classList.remove('open');
    aboutTrigger?.classList.remove('open');
  });

});
