const artist = {
  first: "Ashley",
  last: "Wood",
  country: "Australia",
  type: "illustrator",
  technique: "oil and digital painting",
  about:
    "Born 1971 is an Australian comic book artist and illustrator who is well known for his cover art, concept design, and his work as an art director.",
  knownFor:
    "Metal Gear Solid, Judge Dredd, Spawn, Zombies Vs Robots, Silent Hill",
};

const {
  first: firstName,
  last: lastName,
  type: work /* rename variable method */,
  technique,
  about,
  knownFor: worked,
} = artist; /* make a variable from each key called */

console.log(
  firstName,
  lastName,
  "|",
  technique,
  work + ". " + about,
  "//",
  "Known for: ",
  worked
);

/* ---- artist 2 --- */

const artist2 = {
  first: "Jean",
  last: "Giraud",
  aka: "Mœbius",
  type: "illustrator",
  knownFor: "Alien, Tron, The Fifth Element, The Abyss.",
  about:
    "Giraud's working methods were various and adaptable ranging from etchings, white and black illustrations and water colours. ",
};

const {
  first,
  last,
  aka,
  country: bornIn = "France",
  type,
  about: aboutGiraud,
  knownFor,
} = artist2;

console.log(
  first,
  last,
  "|",
  "Ligne claire",
  type + ".",
  aboutGiraud + "//",
  "Known for: " + knownFor
);
