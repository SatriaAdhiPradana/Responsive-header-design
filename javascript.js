const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  menu.classList.toggle('active');
});
