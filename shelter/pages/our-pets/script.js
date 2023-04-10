import PETS from '../../assets/info_pets.json' assert { type:'json' }
const initialPets = PETS
console.log(initialPets)


// burger menu
const burgerButton = document.querySelector('.burger')
const navHeader = document.querySelector('.mobile-menu')
const notScroll = document.getElementById('html')
const overLay = document.querySelector('.overlay')
const menuLinkItem = document.querySelectorAll('.mobile-menu__item')

function menuBurgerActivityHandler() {
  burgerButton.classList.toggle('burger_active')
  navHeader.classList.toggle('mobile-menu_active')
  notScroll.classList.toggle('lock-scroll')
  overLay.classList.toggle('overlay_active')
}

// open burger menu when click on icon burger
burgerButton.addEventListener('click', (event) => {
  menuBurgerActivityHandler()
})

//close burger menu when click on link
menuLinkItem.forEach((link) => {
  link.addEventListener('click', (event) => {
    menuBurgerActivityHandler()
  })
})

//close burger menu when click outside
overLay.addEventListener('click', (event) => {
  menuBurgerActivityHandler()
})