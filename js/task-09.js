const changeColor = document.querySelector(".change-color");
const widgetColor = document.querySelector(".widget");
const spanColor = document.querySelector(".color");
changeColor.addEventListener("click", (e) => {
    let randomColor = getRandomHexColor();
    widgetColor.style.backgroundColor = randomColor;
    spanColor.textContent = `-${randomColor}`;
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}