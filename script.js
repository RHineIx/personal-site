document.querySelector('#year').textContent = new Date().getFullYear();
const nameMark = document.querySelector('.name-mark');
const liftName = () => {
  nameMark.classList.remove('is-lifted');
  requestAnimationFrame(() => nameMark.classList.add('is-lifted'));
  window.setTimeout(() => nameMark.classList.remove('is-lifted'), 1100);
};
nameMark.addEventListener('click', liftName);
nameMark.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); liftName(); }
});
