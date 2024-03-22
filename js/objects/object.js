console.log(typeof {});
console.log(typeof []);

// object literal example
const maxStrength = 10;

const hand = {
  fingers: 5,
  nails: true,
  hold: true,
  strength: 7,
};

// accessing object property
console.log(`I have ${hand.fingers} fingers.`);

// array nested in object
const product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "pineapple", "cherry"],
};

// add whitespace where needed
console.log(
  `Ok😁!, for ${product.name} we have these flavors: ${product.flavors.join(
    ", "
  )}. Their price is ${product.price} each.`
);

// product name changed
product.name = "Haribo Gummies";
console.log(
  `Ok😁!, for ${product.name} we have these flavors: ${product.flavors.join(
    ", "
  )}. Their price is $${product.price} each.`
);

/* object to array example (credits to: https://stackoverflow.com/users/13555735/akshay-pagare)
let obj = { x: 1, y: 2, z: 3 };
let outputArray = [];
for (let i = 0; i < Object.keys(obj).length; i++) {
  outputArray.push(Object.keys(obj)[i] + " " + Object.values(obj)[i]);
}

console.log(outputArray); */
