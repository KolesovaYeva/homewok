"use strict";

// First task 
var homework = confirm('Привіт, перевір домашку, будь ласка)');

if (homework) {
  alert('Дякую, ось домашечка)'); //Minimum

  alert('Зараз будемо виконувати теоретичний мінімум'); // task 1

  alert('Можливі два способи використання JS: посиланнячком (як зроблено тут) та просто у html у <script></script> писати код'); // task 2

  alert('Вибачай, другий пункт доведеться вже дивитися у самому коді, а далі третій'); // right variables 

  var firstName = "Yeva";
  var lastName = "Kolesova";
  var userAge = 16;
  var isUserHaveHigherEducation = false; // wrong variables

  /*const 1variant = "couldn`t use number before name" ;
  const /variant = "couldn`t use slash or backslash before name";
  const &variant = "couldn`t use & before name";
  const *variant = "couldn`t use * before name";
  const $variant = "couldn`t use $ before name";*/
  //task 3 

  alert('Для коментування коду є два варіанти: // - для коментування одного рядка та /*something*/ - для двох більше рядків'); //task 4 

  alert('Четверте питаннячко також дивись у коді, а далі приступимо до наступного блоку завдань');
  var camelCase = "writingLikeThat";
  var PascalCase = "WritingLikeThat";
  var snake_case = "writing_like_that";
  var SCREAMING_SNAKE_CASE = "WRITING_LIKE_THAT "; // const kebab-case = "writing-Like-That";
  // const TRAIN-CASE = "WRITING-LIKE-THAT";
  // const Train-Case = "Writing-Like_That";

  var flatcase = "writinglikethat"; //Norm
  //Username

  var userName = prompt('Як тебе звати?');
  alert("Привіт, " + userName); // Data of birth

  var nextStep = alert('Перейдемо до наступного пункту');
  var dateOfBirth = prompt('В який рік ти народився?');
  var currentYear = 2022;
  alert("\u0425\u043C, \u0442\u043E\u0431\u0456 \u0432\u0436\u0435 ".concat(currentYear - dateOfBirth, " ") + 'років •>•'); //Perimeter Calculations

  var littleBitOfMath = alert('Додамо трошечки математики');
  var sideLength = prompt('Зараз будемо рахувати периметр, тому запропонуй довжину сторони квадрату, будь ласочка)');
  var convertedSideLength = parseFloat(sideLength);

  if (convertedSideLength > 0) {
    alert("\u041E, \u0434\u044F\u043A\u0443\u044E, \u0442\u0435\u043F\u0435\u0440 \u043C\u0438 \u043C\u0430\u0454\u043C\u043E \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 ".concat(convertedSideLength * 4, "\n    \u2022>\u2022 \u041D\u0435 \u0437\u043D\u0430\u0454\u043C \u043D\u0430\u0432\u0456\u0449\u043E, \u0430\u043B\u0435 \u0432\u0456\u043D \u0454, \u043F\u0440\u043E\u0441\u0442\u043E \u0454 - \u0456 \u0432\u0441\u0435)"));
  }

  alert('Ти молодець, ще трохи математичних мук і ми закінчимо'); //Maximum
  //Area of circle

  var initiaCirleRadius = prompt('Тепер введи радіус кола, який ти хочеш, ось сюди');
  var convertedCirleRadius = parseFloat(initiaCirleRadius);

  if (convertedCirleRadius > 0) {
    alert("\u0425\u0435\u0445\u0435, \u043C\u0438 \u0434\u0456\u0437\u043D\u0430\u043B\u0438\u0441\u044C \u043F\u043B\u043E\u0449\u0443 \u043A\u043E\u043B\u0430, \u0449\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(convertedCirleRadius * Math.PI, " \u0441\u043C"));
  } //Remembering4class


  alert('А тепер трохи задачок з молодшої школи)');
  var length = prompt('Запропонуй відстань між містами, будь ласка');
  var convetedLength = parseFloat(length);

  if (convertedSideLength > 0) {
    var timeOfWalking = prompt('Дякую, а тепер треба кількість годин для подолання цього шляху');
    var convertedTimeOfWalking = parseFloat(timeOfWalking);

    if (convertedCirleRadius > 0) {
      alert("\u0414\u044F\u043A\u0443\u044E, \u0449\u043E\u0431 \u043C\u0438 \u0434\u0456\u0439\u0448\u043B\u0438 \u0437\u0430 ".concat(convertedTimeOfWalking, " \u0433\u043E\u0434, \u0442\u0440\u0435\u0431\u0430 \u0439\u0442\u0438 \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ").concat(convetedLength / convertedTimeOfWalking, " \u043A\u043C/\u0433\u043E\u0434"));
    }
  } //Currency converter


  alert('Ну і наостанок, порахуємо грошики)');
  alert('Зараз будете спрощений конфертор валют, хоч і спрощений, але все ж конвертор)');
  var dollarsToEuro = 1.1;
  var initialdollarsToEuro = prompt('Тут ти можеш конвертувати доллари у євро, введи кількість доларів, про яку ти хочеш дізнатися');
  var conveteddollarsToEuro = parseFloat(initialdollarsToEuro);

  if (conveteddollarsToEuro > 0) {
    alert("\u0422\u043E \u0431\u0443\u0434\u0435 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u0442\u0438 ".concat(conveteddollarsToEuro * dollarsToEuro, " \u20AC"));
  }

  var euroToDollar = 0.98;
  var initialeuroToDollar = prompt('А зараз можеш навпаки евро у доллари :)');
  var convetedeuroToDollar = parseFloat(initialeuroToDollar);

  if (convetedeuroToDollar > 0) {
    alert("\u0422\u043E \u0431\u0443\u0434\u0435 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u0442\u0438 ".concat(convetedeuroToDollar * euroToDollar, " $"));
  }

  var finalAlert = confirm('Дякую за увагу, можу запропонувати, тобі декілька серій Ріка та Морті');

  if (finalAlert) {
    window.location.replace('https://rick-i-morty.online/');
  } else {
    alert('Не хочеш? Добре, тоді дякую за перевірку домашки)');
  }
} else {
  var repeat = alert('хм, не хочеш дивитися домашку, тоді тримай серіал •>•');
  window.location.replace('https://kinogo.zone/fantasy/8938-ochen-strannye-dela-4-sezon-hdtv-hdms3.html');
}