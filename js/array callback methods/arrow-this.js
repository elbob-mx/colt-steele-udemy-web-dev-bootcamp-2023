// const person = {
//   firstName: "Darrell",
//   secondName: "Lance",
//   lastName: "Abbott",
//   nickName: "Dimebag",
//   fullName: function () {
//     return `${this.firstName} "${this.nickName}" ${this.lastName}`;
//   },
// };

// using arrow function
const person = {
  firstName: "Darrell",
  secondName: "Lance",
  lastName: "Abbott",
  nickName: "Dimebag",
  fullName: function () {
    return `${this.firstName} "${this.nickName}" ${this.lastName}`;
  },
  shoutTo: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName);
    }, 3000);
  },
};
console.log(person.fullName());
console.log(person.shoutTo());
