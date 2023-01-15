
const fontSize = document.getElementById("font-size-control")
const textSpan = document.getElementById("text")

fontSize.addEventListener("change", setTextSize);

function setTextSize(ev) {
    fontSize.range = ev.currentTarget.value;
    textSpan.style.fontSize = `${ev.target.value}px`
}

