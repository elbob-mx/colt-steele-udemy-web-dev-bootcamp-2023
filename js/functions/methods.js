// const mathTools = {
//   Pi: 3.14159,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

/*-------------------------*/
/*-------------------------*/

// shorter syntax; same effect
const mathTools = {
  Pi: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

console.log(mathTools.square(2)); // 4
console.log(mathTools["cube"](3)); // 27 (brackets instead of dot syntax)

/*-------------------------*/
/*-------------------------*/

const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

square.area(10);
console.log(square.area(10) + " = square area");
square.perimeter(10);
console.log(square.perimeter(10) + " = square perimeter");
