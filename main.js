const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgOpenCookie = document.querySelector("#imgOpenCookie")
const btnOpenAnother = document.querySelector("#btnOpenAnother")

imgOpenCookie.addEventListener('click', toggleScreen)
btnOpenAnother.addEventListener('click', toggleScreen)

function toggleScreen(event) {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}