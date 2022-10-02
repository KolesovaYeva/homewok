// Minimum task 

// task 1.1
//Напиши всі можливі варіанти створення функцій.

/* Варінати створення функцій: 
    * Function Declaration - оголошення функції
        function getSumm(numOne, numTwo){
                    let numSumm = calcSumm(numOne, numTwo);
                    console.log(numSumm);
                }
    * Function Expression - функціональний вираз
        let showMessage = function(){
                    console.log('something');
                };
    ! різниця між ними: 
        Коли ми оголошуємо функцію (Function Declaration), 
        виуликати її можна в любом місці коду, а в 
        функціональному виразу (Function Expression) ми можемо
        її викликати тільки після її створення; 
 */

// task 1.2 
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

    // function numberOfArguments(One, Two, Three){
    //     console.log(numberOfArguments.length);
    // }

    // numberOfArguments();

// task 1.3
/* Напиши функцію, яка приймає 2 числа і повертає :
   -1, якщо перше число менше, ніж друге; 
    1 - якщо перше число більше, ніж друге; 
    0 - якщо числа рівні. */

    // const userNumbers = prompt('Введи два числа через пробіл');
    // const splitedUserNumbers = userNumbers.split(' ');
    // const arraySplitedUserNumbers = Array.from(splitedUserNumbers);
    // const numberArraySplitedUserNumbers = arraySplitedUserNumbers.map(str => {
    //     return Number(str);
    // });
    // let numberOne = numberArraySplitedUserNumbers[0];
    // let numberTwo = numberArraySplitedUserNumbers[1];
    // function comparingNumbers(){
    //     if(numberArraySplitedUserNumbers[0] < numberArraySplitedUserNumbers[1]){
    //         return -1;
    //     } else if(numberArraySplitedUserNumbers[0] > numberArraySplitedUserNumbers[1]){
    //         return 1;
    //     } else if (numberArraySplitedUserNumbers[0] == numberArraySplitedUserNumbers[1]){
    //         return 0;
    //     }
    // }

    // console.log(comparingNumbers());

// task 1.4 

//Напиши функцію, яка обчислює факторіал переданого їй числа.

    // const usersNumber = prompt('Укажи число');

    // function factorialNumber(usersNumber){
    //     if (usersNumber == 0 || usersNumber == 1){
    //         return 1;
    //     }else{
    //         return usersNumber * factorialNumber(usersNumber - 1);
    //     }  
    // }
    // resultFactorial  = factorialNumber(usersNumber);
    // console.log(resultFactorial);

//task 1.5

/*  Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
    Наприклад: цифри 1, 4, 9 перетворяться в число 149.  */

    // const usersThreeNumbers = prompt(`Введи три числа через пробіл, будь ласка)
    // Наприклад: 1 2 3`);
    // const splitedUsersThreeNumbers = usersThreeNumbers.split(' ');
    // const arraySplitedUsersThreeNumberss = Array.from(splitedUsersThreeNumbers);

    // let numberOne = arraySplitedUsersThreeNumberss[0];
    // let numberTwo = arraySplitedUsersThreeNumberss[1];
    // let numberThree = arraySplitedUsersThreeNumberss[2];

    // let resultOfTaskFive = numberOne + numberTwo + numberThree;

    // function reunitedNumber(numberOne, numberTwo, numberThree){
    // return `${numberOne}${numberTwo}${numberThree}`;
    // }
    // console.log(reunitedNumber(numberOne, numberTwo, numberThree));

// task 1.6

/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/

    // const userNumber = prompt('Введи одне або два числа через пробіл');
    // const splitedUserNumber = userNumber.split(' ');
    // const arraySplitedUserNumber = Array.from(splitedUserNumber);

    // function squareFunction(a,b){
    //     if (b == undefined){
    //         return a * a;
    //     } else{
    //         return a * b;
    //     }
    // }

    // let result = squareFunction(arraySplitedUserNumber[0],arraySplitedUserNumber[1]);
    // console.log(result)




// Norma

// task 2.1

/*  Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
    Досконале число - це число, яке дорівнює сумі всіх своїх дільників.  */

    // const userNumber = prompt('Введи одне число');
    // let convertedUserNumber = parseFloat(userNumber);

    // const checkPerfectNumber = (convertedUserNumber = 1) => {
    // if(convertedUserNumber === 1) {
    //     return false;
    // };
    // let sum = 1;
    // for(let i = 2; i <= Math.floor(Math.sqrt(convertedUserNumber)); i++){
    //     if(convertedUserNumber % i === 0) {
    //         sum = sum + i + convertedUserNumber / i; if(sum > convertedUserNumber) {
    //             return false;
    //         }
    //     };
    // };
    // return sum === convertedUserNumber;
    // };
    // console.log(checkPerfectNumber(convertedUserNumber));

// task 2.2

/*  Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і 
    виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану 
    раніше функцію, щоб дізнатися, чи є це число досконалим.  */

    // const userNumberOneTaskTwo = prompt('Введи одне число');
    // const userNumberTwoTaskTwo = prompt('Введи інше число');
    // let convertedUserNumberOne = parseFloat(userNumberOneTaskTwo);
    // let convertedUserNumberTwo = parseFloat(userNumberTwoTaskTwo);

    // function demo(){
    //     var num = convertedUserNumberTwo;
    //     var taskResult;
    //     for(var i = convertedUserNumberOne; i < num; i++){
    //         taskResult = 0;
    //         for(var j = 1; j < i; j++){
    //             if(i%j == 0){
    //                 taskResult += j;
    //             }
    //         }
    //         if (taskResult == i){
    //             console.log("All Perfect numbers bettwen 1 to "+ num +": " + i + " ");
    //         }
    //     }
    // }

    // demo();