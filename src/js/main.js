import '/src/css/index.css';

const hamMenu = document.querySelector('.hamburger-lines');

hamMenu.addEventListener('click', activateHamMenu);

function activateHamMenu() {
  hamMenu.classList.toggle('active');
}

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
