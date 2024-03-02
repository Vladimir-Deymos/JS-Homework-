//Exercise 1

let str = "js";
console.log(str.toUpperCase());

//Exercise 2
function searchName(arr, str) {
  return arr.filter((el) => el.toLowerCase().startsWith(str));
}
console.log(searchName(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
console.log(searchName(["яблоко", "груша", "гриб", "огурец"], "гру"));
console.log(searchName(["Дом', 'Банк', 'Больница', 'Театр"], "Кино"));

//Exercise 3
// Округлите число 32.58884:
Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);

//Exercise 4
// 52, 53, 49, 77, 21, 32
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//Exercise 5

function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt(1, 10));

//Exercise 6
function getRandomArrNumbers(maxValue) {
  const getArr = [];
  for (let i = 0; i < Math.floor(maxValue / 2); i++) {
    getArr[i] = Math.floor(Math.random() * maxValue);
  }
  return getArr;
}

console.log(getRandomArrNumbers(6));

//Exercise 7

function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt(5, 16));

//Exercise 8
let now = new Date();
console.log(now);

//Exercise 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//Exercise 10
const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const myDate = new Date();
const hour = myDate.getHours();
const minuts = myDate.getMinutes();
const seconds = myDate.getSeconds();

let fullDate =
  "Дата: " +
  myDate.getDate() +
  " " +
  months[myDate.getMonth()] +
  " " +
  myDate.getFullYear() +
  " - " +
  " это " +
  days[myDate.getDay()];
let fullTime =
  "Время: " +
  myDate.getHours() +
  ":" +
  myDate.getMinutes() +
  ":" +
  myDate.getSeconds();

console.log(fullDate);
console.log(fullTime);
console.log(myDate);
