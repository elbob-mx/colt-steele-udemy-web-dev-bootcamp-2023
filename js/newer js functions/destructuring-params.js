const artist = {
  first: "Jean",
  last: "Giraud",
  aka: "Mœbius",
  type: "illustrator",
  about:
    "Giraud's working methods were various and adaptable ranging from etchings, white and black illustrations and water colours.",
  knownFor: "Alien, Tron, The Fifth Element, The Abyss.",
};

// function fullName(artist) {
//   const { first, last, aka, knownFor } = artist;
//   return `${first} "${aka}" ${last}. Known for his work on: ${knownFor} and others.`;
// }

//shorter syntax
function fullName({ first, last, aka, years = "1938 - 2012" }) {
  return `${first} "${aka}" ${last}. ${years}`;
}
console.log(fullName(artist)); //Jean "Mœbius" Giraud
