const cont = document.querySelector("#container"); // we declare the container div

// we create a loop to render 100 buttons; a button each loop
for (let i = 0; i < 1000; i++) {
    const btn = document.createElement("button"); // we declare and create a <button> element
    const div = document.querySelector("div"); // we declare and call the <div> with the "container" ID
    btn.innerText = "copy of a"; // we put a text on the button
    div.appendChild(btn); // we append the button child on the div parent
}
