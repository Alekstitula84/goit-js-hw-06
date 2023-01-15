

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const spanColor = document.querySelector('.color')
const bodyStyle = document.querySelector('body')
// console.log(button);
// console.log(spanColor);
// console.log(bodyStyle);
button.addEventListener('click', changeColor)

function changeColor() {
  bodyStyle.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyStyle.style.backgroundColor;
  console.log(spanColor.textContent);
}