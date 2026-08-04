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
  const units = { ca: days === 1 ? 'dia' : 'dies', es: days === 1 ? 'día' : 'días', en: days === 1 ? 'day' : 'days' };
  const recommendations = { ca: 'Et recomanem', es: 'Te recomendamos', en: 'We recommend' };
  daysOutput.textContent = `${days} ${units[window.calferLocale]}`;
  planOutput.textContent = `${recommendations[window.calferLocale]} ${window.calferT(plan)}`;
};
range.addEventListener('input', updatePlan);
updatePlan();

document.querySelectorAll('[data-plan]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#plan-select').value = window.calferT(link.dataset.plan);
  });
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const greetings = { ca: `Hola, soc ${data.get('name')}.`, es: `Hola, soy ${data.get('name')}.`, en: `Hello, I am ${data.get('name')}.` };
  const interest = { ca: 'M’interessa', es: 'Me interesa', en: 'I am interested in' };
  const phone = { ca: 'Telèfon', es: 'Teléfono', en: 'Phone' };
  const fallback = { ca: 'Voldria visitar l’espai i rebre més informació.', es: 'Quisiera visitar el espacio y recibir más información.', en: 'I would like to tour the space and receive more information.' };
  const subject = encodeURIComponent(`Visita Calfer Workspace · ${data.get('plan')}`);
  const body = encodeURIComponent(`${greetings[window.calferLocale]}

${interest[window.calferLocale]}: ${data.get('plan')}
${phone[window.calferLocale]}: ${data.get('phone')}
Email: ${data.get('email')}

${data.get('message') || fallback[window.calferLocale]}`);
  const opening = { ca: 'Obrint la teva aplicació de correu…', es: 'Abriendo tu aplicación de correo…', en: 'Opening your email app…' };
  document.querySelector('#form-status').textContent = opening[window.calferLocale];
  window.location.href = `mailto:workspace@calfergrup.com?subject=${subject}&body=${body}`;
});
