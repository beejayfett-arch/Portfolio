// Active section highlight in nav
const links = document.querySelectorAll('.nav-links a');
const sections = Array.from(links)
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const setActive = () => {
  const scrollY = window.scrollY + 120;
  let current = sections[0];
  for (const s of sections) {
    if (s.offsetTop <= scrollY) current = s;
  }
  links.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current.id}`) {
      a.style.color = 'var(--text)';
    }
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();
