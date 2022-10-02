"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Minimum 
// task 1.1
// Чому не працює не розумію, розбираюсь чи можна взагалі ось так записувати case "(convertedUserAge < 12 )"
// const userAge = prompt('Введи свій вік, будь-ласка')
// let convertedUserAge = parseFloat(userAge);
//         while(convertedUserAge > 0 && typeof convertedUserAge === Number){
//             switch (convertedUserAge){
//                 case (convertedUserAge < 12):
//                     alert('Ого, та ти ще дитинка)');
//                     break;
//                 case (convertedUserAge < 18):
//                     alert('Хм, тобі немає ще 18, ти ще підліток');
//                     break; 
//                 case (convertedUserAge < 60):
//                     alert('Хех, ти вже дорослий)');
//                     break;
//                 case (convertedUserAge > 60):
//                     alert('Молодець, діду, освоюєш технології)');
//                     break;
//                 default:
//                   alert( "Хм, ти щось не правильно ввів •>•" );
//                   break;
//             }
//         }
// let convertedUserAge = 45;
//         switch (convertedUserAge){
//             case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11:
//                 alert('Ого, та ти ще дитинка)');
//                 break;
//             case 12:case 13: case 14: case 15: case 16: case 17:
//                 alert('Хм, тобі немає ще 18, ти ще підліток');
//                 break; 
// //             case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: 
// //             case 28: case 29: case 30: case 31: case 32: case 33: case 34:case 35: case 36: case 37: 
// //             case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: 
// //             case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: 
// //             case 58: case 59:
// //                 alert('Хех, ти вже дорослий)');
// //                 break;
// //             case 60:
// //                 alert('Молодець, діду, освоюєш технології)');
// //                 break;
// //             default:
// //               alert( "Хм, ти щось не правильно ввів •>•" );
// //               break;
// //         }
// /* Зупинилася на цьому варіанті, бо хоча б працює => далі намагаюсь зробити через Switch case 
// (якщо можна то буль-ласка підсказку, чому воне робе)*/
var userAge = prompt('Введи свій вік, будь-ласка');
var convertedUserAge = parseFloat(userAge);

if (convertedUserAge > 0 || _typeof(convertedUserAge) === Number) {
  if (convertedUserAge < 12) {
    alert('Ого, та ти ще дитинка)');
  } else if (convertedUserAge < 18) {
    alert('Хм, тобі немає ще 18, ти ще підліток');
  } else if (convertedUserAge < 59) {
    alert('Хех, ти вже дорослий)');
  } else if (convertedUserAge > 60) {
    alert('Молодець, діду, освоюєш технології)');
  }
} else {
  alert("Хм, ти щось не правильно ввів •>•");
} // //task 1.2 


var fromONeToNineNumber = prompt('Введіть, будь ласка, число від 1 до 9');
var convertedFromONeToNineNumber = parseFloat(fromONeToNineNumber);

switch (convertedFromONeToNineNumber) {
  case 1:
    alert('Тримай оцей символ "!"');
    break;

  case 2:
    alert('Тримай оцей символ "@" ');
    break;

  case 3:
    alert('Тримай оцей символ "#"');
    break;

  case 4:
    alert('Тримай оцей символ "$"');
    break;

  case 5:
    alert('Тримай оцей символ "%"');
    break;

  case 6:
    alert('Тримай оцей символ "^"');
    break;

  case 7:
    alert('Тримай оцей символ "*"');
    break;

  case 8:
    alert('Тримай оцей символ "("');
    break;

  case 9:
    alert('Тримай оцей символ ")"');
    break;
} // //task 1.3


var firstNumber = +prompt("Зараз будемо рахувати сумму діпазону чисел, тому введіть  менше число", "");
var lastNumber = +prompt("Введіть більше число", "");
var sum = 0;

while (firstNumber < lastNumber) {
  firstNumber++;

  if (firstNumber < lastNumber) {
    sum += firstNumber;
  }
}

alert(sum);
/* Воно працює, АЛЕ я не розумію з якого дива воно працює •>•
Мабуть так: у (let firstNumber = +prompt) + перетворює данні на Number => у firstNumber та lastNumber вводимо необхідні
дані => while (firstNumber<lastNumber) дає нам умову при якій якщо останнє число менше першого, то ми навіть його не 
виконуємо, а якшо так, то додаємо =>  цикли while та if  роблять комплекс дій, які допомогають додавати числа із діапазону
від firstNumber до lastNumber (не включаючи іх)                якщо є поправки або щось неправильно, поясни у коменті, 
будь-ласка*/
// task 1.4
// ATTEMPTS OF TASK 1.4
// var firstNumberTaskFour = +prompt('Зараз будемо рахувати найбільшний спільний дільник, тому введи якесь число')
// var secondNumberTaskFour = +prompt('А тепер друге число відмінне від першого')
// var resultOfTaskFour;
// while (firstNumberTaskFour!=secondNumberTaskFour) {
//   if (firstNumberTaskFour>secondNumberTaskFour) {
//     firstNumberTaskFour = firstNumberTaskFour -secondNumberTaskFour;
//   }
//   else {
//     secondNumberTaskFour = secondNumberTaskFour - firstNumberTaskFour;
//   }
// }
// resultOfTaskFour = firstNumberTaskFour;
// alert(`А ось спільний дільник для твої чисел ${resultOfTaskFour}`);

/*  while(a!=b) - мається на увазі, що не починати дії з числами, якщо а та b дорівнюють одне 
одному =>  */
// var firstNumberTaskFour = +prompt('Зараз будемо рахувати найбільшний спільний дільник, тому введи якесь число')
// var secondNumberTaskFour = +prompt('А тепер друге число відмінне від першого')
// var resultOfTaskFour;
// while (firstNumberTaskFour!=secondNumberTaskFour) {
//   if (firstNumberTaskFour%resultOfTaskFour === 0 && secondNumberTaskFour%resultOfTaskFour ===0) {
//     resultOfTaskFour()
//   }
// }
// alert(`А ось спільний дільник для твої чисел ${resultOfTaskFour}`);
// RIGHT VARIANT

var firstNumberTaskFour = +prompt('Зараз будемо рахувати найбільшний спільний дільник, тому введи якесь число: ');
var secondNumberTaskFour = +prompt('А тепер друге число відмінне від першого: ');

for (var x = 1; x <= firstNumberTaskFour && x <= secondNumberTaskFour; x++) {
  if (firstNumberTaskFour % x == 0 && secondNumberTaskFour % x == 0) {
    resultOfTaskFour = x;
    console.log("\u0410 \u043E\u0441\u044C \u0441\u043F\u0456\u043B\u044C\u043D\u0456 \u0434\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0434\u043B\u044F \u0442\u0432\u043E\u0457\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(resultOfTaskFour));
  }
}
/*У firstNumberTaskFour та secondNumberTaskFour вказуємо числа необхідні => x = 1 та x <= firstNumberTaskFour 
&& x <= secondNumberTaskFour;дозволяє використовувати числа  лише від одного, x++ - перебирає варіанти на 1 більше 
від поперенього, firstNumberTaskFour % x == 0 && secondNumberTaskFour % x == 0 - пропустить лише те число, 
якщо у обох випадках при діленні на це число остачі не буде => resultOfTaskFour = x; - для того, 
 щоб коректненько все вивести у результаті console.log(`А ось спільні дільники для твоїх чисел: ${resultOfTaskFour}`)*/
//task 1.5


var firstNumberTaskFive = +prompt('Введіть число, будь ласка: ');

for (var _x = 1; _x <= firstNumberTaskFive; _x++) {
  if (firstNumberTaskFive % _x == 0) {
    resultOfTaskFour = _x;
    console.log("\u0410 \u043E\u0441\u044C \u0441\u043F\u0456\u043B\u044C\u043D\u0456 \u0434\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0434\u043B\u044F \u0442\u0432\u043E\u0457\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(resultOfTaskFour));
  }
} // Якщо правильно розумію, то логіка така сама як і в попередньому завданні, просто не обчислюжмо друге число •>•
//Norma 
//task 2.1
//Боже поможи •>•


var isPalindromCheck = prompt("\u0417\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0439 \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u043F'\u044F\u0442\u0438\u0437\u043D\u0430\u0447\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: ");

while (isPalindromCheck.length === 5) {
  var convertedIsPalindromCheck = Array.from(isPalindromCheck);
  var reversedConvertedIsPalindromCheck = convertedIsPalindromCheck.reverse('');
  var joinedReversedConvertedIsPalindromCheck = reversedConvertedIsPalindromCheck.join('');

  if (isPalindromCheck === joinedReversedConvertedIsPalindromCheck) {
    console.log('В завданні 2.1 відповідь: Так, це паліндром');
    break;
  } else {
    console.log('В завданні 2.1 відповідь: Ні, це не паліндром');
    break;
  }
} //task 2.2


var purchaseAmount = prompt('Введи, будь ласка, суму твоєї покупки у гривнях, а ми порахуємо знижку');
var convertedPurchaseAmount = parseFloat(purchaseAmount);

while (convertedPurchaseAmount > 0) {
  if (convertedPurchaseAmount >= 200 && convertedPurchaseAmount <= 300) {
    alert("\u0421\u0443\u043C\u0430 \u0442\u0432\u043E\u0454\u0457 \u0437\u043D\u0438\u0436\u043A\u0438 \u0437 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u0443\u0434\u0435: ".concat((convertedPurchaseAmount * 3 / 100).toFixed(2)));
    break;
  } else if (convertedPurchaseAmount > 300 && convertedPurchaseAmount <= 500) {
    alert("\u0421\u0443\u043C\u0430 \u0442\u0432\u043E\u0454\u0457 \u0437\u043D\u0438\u0436\u043A\u0438 \u0437 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u0443\u0434\u0435: ".concat((convertedPurchaseAmount * 5 / 100).toFixed(2)));
    break;
  } else if (convertedPurchaseAmount > 500) {
    alert("\u0421\u0443\u043C\u0430 \u0442\u0432\u043E\u0454\u0457 \u0437\u043D\u0438\u0436\u043A\u0438 \u0437 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0431\u0443\u0434\u0435: ".concat((convertedPurchaseAmount * 7 / 100).toFixed(2)));
    break;
  } else {
    alert("\u0425\u043C, \u0442\u0438 \u0432\u043A\u0430\u0437\u0430\u0432 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u0434\u043B\u044F \u0437\u043D\u0438\u0436\u043A\u0438)");
    break;
  }
} //task 2.3


var pairedNumbers = [];
var unpairedNumber = [];
var negativeNumbers = [];
var positiveNumbers = [];
var userNumbers = prompt("\u0423\u043A\u0430\u0436\u0456\u0442\u044C 10 \u043B\u044E\u0431\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0431\u0456\u043B\n\u041F\u0440\u0438\u043A\u043B\u0430\u0434: 1 2 3 4 5 6 7 8 9 10");
var splitedUserNumbers = userNumbers.split(' ');
var arraySplitedUserNumbers = Array.from(splitedUserNumbers);

for (var _i = 0; _i < arraySplitedUserNumbers.length; _i++) {
  var evens = arraySplitedUserNumbers[_i];
  var odds = arraySplitedUserNumbers[_i];
  var positive = arraySplitedUserNumbers[_i];
  var negative = arraySplitedUserNumbers[_i];

  if (evens % 2 === 0) {
    pairedNumbers.push(evens);
    console.log("\u041F\u0430\u0440\u043D\u0456 \u0447\u0438\u0441\u043B\u0430:".concat(pairedNumbers.length));
  } else if (odds % 2 !== 0) {
    unpairedNumber.push(odds);
    console.log("\u041D\u0435\u043F\u0430\u0440\u043D\u0456 \u0447\u0438\u0441\u043B\u0430:".concat(unpairedNumber.length));
  }

  if (positive > 0) {
    positiveNumbers.push(positive);
    console.log("\u0414\u043E\u0434\u0430\u0442\u043D\u0456 \u0447\u0438\u0441\u043B\u0430:".concat(positiveNumbers.length));
  } else if (negative < 0) {
    negativeNumbers.push(negative);
    console.log("\u0412\u0456\u0434'\u0454\u043C\u043D\u0456 \u0447\u0438\u0441\u043B\u0430:".concat(negativeNumbers.length));
  }
} // боже, воно хоч якось працює
// не знаю, поки я зробити так, щоб показувало
// тільки кінцевий результат
// task 2.4


var daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F", 'Суббота', 'Неділя'];
var i = 0;

while (confirm("".concat(daysOfWeek[i], ", \u0430 \u0442\u0435\u043F\u0435\u0440 \u0445\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C"))) {
  i++;

  if (i === 7) {
    i = 0;
  }
}
/* if (i === 7){
        i = 0;
    } - оця частинка для того, щоб коли добігли останнього
    пункту, все почалося заново
 */
// Maximum
// task 3.1 
// не готов морально це робити
// task 3.2


for (var _i2 = 2; _i2 <= 9; _i2++) {
  for (var a = 1; a <= 10; a++) {
    console.log("".concat(_i2, " * ").concat(a, " = ").concat(_i2 * a));
  }
}
/* for (let i = 2; i <= 9; i++) - ставимо діапазон чисел 
для яких робимо таблицю множення (перший множник);
for (let a = 1; a <= 10; a++) - ставимо діапазон при множенні
наших чисел на які (другий множник) ми хочемо дізнатися результат (добуток)
console.log(`${i} * ${a} = ${i * a}`); - виводимо ${i} * ${a} -
умовно множимо, ${i * a} - виконуємо дію насправді
 */
//task 3.3


var usersDate = prompt('Введи, будь ласка, дату цифрами, наприклад: 1 12 2022');
var splitedUsersDate = usersDate.split(' ');
var arraySplitedUsersDate = Array.from(splitedUsersDate);
var numberArraySplitedUsersDate = arraySplitedUsersDate.map(function (str) {
  return Number(str);
});

if (numberArraySplitedUsersDate[0] < 32 && numberArraySplitedUsersDate[0] > 0 && numberArraySplitedUsersDate[1] < 13 && numberArraySplitedUsersDate[1] > 0 && numberArraySplitedUsersDate[2] > 0) {
  // приступимо до року
  if (numberArraySplitedUsersDate[0] == 31 && numberArraySplitedUsersDate[1] == 12) {
    numberArraySplitedUsersDate[2]++;
    numberArraySplitedUsersDate[1] = 1;
    numberArraySplitedUsersDate[0] = 0;
  } // раухуємо дати і місяців


  if (numberArraySplitedUsersDate[0] === 31) {
    numberArraySplitedUsersDate[0] = 1;
    numberArraySplitedUsersDate[1]++;
  } else if (numberArraySplitedUsersDate[0] == 29 && numberArraySplitedUsersDate[1] == 2 && numberArraySplitedUsersDate[2] % 4 == 0) {
    numberArraySplitedUsersDate[0] = 1;
    numberArraySplitedUsersDate[1]++;
  } else if (numberArraySplitedUsersDate[1] == 2 && numberArraySplitedUsersDate[0] == 28 && numberArraySplitedUsersDate[2] % 4 !== 0) {
    numberArraySplitedUsersDate[0] = 1;
    numberArraySplitedUsersDate[1]++;
  } else {
    numberArraySplitedUsersDate[0]++;
  }

  console.log(numberArraySplitedUsersDate);
} else {
  console.log('Не вимахуйся, введи нормальні дані - не існує такої дати');
}