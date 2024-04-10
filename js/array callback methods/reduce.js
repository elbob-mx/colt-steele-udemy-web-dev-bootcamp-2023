const arr = [3, 5, 7, 9, 11];

// sum the array
const arraySum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// 3 + 5 = 8 (first call); 8 + 7 = 15 (second call); 15 + 9 = 24 (third call); 24 + 11 = 35 (fourth / final call);
console.log(arraySum); // 35

/* --------------- */
/* --------------- */

// sales average with reduce
const saleTickets = [9.99, 100.25, 10, 5.5, 9.99];
console.log(saleTickets + " / week sales");

const total = saleTickets.reduce((total, price) => total + price);
console.log("$" + total + " / total sales");

const salesAvg = saleTickets.reduce((sum, current) => {
  return sum + current;
});

const grandAvg = salesAvg / saleTickets.length;
console.log("$" + Math.ceil(grandAvg * 100) / 100 + " / average sale ticket");

const minSale = saleTickets.reduce((min, sale) => {
  if (sale < min) {
    return sale;
  }
  return min;
});
console.log(minSale + " / lowest sale*");
