// axios
//     .get("https://swapi.dev/api/people/4")
//     .then((res) => {
//         console.log("Response: ", res);
//     })
//     .catch((e) => {
//         console.log("An error occured: ", e);
//     });

// const getStarWarsCharacterInfo = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("An error occured: ", e);
//     }
// };

// getStarWarsCharacterInfo(1);
// getStarWarsCharacterInfo(4);
// getStarWarsCharacterInfo(84); // last available is 83 -> error!

const jokes = document.querySelector("#jokes");
const jokeBtn = document.querySelector("#jokeBtn");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLi = document.createElement("Li");
    newLi.append(jokeText);
    jokes.append(newLi);
};
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        return "no jokes available. Call your dad over the phone or something.";
    }
};

jokeBtn.addEventListener("click", addNewJoke);
