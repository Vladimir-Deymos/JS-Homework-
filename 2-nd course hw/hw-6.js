//Exercise 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
  console.log(numbs[i]);
  if (numbs[i] === 10) {
    break;
  }
}

//Exercise 2

const check = [1, 5, 4, 10, 0, 3];

check.indexOf(4);

//Exercise 3

const num = [1, 3, 5, 10, 20];

console.log(num.join(" "));

//Exercise 4

let newArr = [];

for (let i = 0; i < 3; i++) {
  newArr[i] = [];

  for (let x = 0; x < 3; x++) {
    newArr[i].push(1);
  }
}
console.log(newArr);

//Exercise 5

const arr = [1, 1, 1];

arr.push(2, 2, 2);
console.log(arr);

//Exercise 6

let orderNum = [9, 8, 7, "a", 6, 5];

let order = orderNum.sort();
console.log(order.pop());
console.log(order);

//Exercise 7

let h = [9, 8, 7, 6, 5];
let player = prompt("Угадай какое число");
player = Number(player);

if (isNaN(player)) {
  alert("формат неправильный");
} else if (h.includes(player)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}

//Exercise 8
let d = "abcdef";
let s = d.split("").reverse().join("");
console.log(s);

// let d = "abcdef";
// let result = [];
// for (let i = d.length - 1; i >= 0; i--) {
//   const currentElement = d[i];

//   result.push(currentElement)
// }

// console.log(result.join(''));

//Exercise 9

const group = [
  [1, 2, 3],
  [4, 5, 6],
];
const flatArr = group.flat();
console.log(flatArr);

//Exercise 10

let arbit = [4, 7, 1, 2, 3, 5, 9, 10, 8, 6];

for (let i = 0; i < arbit.length - 1; i++) {
  console.log(arbit[i] + arbit[i + 1]);
}

//Exercise 11

function square(arr) {
  return arr.map((num) => num ** 2);
}

//Exercise 12
function square(array) {
  return array.map((el) => el.length);
}

//Exercise 13

function filterPositive(array) {
  return array.filter(value => value < 0);
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);
