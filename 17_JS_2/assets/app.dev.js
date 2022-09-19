"use strict";

// Minimum task
//task 1.1
var a = 0.1;
var b = 0.2;
var taskOneOneResult = Math.floor((a + b) * 100) / 100;
console.log(taskOneOneResult); //task 1.2

var c = "1";
var d = 2;
var changedC = parseFloat(c);
var taskOneTwoResult = changedC + d;
console.log(taskOneTwoResult); //task 2.3

var taskOneThreePrompt = prompt('Укажи обсяг флешки у Гб');
var convetedTaskOneThreePrompt = parseFloat(taskOneThreePrompt);

if (convetedTaskOneThreePrompt > 0) {
  alert("\u0423 \u0446\u044E \u0444\u043B\u0435\u0448\u0435\u0447\u043A\u0443 \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0432\u043C\u0456\u0441\u0442\u0438\u0442\u0438 ".concat(Math.floor(convetedTaskOneThreePrompt * 1024 / 820), " \u0444\u0430\u0439\u043B\u0456\u0432 \u043F\u043E 820 \u041C\u0431"));
} // Norma task
//task 2.1


var oneChocolate = "шоколадку";
var moreChocolate = "шоколадки";
var priceOfChocolate = 31.49;
var moneyInThePocket = prompt('Зараз введіть, будь ласка, кількість гривні у вашому гаманці - будемо рахувати скільки шоколадок "Milka" по 31.49 ти можеш купити на них');
var convetedMoneyInThePocket = parseFloat(moneyInThePocket);
var resultOfCalculation = convetedMoneyInThePocket / priceOfChocolate;
var spendedMoney = Math.floor(resultOfCalculation) * priceOfChocolate;

if (resultOfCalculation < 2) {
  alert("\u041E\u0433\u043E, \u0442\u0438 \u043C\u043E\u0436\u0435\u0448 \u043A\u0443\u043F\u0438\u0442\u0438 \u0446\u0456\u043B\u0443 \u043E\u0434\u043D\u0443 ".concat(oneChocolate, ", \u0430 \u0437\u0434\u0430\u0447\u0430 \u0437 \u0446\u044C\u043E\u0433\u043E \u0431\u0443\u0434\u0435 ").concat((convetedMoneyInThePocket - spendedMoney).toFixed(2), " \u0433\u0440\u0438\u0432\u0435\u043D\u044C)"));
} else if (resultOfCalculation >= 2) {
  alert("\u041E\u0433\u043E, \u0442\u0438 \u043C\u043E\u0436\u0435\u0448 \u043A\u0443\u043F\u0438\u0442\u0438 \u0446\u0456\u043B\u0438\u0445 ".concat(Math.floor(resultOfCalculation), " ").concat(moreChocolate, ", \u0430 \u0437\u0434\u0430\u0447\u0430 \u0437 \u0446\u044C\u043E\u0433\u043E \u0431\u0443\u0434\u0435 ").concat((convetedMoneyInThePocket - spendedMoney).toFixed(2), " \u0433\u0440\u043D)"));
} else if (resultOfCalculation < 1) {
  alert('Хм, зовсім нічого •>•');
} //task 2.2
//Знайшла варіант, як це зробити, але все ще розбираюсь, як воно працює  •>•


var num = prompt('Введи, будь ласка, будь-яке тризначне число');

function getReversedNum(num) {
  var result = 0;

  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  return result;
}

alert("\u041E\u0441\u044C \u0442\u0432\u043E\u0454 \u043F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(getReversedNum(num))); // Maximum 
//task 3.1

var depositAmount = prompt('Введіть суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних');
var result = alert("\u041E\u0441\u044C \u0441\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432: ".concat(depositAmount * 5 * 365 / (365 * 100), " \u0433\u0440\u043D ")); //task 3.2

var taskThreeOneOne = 2 && 0 && 3;
console.log(taskThreeOneOne);
var taskThreeOneTwo = 2 || 0 || 3;
console.log(taskThreeOneTwo);
var taskThreeOneThree = 2 && 0 || 3;
console.log(taskThreeOneThree);