// Minimum

/*  Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
    обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для 
    роботи з цим об'єктом:
        Метод, який виводить на екран інформацію про автомобіль. - complete
        Додавання ім’я водія у список - complete
        Перевірка водія на наявність його ім’я у списку - complete
        Підрахунок необхідного часу та кількості палива для подолання переданої відстані з 
        середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити 
        перерву на 1 годину. - complete*/
// const car = {
//     manufacture: 'daf',
//     model: "xb/8",
//     old: 2010,
//     speed: 65, 
//     capacity: 210, 
//     gas: 35,
//     drivers: ['Oleg'],
//     showCar: function(){
//         console.log(this);
//     },
//     addDrivers: function(drivers){
//         this.drivers.push(drivers);
//     },
//     userDistance: function(distance){
//         let distanceArg = (distance / 100 * this.gas);
//         let timeArg = distance / this.speed;
//         if(timeArg >= 4){
//             let restTime = Math.trunc(timeArg / 4);
//             timeArg = timeArg + restTime;
//         }
//         console.log(`Відстань - ${distanceArg}, час - ${(timeArg * 60).toFixed(0)}`);
//     },
//     hasDriver: function (driverName) {
//         if(this.drivers.indexOf(driverName)>= 0){
//             return true;
//         } else{
//             return false;
//         }
//     },
// };
// car.addDrivers("Mateush");
// console.log(car.hasDriver('Igor'));
// car.userDistance(1300);
// car.showCar();
//Norm

/*Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
        1.Для виведення часу на екран. - complete
        2.Зміни часу на передану кількість секунд.- complete
        3.Зміни часу на передану кількість хвилин.- complete
        4.Зміни часу на передану кількість годин.- complete
        5.Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
        Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». 
        Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин. - complete*/
// const time = {
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     showTime: function(){
//         console.log('Значення годин - '+ this.hours + ", " + 'значенння хвилин - ' + this.minutes 
//         + ", " + 'значенння секунд - ' + this.seconds);
//     },
//     setHours: function(hours2){
//         this.hours += hours2;
//         if(this.hours >= 24){
//             this.hours = this.hours % 24;
//         }
//     },
//     setMinutes: function(minutes2){
//         this.minutes += minutes2;
//         if(this.minutes >= 60){
//             this.hours = this.hours + Math.trunc(this.minutes / 60);
//             this.minutes = this.minutes % 60;
//         }
//     },
//     setSeconds: function(seconds2){
//         this.seconds += seconds2;
//         if(this.seconds >= 60){
//             this.minutes = this.minutes + Math.trunc(this.seconds / 60);
//             this.seconds = this.seconds % 60;
//         }
//     }
// };
// time.setHours(150);
// time.setMinutes(150);
// time.setSeconds(150);
// time.showTime();
// Maximum 

/* Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
        Складання 2-х об'єктів-дробів.
        Віднімання 2-х об'єктів-дробів.
        Множення 2-х об'єктів-дробів.
        Ділення 2-х об'єктів-дробів.
        Скорочення об'єкта-дробу.*/
// const gcd = (a, b) => {
//     if (a == 0)
//         return b;
//     return gcd(b % a, a);
// }
// const lowestPlus = (den3, num3) => {
//     let common_factor_plus = gcd(num3, den3);
//     den3 = parseInt(den3 / common_factor_plus);
//     num3 = parseInt(num3 / common_factor_plus);
//     console.log(`${fractions.fraction1.numerator}/${fractions.fraction1.denominator} + ${fractions.fraction2.numerator}/${fractions.fraction2.denominator} is equal to ${num3}/${den3}`);
// }
// const lowestMinus = (den4, num4) =>{
//     let common_factor_minus = gcd(num4, den4);
//     den4 = parseInt(den4 / common_factor_minus);
//     num4 = parseInt(num4 / common_factor_minus);
//     console.log(`${fractions.fraction1.numerator}/${fractions.fraction1.denominator} - ${fractions.fraction2.numerator}/${fractions.fraction2.denominator} is equal to ${num4}/${den4}`);
// }
// const addFraction = (fractions) => {
//     let den3 = gcd(fractions.fraction1.denominator, fractions.fraction2.denominator);
//     den3 = (fractions.fraction1.denominator * fractions.fraction2.denominator) / den3;
//     let num3 = ((fractions.fraction1.numerator) * (den3 / fractions.fraction1.denominator) +
//             (fractions.fraction2.numerator) * (den3 / fractions.fraction2.denominator));
//     lowestPlus(den3, num3);
// }
// const subtractFraction = (fractions) =>{
//     let den4 = gcd(fractions.fraction1.denominator, fractions.fraction2.denominator);
//     den4 = (fractions.fraction1.denominator * fractions.fraction2.denominator) / den4;
//     let num4 = ((fractions.fraction1.numerator) * (den4 / fractions.fraction1.denominator) -
//             (fractions.fraction2.numerator) * (den4 / fractions.fraction2.denominator));
//     lowestMinus(den4, num4);
// }
// const multiplicationFraction = (fractions) =>{
//     let den5 = fractions.fraction1.denominator * fractions.fraction2.denominator;
//     let num5 = fractions.fraction1.numerator * fractions.fraction2.numerator;
//     console.log(`${fractions.fraction1.numerator}/${fractions.fraction1.denominator} * ${fractions.fraction2.numerator}/${fractions.fraction2.denominator} is equal to ${num5}/${den5}`);
// }
// const divisionFraction = (fractions) =>{
//     let den6 = fractions.fraction1.denominator * fractions.fraction2.numerator;
//     let num6 = fractions.fraction1.numerator * fractions.fraction2.denominator;
//     console.log(`${fractions.fraction1.numerator}/${fractions.fraction1.denominator} * ${fractions.fraction2.numerator}/${fractions.fraction2.denominator} is equal to ${num6}/${den6}`);
// }
// let num1 = 1;
// let den1 = 500; 
// let num2 = 2;
// let den2 = 1500; 
// const fractions = {
//     fraction1: {
//         numerator: 6,
//         denominator: 7
//     },
//     fraction2: {
//         numerator: 5,
//         denominator: 8
//     }
// }
// addFraction(fractions);
// subtractFraction(fractions);
// multiplicationFraction(fractions);
// divisionFraction(fractions);
"use strict";