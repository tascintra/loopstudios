import './css/index.css'

const hamMenu = document.querySelector(".hamburger-lines")

hamMenu.addEventListener('click', activateHamMenu)

function activateHamMenu() {
  hamMenu.classList.toggle("active")
}