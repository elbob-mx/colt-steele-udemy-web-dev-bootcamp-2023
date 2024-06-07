const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", function (stop) {
    container.style.backgroundColor = makeRandColor();
    stop.stopPropagation();
});
container.addEventListener("click", function () {
    document.querySelector("#container").style.fontFamily = "monospace";
    document.querySelector("#container").style.backgroundColor = "lightcyan";
    container.classList.toggle("hide");
});

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};
