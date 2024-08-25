// THIS IS THE OLD CLUMSY WAY, but do learn about it

// ("https://icanhazdadjoke.com/");

const request = new XMLHttpRequest();

// on load callback
request.onload = function () {
    console.log("granted.");
    const data = JSON.parse(this.responseText);
    console.log("latest film made: " + data.films[3], "name: " + data.name);
};

// on error callback
request.onerror = function () {
    console.log("error.");
    console.log(this);
};

// open callback
request.open("GET", "https://swapi.dev/api/people/1");
// send callback
request.send();
