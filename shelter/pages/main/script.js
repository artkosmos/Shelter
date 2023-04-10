import PETS from '../../assets/info_pets.json' assert { type:'json' }

const initialPets = PETS.slice(0,3)
console.log(initialPets)


// BURGER MENU---------------------------------------------------
const burgerButton = document.querySelector('.burger')
const navHeader = document.querySelector('.menu')
const notScroll = document.getElementById('html')
const overLay = document.querySelector('.overlay')
const menuLinkItem = document.querySelectorAll('.menu__item')

function menuBurgerActivityHandler() {
  burgerButton.classList.toggle('burger_active')
  navHeader.classList.toggle('menu_active')
  notScroll.classList.toggle('lock-scroll')
  overLay.classList.toggle('overlay_active')
}

// open burger menu when click on icon burger
burgerButton.addEventListener('click', (event) => {
  menuBurgerActivityHandler()
})

if (window.screen.width < 768) {
  menuLinkItem.forEach((link) => {
    link.addEventListener('click', (event) => {
      menuBurgerActivityHandler()
    })
  })
}

//close burger menu when click outside
overLay.addEventListener('click', (event) => {
  menuBurgerActivityHandler()
})


// SLIDER ------------------------------------------------------

const sliderCards = document.querySelector('.slider__cards')

function generateCard(data) {
  const {name, img, id} = data;
  return `
  <div id=${id} class="slider__card cards-item">
    <img src=${img} alt="cat" class="cards-item__image">
    <div class="cards-item__name">${name}</div>
    <button class="cards-item__button button-empty">Learn more</button>
  </div>
  `
}

function showCard () {
  initialPets.forEach((item) => {
    const card = generateCard(item)
    sliderCards.insertAdjacentHTML('afterbegin', card)
  })
}

showCard()


// POP-UP -------------------------------------------------------
const popUp = document.querySelector('.pop-up')
const animalCards = document.querySelectorAll('.cards-item')
const closePopUp = document.querySelector('.pop-up__close')
const popupContent = document.querySelector('.popup-card')

function popUpOpenHandler(event) {
  const cardId = event.currentTarget.id
  const newPetInfo = generatePopUpInfo(initialPets[cardId])
  popupContent.innerHTML = newPetInfo
  popUp.classList.toggle('pop-up_visibility')
  notScroll.classList.toggle('lock-scroll')
  console.log(cardId)
}

function popUpCloseHandler(event) {
  popUp.classList.toggle('pop-up_visibility')
  notScroll.classList.toggle('lock-scroll')
}

// open modal window on each card
animalCards.forEach((card) => {
  card.addEventListener('click', popUpOpenHandler)
})

// close modal window when click outside
popUp.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up')) {
    popUpCloseHandler()
  }
})

// close modal window when click cross
closePopUp.addEventListener('click', (event) => {
  popUpCloseHandler()
})

// generate pop-up info
function generatePopUpInfo(data) {
  const {name, img, type, breed, description, age, inoculations, diseases, parasites} = data
  return `
  <img class="popup-card__image" src=${img} alt="animal">
  <div class="popup-card__info">
    <div class="popup-card__titleblock">
      <div class="popup-card__title">${name}</div>
      <div class="popup-card__subtitle">${type} - ${breed}</div>
    </div>
    <div class="popup-card__description">${description}</div>
    <div class="popup-card__facts">
      <ul class="popup-card__list list">
        <li><span class="list__item">Age:</span> <span class="list__text">${age}</span></li>
        <li><span class="list__item">Inoculations:</span> <span class="list__text">${inoculations}</span></li>
        <li><span class="list__item">Diseases:</span> <span class="list__text">${diseases}</span></li>
        <li><span class="list__item">Parasites:</span> <span class="list__text">${parasites}</span></li>
      </ul>
    </div>
  </div>
  `
}




