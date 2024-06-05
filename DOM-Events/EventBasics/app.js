const btn = document.querySelector("#v2");

btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!!");
};

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
    alert("you clicked the h1!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("auxclick", function () {
    alert("CLICKED!");
});

function twist() {
    console.log("TWIST!");
}
function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");

// can't have more THAN ONE function; it overwrittens
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// we can have as many event listeners as we need
// use this method:
tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);
