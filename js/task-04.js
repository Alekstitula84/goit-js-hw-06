

const startValue = document.getElementById("value");
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');


let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
    counterValue = counterValue -= 1;
    startValue.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
    counterValue = counterValue += 1;
    startValue.textContent = counterValue;
});

