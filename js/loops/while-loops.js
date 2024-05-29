// for loop is better for this kind of iterations
let count = 0;
while (count < 10) {
    count++;
    console.log("and a " + count + "!");
}

//password
const password = "mrBeans";

let attempt = prompt("Enter the password");
while (attempt != password) {
    attempt = prompt("Enter the password");
}
console.log("Thank you");
