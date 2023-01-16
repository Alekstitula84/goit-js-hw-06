

const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output")

inputName.addEventListener("input", (ev) => {
    outputName.textContent = ev.currentTarget.value;
    if (!outputName.textContent) {
        outputName.textContent = "Anonymous"
    }
})