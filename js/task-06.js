const inputData = document.getElementById("validation-input")

const inputDataLength = Number(inputData.dataset.length);
console.log(inputDataLength)

inputData.addEventListener("blur", (ev) => {
    if (ev.currentTarget.value.length === inputDataLength) {
        inputData.classList.remove("invalid");
        inputData.classList.add("valid");
    } else { inputData.classList.add("invalid") };
});