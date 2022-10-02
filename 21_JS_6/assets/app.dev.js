//Мінімум

/*  Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
    кількість і куплений він чи ні, ціну за одиницю товару, сума. 
    Написати кілька функцій для роботи з таким масивом:
        Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а 
        потім - ті, що вже придбали.
        Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/
// let productList = [
//     { 
//         nameValue: 'apple',
//         amount: 4,
//         isBought: true,
//         price: 13,
//         purchaseAmount: 52
//     },
//     { 
//         nameValue: 'pizza',
//         amount: 1,
//         isBought: false,
//         price: 20,
//         purchaseAmount: 20
//     },
//     {
//         nameValue: 'CocaCola',
//         amount: 3,
//         isBought: true,
//         price: 40,
//         purchaseAmount: 120
//     },
// ];
// console.log(productList)
// const boughtFirst = productList.sort((a, b) => Number(b.isBought) - Number(a.isBought));
// console.log(boughtFirst);
// let boughtProduct = 'pizza';
// const boughtOnly = productList.map(obj =>{
//     if(obj.nameValue === boughtProduct){
//         return{...obj, isBought: true};
//     }
//     return obj;
// })
// console.log(boughtOnly)
// Норма

/*  Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
    в якому продукт, що ми шукаємо, буде відсутнім)
    Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
    необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна 
    змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24. */
//     delete productList[1];
//     console.log(productList);
//     function addElement(elementName){
//         if(isProduct(elementName)){
//             productList.amount +=1;
//         } else{
//             let element = {nameValue: elementName, amount:1, isBought:false};
//             productList.push(element)
//         }
//     }
//     function isProduct (elementName){
//         productList.forEach((element) =>{
//             if(element.title === elementName){
//                 return true;
//             }
//         })
//         return false;
//     }
//     addElement('beer');
//    console.log(productList)
// Максимум

/*  Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
    Підрахунок суми всіх (не) придбаних продуктів.
    Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
    в залежності від параметра функції, який вона приймає) */
// function summ1(productList) {
//     let result = 0;
//     productList.forEach(element => { 
//         result += element.amount * element.price;
//     }); 
//     return result;;
// }
// const summ1result = summ1(productList);
// console.log(summ1result);
// function summ2(productList) {
//     let result = 0;
//     productList.forEach(element => { 
//         if (!element.isBought) {
//             result += element.amount * element.price;
//         }
//     }); 
//     return result;
// }
// const summ2result = summ2(productList);
// console.log(summ2result);
// const sort1 = productList.sort(function(a,b){
//     return a.purchaseAmount - b.purchaseAmount;
// })
// console.log(productList)
// const sort2 = productList.sort(function(a,b){
//     return b.purchaseAmount - a.purchaseAmount;
// })
// console.log(productList)
"use strict";