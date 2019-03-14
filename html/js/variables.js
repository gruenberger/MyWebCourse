let x,y,z;
x=10;
y = '10';
z =30;

var newX = x++;

console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);
console.log(`newX is ${newX}`);
console.log(`x == y ${x == y}`);

let timeInMs = Date.now();
let seconds = timeInMs / 1000;
let minutes = seconds /60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 30;
let years = days / 365.25;

console.log(`Years: ${years.toFixed(2)}`);
console.log(`Months: ${months.toFixed(2)}`);
console.log(`Days: ${days.toFixed(2)}`);