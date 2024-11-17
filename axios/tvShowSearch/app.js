const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const userQuery = form.elements.query.value;
    const config = { params: { q: userQuery } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    createImage(res.data);
    console.log(res.data);
    form.elements.query.value = "";
});

const createImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            console.log(result);
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
};
