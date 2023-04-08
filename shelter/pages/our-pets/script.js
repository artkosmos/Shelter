// burger menu
const burgerButton = document.querySelector('.burger')
const navHeader = document.querySelector('.menu')
const notScroll = document.getElementById('html')
const overLay = document.querySelector('.overlay')
const menuLinkItem = document.querySelectorAll('.menu__item')

function closeOpenBurgerHandler() {
  burgerButton.classList.toggle('burger_active')
  navHeader.classList.toggle('menu_active')
  notScroll.classList.toggle('lock-scroll')
  overLay.classList.toggle('overlay_active')
}

burgerButton.addEventListener('click', (event) => {
  closeOpenBurgerHandler()
})

menuLinkItem.forEach((link) => {
  link.addEventListener('click', (event) => {
    closeOpenBurgerHandler()
  })
})