import '/src/css/index.css';

// handling hamburger menu interaction
const hamMenu = document.querySelector('.hamburger-lines');

hamMenu.addEventListener('click', activateHamMenu);

function activateHamMenu() {
  hamMenu.classList.toggle('active');
}

// handling mouse hover on creations cards
const creationsCards = document.querySelectorAll('.creations-img');

function handleActiveCard() {
  this.classList.add('active');
  this.children[this.children.length - 1].classList.add('active');
}

creationsCards.forEach((item) =>
  item.addEventListener('mouseover', handleActiveCard)
);

function handleDeactivateCard() {
  this.classList.remove('active');
  this.children[this.children.length - 1].classList.remove('active');
}

creationsCards.forEach((item) =>
  item.addEventListener('mouseleave', handleDeactivateCard)
);

// handling creations card width size
creationsCards.forEach((item) => {
  item.children[0].setAttribute('media', '(max-width: 700px)')
})