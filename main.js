const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgOpenCookie = document.querySelector("#imgOpenCookie")
const btnOpenAnother = document.querySelector("#btnOpenAnother")
const phrases = [
  "A sorte está ao seu lado.",
  "Grandes oportunidades estão a caminho.",
  "Seu esforço será recompensado em breve.",
  "Acredite nos seus sonhos e siga em frente.",
  "Momentos difíceis estão prestes a passar.",
  "Boas notícias estão chegando.",
  "Mantenha-se positivo e coisas boas virão.",
  "Seu futuro é brilhante.",
  "Novas aventuras estão esperando por você.",
  "Continue perseverando e alcançará seus objetivos.",
  "A vida é uma aventura, aproveite cada momento.",
  "A persistência é o caminho do sucesso.",
  "Seja a mudança que você deseja ver no mundo.",
  "O universo conspira a favor daqueles que não desistem.",
  "Cada novo dia é uma oportunidade para ser feliz.",
  "Nunca é tarde demais para seguir seus sonhos.",
  "O segredo da felicidade está em apreciar as pequenas coisas.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A gratidão transforma o que temos em suficiente.",
  "Você é mais forte do que imagina, mais corajoso do que pensa e mais amado do que pode imaginar."
]

let cookieFortunePhrase = document.querySelector("#cookieFortunePhrase")

imgOpenCookie.addEventListener('click', handleClick)
btnOpenAnother.addEventListener('click', handleClick)
document.addEventListener('keydown', handleClickEnter)

function handleClick(event) {
  cookieFortunePhrase.innerHTML = selectRandomPhrase();
  toggleScreen(event)
}

function selectRandomPhrase() {
  const indice = Math.floor(Math.random() * phrases.length);
  return phrases[indice];
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleClickEnter(e) {
  if(e.key == 'Enter' && screen2.classList.contains('hide')) {
    handleClick()
  }
}