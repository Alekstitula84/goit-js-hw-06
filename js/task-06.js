// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо
// правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті,
//     зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.

const inputData = document.getElementById("validation-input")

const inputDataLength = Number(inputData.dataset.length);
console.log(inputDataLength)

inputData.addEventListener("blur", (ev) => {
    if (ev.currentTarget.value.length === inputDataLength) {
        inputData.classList.remove("invalid");
        inputData.classList.add("valid");
    } else { inputData.classList.add("invalid") };
});