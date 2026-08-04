const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

menu.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

const range = document.querySelector('#days-range');
const daysOutput = document.querySelector('#days-output');
const planOutput = document.querySelector('#plan-output');
const updatePlan = () => {
  const days = Number(range.value);
  const plan = days <= 3 ? 'Day Pass' : days <= 10 ? 'Flex' : 'Fijo';
  daysOutput.textContent = `${days} ${days === 1 ? 'día' : 'días'}`;
  planOutput.textContent = `Te recomendamos ${plan}`;
};
range.addEventListener('input', updatePlan);
updatePlan();

document.querySelectorAll('[data-plan]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#plan-select').value = link.dataset.plan;
  });
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Visita Calfer Workspace · ${data.get('plan')}`);
  const body = encodeURIComponent(`Hola, soy ${data.get('name')}.

Me interesa: ${data.get('plan')}
Teléfono: ${data.get('phone')}
Email: ${data.get('email')}

${data.get('message') || 'Quisiera visitar el espacio y recibir más información.'}`);
  document.querySelector('#form-status').textContent = 'Abriendo tu aplicación de correo…';
  window.location.href = `mailto:workspace@calfergrup.com?subject=${subject}&body=${body}`;
});
