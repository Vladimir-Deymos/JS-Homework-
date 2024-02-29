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

function gameFruits() {
  let fruits = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  fruits = fruits.sort(() => Math.random() - 0.5);
  alert(fruits);

  let firstWord = prompt("Какое слово было первым?").toLowerCase();
  let lastWord = prompt("Какое слово было последним?").toLowerCase();

  if (firstWord.toLowerCase() === fruits[0].toLowerCase() && lastWord.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
    alert('Поздравляю! Вы угадали!');
  } else if (firstWord.toLowerCase() === fruits[0].toLowerCase() || lastWord.toLowerCase() === fruits[fruits.length - 1].toLowerCase()){
    alert('Вы были близки к победе!');
  } else if (!firstWord || firstWord.trim() == "") {
    return("Ты не хочешь угадывать?");
  } else {
    alert('Вы ответили не верно');
  }
}
// gameFruits()