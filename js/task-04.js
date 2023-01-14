// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

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

