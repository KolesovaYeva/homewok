"use strict";

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
// const userAge = prompt('Введи свій вік, будь-ласка')
// const convertedUserAge = parseFloat(userAge);
//     if (convertedUserAge > 0 || typeof convertedUserAge === Number){
//         if (convertedUserAge < 12){
//             alert('Ого, та ти ще дитинка)');
//         }else if (convertedUserAge < 18){
//             alert('Хм, тобі немає ще 18, ти ще підліток');
//         }  else if (convertedUserAge < 59){
//             alert('Хех, ти вже дорослий)');
//         } else if (convertedUserAge > 60){
//             alert('Молодець, діду, освоюєш технології)');
//         } 
//     } else {
//         alert( "Хм, ти щось не правильно ввів •>•" );
//     }
// //task 1.2 
// const fromONeToNineNumber = prompt('Введіть, будь ласка, число від 1 до 9')
// const convertedFromONeToNineNumber = parseFloat(fromONeToNineNumber);
//     switch (convertedFromONeToNineNumber){
//         case 1: 
//             alert('Тримай оцей символ "!"');
//         break;
//         case 2: 
//             alert('Тримай оцей символ "@" ');
//         break;
//         case 3: 
//             alert('Тримай оцей символ "#"');
//         break;
//         case 4: 
//             alert('Тримай оцей символ "$"');
//         break;
//         case 5: 
//             alert('Тримай оцей символ "%"');
//         break;
//         case 6: 
//             alert('Тримай оцей символ "^"');
//         break;
//         case 7: 
//             alert('Тримай оцей символ "*"');
//         break;
//         case 8: 
//             alert('Тримай оцей символ "("');
//         break;
//         case 9: 
//             alert('Тримай оцей символ ")"');
//         break;
//         }
// //task 1.3
// let firstNumber = +prompt("Зараз будемо рахувати сумму діпазону чисел, тому введіть  менше число","");
// let lastNumber = +prompt("Введіть більше число","");
// let sum = 0;
// while (firstNumber<lastNumber){
//     firstNumber++;
//     if(firstNumber<lastNumber){
//         sum+=firstNumber;
//     }
// }    
// alert(sum)

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
//  const firstNumberTaskFour = +prompt('Зараз будемо рахувати найбільшний спільний дільник, тому введи якесь число: '); 
//  const secondNumberTaskFour = +prompt('А тепер друге число відмінне від першого: '); 
//   for (let x = 1; x <= firstNumberTaskFour && x <= secondNumberTaskFour; x++) {
//     if( firstNumberTaskFour % x == 0 && secondNumberTaskFour % x == 0) {
//         resultOfTaskFour = x;
//         console.log(`А ось спільні дільники для твоїх чисел: ${resultOfTaskFour}`);
//     }
//   } 

/*У firstNumberTaskFour та secondNumberTaskFour вказуємо числа необхідні => x = 1 та x <= firstNumberTaskFour 
&& x <= secondNumberTaskFour;дозволяє використовувати числа  лише від одного, x++ - перебирає варіанти на 1 більше 
від поперенього, firstNumberTaskFour % x == 0 && secondNumberTaskFour % x == 0 - пропустить лише те число, 
якщо у обох випадках при діленні на це число остачі не буде => resultOfTaskFour = x; - для того, 
 щоб коректненько все вивести у результаті console.log(`А ось спільні дільники для твоїх чисел: ${resultOfTaskFour}`)*/
//task 1.5
//  const firstNumberTaskFive = +prompt('Введіть число, будь ласка: ');
//   for (let x = 1; x <= firstNumberTaskFive; x++) {
//     if( firstNumberTaskFive % x == 0) {
//         resultOfTaskFour = x;
//         console.log(`А ось спільні дільники для твоїх чисел: ${resultOfTaskFour}`);
//     }
//   }   
// Якщо правильно розумію, то логіка така сама як і в попередньому завданні, просто не обчислюжмо друге число •>•
//Norma 
//task 2.1
//Боже поможи •>•
// const isPalindromCheck = prompt(`Запропонуй будь-яке п'ятизначне число: `)
// while(isPalindromCheck.length === 5){
//     const convertedIsPalindromCheck = Array.from(isPalindromCheck);
//     const reversedConvertedIsPalindromCheck = convertedIsPalindromCheck.reverse('');
//     const joinedReversedConvertedIsPalindromCheck = reversedConvertedIsPalindromCheck.join('');
//     if (isPalindromCheck === joinedReversedConvertedIsPalindromCheck){
//         console.log('В завданні 2.1 відповідь: Так, це паліндром');
//         break;
//     } else {
//         console.log('В завданні 2.1 відповідь: Ні, це не паліндром');
//         break; 
//     }
// } 
//task 2.2
// const purchaseAmount = prompt('Введи, будь ласка, суму твоєї покупки у гривнях, а ми порахуємо знижку')
// const convertedPurchaseAmount = parseFloat(purchaseAmount);
// while(convertedPurchaseAmount > 0){
//     if(convertedPurchaseAmount >= 200 && convertedPurchaseAmount <=300){
//         alert(`Сума твоєї знижки з покупки буде: ${((convertedPurchaseAmount *3)/100).toFixed(2)}`)
//         break;
//     } else if(convertedPurchaseAmount > 300 && convertedPurchaseAmount <=500){
//         alert(`Сума твоєї знижки з покупки буде: ${((convertedPurchaseAmount *5)/100).toFixed(2)}`)
//         break;
//     } else if(convertedPurchaseAmount > 500){
//         alert(`Сума твоєї знижки з покупки буде: ${((convertedPurchaseAmount *7)/100).toFixed(2)}`)
//         break;
//     } else{
//         alert(`Хм, ти вказав недостатньо для знижки)`)
//         break;
//     }
// }
//task 2.3
// let pairedNumbers = [];
// let unpairedNumber = [];
// let negativeNumbers = [];
// let positiveNumbers = [];
// let userNumbers = prompt(`Укажіть 10 любих чисел через пробіл
// Приклад: 1 2 3 4 5 6 7 8 9 10`);
// const splitedUserNumbers = userNumbers.split(' ');
// const arraySplitedUserNumbers = Array.from(splitedUserNumbers);
//     for (let i = 0; i < arraySplitedUserNumbers.length; i++) {
//         const evens = arraySplitedUserNumbers[i];
//         const odds = arraySplitedUserNumbers[i];
//         const positive = arraySplitedUserNumbers[i];
//         const negative = arraySplitedUserNumbers[i];
//         if (evens % 2 === 0) {
//             pairedNumbers.push(evens);
//             console.log(`Парні числа:${pairedNumbers.length}`)
//         } else if (odds % 2 !== 0){
//             unpairedNumber.push(odds);
//             console.log(`Непарні числа:${unpairedNumber.length}`)
//         }
//         if (positive > 0){
//             positiveNumbers.push(positive);
//             console.log(`Додатні числа:${positiveNumbers.length}`)
//         } else if (negative < 0){
//             negativeNumbers.push(negative);
//             console.log(`Від'ємні числа:${negativeNumbers.length}`)
//         }
//       }
// боже, воно хоч якось працює
// не знаю, поки я зробити так, щоб показувало
// тільки кінцевий результат
// task 2.4
// const daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', `П'ятниця`, 'Суббота', 'Неділя'];
// let i = 0;
// while (confirm(`${daysOfWeek[i]}, а тепер хочеш побачити наступний день`)){
//     i++;
//     // if (i === 7){
//     //     i = 0;
//     // }
// }

/* if (i === 7){
        i = 0;
    } - оця частинка для того, щоб коли добігли останнього
    пункту, все почалося заново
 */
// Maximum
// task 3.1 
// не готов морально це робити
// task 3.2
// for (let i = 2; i <= 9; i++) {
//     for (let a = 1; a <= 10; a++){
//        console.log(`${i} * ${a} = ${i * a}`);
//     }
// }

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

if (arraySplitedUsersDate[0] < 32 && arraySplitedUsersDate[0] > 0 && arraySplitedUsersDate[1] < 13 && arraySplitedUsersDate[1] > 0 && arraySplitedUsersDate[2] > 0) {
  // приступимо до року
  if (arraySplitedUsersDate[0] < 32 && arraySplitedUsersDate[1] <= 12) {
    arraySplitedUsersDate[2] = +arraySplitedUsersDate[2];
  } else if (arraySplitedUsersDate[0] == 31 && arraySplitedUsersDate[1] == 12) {
    arraySplitedUsersDate[2]++;
    arraySplitedUsersDate[1] = 1;
    arraySplitedUsersDate[0] = 1;
  } // раухуємо дати і місяців


  if (arraySplitedUsersDate[0] === 31) {
    arraySplitedUsersDate[0] = 1;
  } else if (arraySplitedUsersDate[0] == 29 && arraySplitedUsersDate[1] == 2 && arraySplitedUsersDate[2] % 4 == 0) {
    arraySplitedUsersDate[0] = 1;
  } else if (arraySplitedUsersDate[1] == 2 && arraySplitedUsersDate[0] == 28 && arraySplitedUsersDate[2] % 4 !== 0) {
    arraySplitedUsersDate[0] = 1;
  } else {
    arraySplitedUsersDate[0]++;
  } // // приступимо до місяців


  if ((arraySplitedUsersDate[1] === 1 || arraySplitedUsersDate[1] === 3 || arraySplitedUsersDate[1] === 5 || arraySplitedUsersDate[1] === 7 || arraySplitedUsersDate[1] === 8 || arraySplitedUsersDate[1] === 10 || arraySplitedUsersDate[1] === 12) && arraySplitedUsersDate[0] === 31) {
    arraySplitedUsersDate[1]++;
    arraySplitedUsersDate[0] = 1;
  } else if ((arraySplitedUsersDate[1] === 4 || arraySplitedUsersDate[1] === 6 || arraySplitedUsersDate[1] === 9 || arraySplitedUsersDate[1] === 11) && arraySplitedUsersDate[0] === 30) {
    arraySplitedUsersDate[0] = 1;
    arraySplitedUsersDate[1]++;
  } else if (arraySplitedUsersDate[1] === 2 && arraySplitedUsersDate[0] === 28 || arraySplitedUsersDate[0] === 29) {
    arraySplitedUsersDate[0] = 1;
    arraySplitedUsersDate[1]++;
  } // хоч і вказано додавати 1 до першої позиції тільки тоді, коли нульова дорівнює 31 і перша позиція 
  // дорівнює одному з тих чисел, воно все одно додає цю одиницю і коли не виконали першу умову,
  //  але працювати має так


  console.log(arraySplitedUsersDate);
} else {
  console.log('Не вимахуйся, введи нормальні дані - не існує такої дати');
}