//Exercise 1

let enterinPassword = String(prompt("Введите пароль"));
let password = `baffy`;

if (enterinPassword === password) {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен неправильно");
}

//Exercise 2
let c = 4;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверное");
}

//Exercise 3

let d = 56;
let e = 78;
if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//Exercise 4

let a = "2";
let b = "3";
console.log(Number(a) + Number(b));

//Exercise 6

let monthNumber = 12;

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default:
    console.log("Такого месяца нет");
}
// 
//Exercise 7

let number = parseInt(prompt("Пожалуйста, введите любое число"));
isNaN(number);
if (number % 2 === 0) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

//Exercise  8
let clientOS = 0; // 0 — iOS, 1 — Android

if (clientOS === 0) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
  console.log("Установите версию приложения для Android по ссылке");
}

//Exercise  9

let clieOS = 0; //0 — iOS, 1 — Android
let clientDeviceYear = 2015;

if (clientDeviceYear < 2015) {
  if (clieOS === 0) {
    console.log("Установите облегченную версию приложения для iOS по ссылке");
  } else if (clientOS === 1) {
    console.log(
      "Установите облегченную версию приложения для Android по ссылке"
    );
  }
} else {
  if (clieOS === 0) {
    console.log("Установите обычную версию приложения для iOS по ссылке");
  } else if (clieOS === 1) {
    console.log("Установите обычную версию приложения для Android по ссылке");
  }
}
