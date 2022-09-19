// Minimum task


//task 1.1
const a = 0.1;
const b = 0.2;
const taskOneOneResult = Math.floor((a + b) * 100) / 100;

console.log(taskOneOneResult)

//task 1.2
const c = "1";
const d = 2;
const changedC = parseFloat(c);
const taskOneTwoResult = changedC + d;

console.log(taskOneTwoResult)

//task 2.3

const taskOneThreePrompt = prompt('Укажи обсяг флешки у Гб')
const convetedTaskOneThreePrompt = parseFloat(taskOneThreePrompt);
    if (convetedTaskOneThreePrompt > 0){
        alert(`У цю флешечку ми можемо вмістити ${Math.floor((convetedTaskOneThreePrompt *1024)/820)} файлів по 820 Мб`)
    } 

// Norma task


//task 2.1
const oneChocolate = "шоколадку";
const moreChocolate = "шоколадки"; 
const priceOfChocolate = 31.49;
const moneyInThePocket = prompt('Зараз введіть, будь ласка, кількість гривні у вашому гаманці - будемо рахувати скільки шоколадок "Milka" по 31.49 ти можеш купити на них')
const convetedMoneyInThePocket = parseFloat(moneyInThePocket);
const resultOfCalculation = convetedMoneyInThePocket/priceOfChocolate;
const spendedMoney = Math.floor(resultOfCalculation) * priceOfChocolate;  
    if (resultOfCalculation < 2){
        alert(`Ого, ти можеш купити цілу одну ${oneChocolate}, а здача з цього буде ${(convetedMoneyInThePocket - spendedMoney).toFixed(2)} гривень)`)
    } else if(resultOfCalculation >= 2){
            alert(`Ого, ти можеш купити цілих ${Math.floor(resultOfCalculation)} ${moreChocolate}, а здача з цього буде ${(convetedMoneyInThePocket - spendedMoney).toFixed(2)} грн)`)
    }else if(resultOfCalculation <1){
        alert('Хм, зовсім нічого •>•')
    }

//task 2.2

//Знайшла варіант, як це зробити, але все ще розбираюсь, як воно працює  •>•
var num = prompt('Введи, будь ласка, будь-яке тризначне число');

function getReversedNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  return result;
}

alert(`Ось твоє перевернуте число: ${getReversedNum(num)}`);

// Maximum 

//task 3.1

const depositAmount = prompt('Введіть суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних')
const result = alert(`Ось сума нарахованих відсотків: ${(depositAmount * 5 * 365)/ (365 * 100)} грн `)

//task 3.2
const taskThreeOneOne= 2 && 0 && 3;
console.log(taskThreeOneOne)


const taskThreeOneTwo = 2 || 0 || 3;
console.log(taskThreeOneTwo)

const taskThreeOneThree = 2 && 0 || 3;
console.log(taskThreeOneThree)

