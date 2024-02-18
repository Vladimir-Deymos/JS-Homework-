//Exercise 1
function min(a, b) {
  return a < b ? a : b;
}

let result = min(8, 4);
console.log(result);

//Exercise 2
function findTheNumber(num) {
  if (num % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}

findTheNumber();
console.log(findTheNumber(4));

//Exercise 3.1
function calc(num) {
  let mult = num ** 2;
  console.log(mult);
}
calc(3);

//Exercise 3.2
function degree(num) {
  return num ** 2;
}
console.log(degree(3));

//Exercise 4

function age() {
  let answer = prompt("Сколько Вам лет?");

  if (isNaN(answer)) {
    console.log("Пожалуйста, вводите только числа");
  } else if (answer === "" || answer.trim() === "") {
    console.log("Пустая строка");
  } else if (answer === null) {
    console.log("Вы отменили ввод");
  } else if (answer > 0 && answer < 12) {
    console.log("Привет, друг!");
  } else if (answer >= 13) {
    console.log("Добро пожаловать!");
  } else {
    console.log("Вы ввели неправильное значение");
  }
}
age();

//Exercise 5

function listNum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Одно или оба значения не являются числом";
  } else {
    return a * b;
  }
}

listNum(6, 7);

//Exercise 6

function degree() {
  let userNum = prompt("Введите число");

  if (isNaN(userNum)) {
    return "Переданный параметр не является числом";
  } else {
    return `${userNum} в кубе равняется ${userNum ** 3}`;
  }
}

degree();

//Exercise 7

function getCircleArea() {
  return this.radius ** 2 * Math.PI;
}

function getCirclePerimeter() {
  return 2 * this.radius * Math.PI;
}

let circle1 = {
  radius: 4,

  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

let circle2 = {
  radius: 8,

  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());

console.log(circle1.getPerimeter());

console.log(circle2.getArea());

console.log(circle2.getPerimeter());

//Exercise 8

// document.getElementById("game_season").addEventListener("click", () => {
//   let month = prompt("Пожалуйста, введите номер месяца");
//   console.log(season(month));
// });

// function season(month) {
//   // let monthNum = Number(prompt("Пожалуйста, введите номер месяца"));
//   let monthNum = Number(month);

//   if (!month) {
//     return "пустое значение";
//   } else if (isNaN(monthNum)) {
//     return "Нужно вводить цифры!";
//   } else if (monthNum === 12 || monthNum === 1 || monthNum === 2) {
//     return "Зима";
//   } else if (monthNum >= 3 && monthNum <= 5) {
//     return "Весна";
//   } else if (monthNum >= 6 && monthNum <= 8) {
//     return "Лето";
//   } else if (monthNum >= 9 && monthNum <= 11) {
//     return "Осень";
//   } else {
//     return "Время года неизвестно";
//   }
// }
// season();

function season() {
  let monthNum = Number(prompt("Пожалуйста, введите номер месяца"));

  if (monthNum === 12 || monthNum === 1 || monthNum === 2) {
    alert("Зима");
  } else if (monthNum >= 3 && monthNum <= 5) {
    alert("Весна");
  } else if (monthNum >= 6 && monthNum <= 8) {
    alert("Лето");
  } else if (monthNum >= 9 && monthNum <= 11) {
    alert("Осень");
  } else if (isNaN(monthNum)) {
    alert("Нужно вводить цыфры!");
  } else {
    alert("Время года неизвестно");
  }
}
// season();
