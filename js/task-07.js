let controlFont = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlFont.addEventListener("input", (e) => {
    text.style.fontSize = controlFont.value + "px";
});