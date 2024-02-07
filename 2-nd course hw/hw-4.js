//Exercise 1
let i = 0;

while (i < 2) {
  console.log("Привет");
  i++;
}

//Exercise 2

let a = 1;

while (a <= 5) {
  console.log(a);
  a++;
}

//Exercise 3
let c = 7;

while (c <= 22) {
  console.log(c);
  c++;
}

//Exercise 4
const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};
for (let key in obj) {
  console.log(`${key} — зарплата ${obj[key]} долларов`);
}

//Exercise 5

let n = 1000;
let nam = 0;

while (n >= 50) {
  n /= 2;
  nam++;
}
console.log(n);
console.log(nam);

//Exercise 6
for (let i = 1; i <= 31; i += 7) {
  console.log(`Сегодня пятница ${i}-е число. Необходимо подготовить отчет.  `);
}
