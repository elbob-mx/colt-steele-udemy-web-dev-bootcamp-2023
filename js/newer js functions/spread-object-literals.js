const feline = { legs: 4, family: "Felidae" };
const canine = { family: "Caninae", furry: true };

const dog = { ...canine, isPet: true };
console.log(dog);
// { family: 'Caninae', furry: true, isPet: true }

const lion = { ...feline, genus: "Panthera" };
console.log(lion);
// { legs: 4, family: 'Felidae', genus: 'Panthera' }

const catDog = { ...feline, ...canine };
console.log(catDog);
// { legs: 4, family: 'Caninae', furry: true } (ORDER MATTERS. first declared 'family' value gets overwritten by the second called 'family' value)

const pinkLion = { ...feline, ...lion, color: "pink", origin: "France" }; // add new pair
console.log(pinkLion);

/* ----------- */
/* ----------- */

const arrayNums = { ...[2, 4, 6, 8] };
console.log(arrayNums); // { '0': 2, '1': 4, '2': 6, '3': 8 }
console.log(arrayNums[1]); // 4

/* ----------- */
/* ----------- */

const dataFromForm = {
  email: "dime@panther.com",
  password: "cfh101_Pr00f",
  username: "black.tooth",
};

const copyUserData = {
  ...dataFromForm,
  id: 10100001,
  isAdmin: true,
};
console.log(copyUserData);

/* ----------- */
/* ----------- */
