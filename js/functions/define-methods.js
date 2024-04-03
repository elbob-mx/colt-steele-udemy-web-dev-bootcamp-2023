const mathTools = {
  Pi: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};

console.log(mathTools.square(2)); // 4
console.log(mathTools.cube(3)); // 27
