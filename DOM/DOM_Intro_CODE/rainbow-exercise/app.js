const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
const rainbowLetters = document.getElementsByTagName("span");

for (let i = 0; i < colors.length; i++) {
    rainbowLetters[i].style.color = colors[i];
}
