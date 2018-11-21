'use strict'

// let obj = new Promise(function(succes, error) {//переедаем два параметра первый отвечает за успех resolve, второй за ошибку reject.
//     let i =1;
//     let arr = [];
//     while (i<10000) {
//         arr.push(i);
//         i++
//     }
//     if (arr.length === 9999) {
//         succes(arr)
//     } else  {
//         error (new Error())//фцнкция контсруктор, которая вернет ошибку.
//     }
// });

// obj.then(data=>console.log(data)).catch(err=>console.log(err));

// function asyncLoop (number) {
    
// let obj = new Promise(function(succes, error) {//переедаем два параметра первый отвечает за успех resolve, второй за ошибку reject.
//     let i =1;
//     let arr = [];
//     while (i<number) {
//         arr.push(i);
//         i++
//     }
//     if (arr.length === number-1) {
//         succes(arr)
//     } else  {
//         error (new Error())//фцнкция контсруктор, которая вернет ошибку.
//     }
// })
// return obj;

// }
// asyncLoop (5).then(data=>console.log(data))
//             .catch(err=>console.log(err))


// Promise.all([promiseA, promiseB])// - позволяем объединить несколько промисов в один, что позволяет получить результаты всех трёх промисов.
// Promise.race([promiseA, promiseB])//-возмёт результаты с любого промиса, который прийдёт первым
// //finally - почитать дополнительно;

// //команды для работы в Local Storage

// console.log(localStorage);
// // записываем информацию
// localStorage.setItem('issue',JSON.stringify([5,2,5])); //(название ключа, значение ключа в формате json)
// //читаем информацию
// let result = localStorage.getItem('issue')
// let a = JSON.parse(result);
// console.log(a);

// localStorage.removeItem('issue');
// console.log(localStorage);

// let fontSizeSelect = document.querySelector('#font-size');
// let colorSelect = document.querySelector('#color');
// let fontFamilySelect = document.querySelector('#fontFamily');
// let  form = document.querySelector('#form');
// let pArr = [...document.querySelectorAll('p')];

// function readValue (e) {
//     e.preventDefault();
//     localStorage.setItem('settings', JSON.stringify({
//         fontSize: fontSizeSelect.value,
//         fontColor: colorSelect.value, 
//         fontFamily: fontFamilySelect.value
//     }));
//     styleData ();
// }



// function styleData () {
//     let result = JSON.parse(localStorage.getItem('settings'));
//     console.log(result);
//     for (let el of pArr) {
       
//         el.style.color = result.fontColor;
//         el.style.fontFamily = result.fontFamily;
//         el.style.fontSize = result.fontSize +'px';
//     }
//     //console.log(result);

// }

// form.addEventListener('submit',readValue);
// window.addEventListener('DOMContentLoaded', styleData);

/*
  Напишите скрипт работы магазина со складом товаров.
  
  Есть переменная goodsAmount хранящиая в себе
  текущее количество единиц какого-то товара на складе.
  
  Напишите функцию processOrder(amount), получающую
  кол-во товаров заказанных покупателем, и возвращающую промис.
  
  Для имитации проверки достаточного количества товаров
  на складе используйте setTimeout с delay 500мс.
  
  Если на складе товаров больше либо равно заказанному
  количеству, "верните" строку - "Ваш заказ готов!".
  
  В противном случае - "К сожалению на складе не достаточно товаров!".
  
  Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
*/
function timeOut (amount) {
   
}

const DELAY = 1000;
let goodsAmount = 100;
function processOrder(amount) {
    return new Promise(function(succes, error) {//переедаем два параметра первый отвечает за успех resolve, второй за ошибку reject.
        setTimeout ( function () {
            if (!isNaN(amount)) {
                if (goodsAmount>=amount) {
                succes('Ваш заказ готов!')
                } else  {
                succes ('К сожалению на складе не достаточно товаров!')}//фцнкция контсруктор, которая вернет ошибку.
                }
            else { 
                error ('Некорректный ввод!')
            }  
            })
           // return obj;
        },10000)
       
}

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Data back from server');
//     }, 2000);

//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 3000);
// });



// Вызовы функции для проверки
processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(50)
  .then(x => console.log(x)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(500)
  .then(x => console.log(x)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err));

processOrder("qwe")
  .then(x => console.log(x))
  .catch(err => console.log(err)); // Некоректный ввод!
