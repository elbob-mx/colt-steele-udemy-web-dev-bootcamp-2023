const blue = require("./blue");
const sadie = require("./sadie");
const janet = require("./janet");

const allCats = [blue, sadie, janet];

module.exports = allCats;

console.log(allCats); // [ { name: 'blue', color: 'grey' }, { name: 'sadie', color: 'black' }, { name: 'janet', color: 'orange' } ]
