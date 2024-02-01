//Exercise 1
let a = 10;
alert(a);
a = 20;
alert(20);

//Exercise 2
let iphoneRelease = 2007;
alert(iphoneRelease);

//Exercise 3
let nameJs = "Brendan Eich";
alert(nameJs);

//Exercise 4
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//Exercise 5
let result = 2 ** 5;
alert(result);

//Exercise 6
a = 9;
b = 2;
alert(a % b);

//Exercise 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Exercise 8
let age = Number(prompt("Сколько вам лет?"));
alert(age);

//Exercise 9
const user = {
  name: "Vladimir",
  age: 36,
  isAdmin: false,
};

//Exercise 9.1
user["city of residence"] = "Zelenograd";

//Exercise 9.2
user.age = 21;

//Exercise 9.3
delete user["city of residence"];

//Exercise 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?", "name" , "age" , "isAdmin")
alert = (user[info])
console.log(alert)

//Exercise 10
let userName = prompt('Как к вам обращаться?')
alert = (`Привет, ${userName}!`)
console.log(alert)

