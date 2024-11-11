// axios
//     .get("https://swapi.dev/api/people/4")
//     .then((res) => {
//         console.log("Response: ", res);
//     })
//     .catch((e) => {
//         console.log("An error occured: ", e);
//     });

const getStarWarsCharacterInfo = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("An error occured: ", e);
    }
};

getStarWarsCharacterInfo(1);
getStarWarsCharacterInfo(4);
getStarWarsCharacterInfo(100); // error!
