//Exercise 1
const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];
people.sort(function (a, b) {
  
  return a.age - b.age;

});

console.log(people);

//Exercise 2

function isPositive(num) {
  return num > 0;
}

function isMale(floor) {
  return floor.gender === "male";
}

function filter(array, callback) {
  const resultArray = [];
  array.forEach((element) => {
    if (callback(element)) {
      resultArray.push(element);
    }
  });
  return resultArray;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const peopleName = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(peopleName, isMale));

//Exercise 3

const timer = () => {
  let currentDate = new Date();

  const interval = setInterval(() => {
    console.log(currentDate);
  }, 3000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("30 секунд прошло");
  }, 30000);
};

timer();

//Exercise 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб!");
});

//Exercise 5

function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi("Глеб"));
