// burger menu
const burgerButton = document.querySelector('.burger');
const navHeader = document.querySelector('.menu')

burgerButton.addEventListener('click', (event) => {
  burgerButton.classList.toggle('burger_active')
  navHeader.classList.toggle('menu_active')
})