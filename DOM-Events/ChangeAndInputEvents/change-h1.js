// variables
const h1 = document.querySelector("h1");
const input = document.querySelector("input");

// functions
input.addEventListener("input", function () {
    h1.innerText = input.value;
    if (input.value) {
        document.querySelector("h1").innerText = `Welcome, ${input.value}`;
        document.querySelector("h1").style.backgroundColor = "lightgray";
    } else {
        document.querySelector("h1").innerText = "Enter Your Username";
        document.querySelector("h1").style.backgroundColor = "white";
    }
});
