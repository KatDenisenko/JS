'use strict'
// ЗАДАНИЕ 1 СЧИТАЕМ ШАШЛЫКИ

// let form = document.querySelector('.form');

// let price = document.querySelector('#price');

// let quantity = document.querySelector('#quantity');
// let totalText = document.querySelector('.text-right');
// let amount = document.querySelector('.amount');

// function totalPrice () {
//     totalText.textContent = `${(price.value*quantity.value).toFixed(2)}грн`;
//    amount.textContent = quantity.value;
    
// }
// form.addEventListener('input',totalPrice);
// window.addEventListener('DOMContentLoaded',totalPrice);

// ЗАДАНИЕ 2 ДЕЛАЕМ ПРИЛИПАЮЩЕЕ МЕНЮ

    //при скролинге страницы меню прилипает к верху
// Для вирішення задачі корисними будуть такі команди :
// clientHeight - определяем высоту header
// pageYOffset - переменная в которую попадает значение прокрукти скролера на сайте
// scroll - событие которое мы навешиваем на window

// Щоб меню прилипало до верху потрібно додати клас fixed-nav

// let header = document.querySelector('.header');
// // стучим в header и связываем с переменной header
// let headerHeight = header.clientHeight;
// // определяем высоту header
// let navigation = document.querySelector('.nav');
// // стучим в nav
//  function fixed () {
//      if (pageYOffset>=headerHeight) {//если высота прокрутки>=высоте header
//         navigation.classList.add('fixed-nav');//добавляем класс
//      } else {
//         navigation.classList.remove('fixed-nav');//удаляем класс
//      }

//  }
//  window.addEventListener('scroll',fixed);

 // ЗАДАНИЕ 3 БЕГАЮЩИЕ КНОПКИ

let container = document.querySelector('.container');
let btn = document.querySelector('.btn');


function remove () {
    
    event.target.style.top = Math.random()*(window.innerHeight-btn.clientHeight) + 'px';

    event.target.style.left = `${Math.random()*(window.innerWidth-btn.clientWidth)}px`;

}

container.addEventListener('mouseover',remove);

 // ЗАДАНИЕ 4 
//  1) Створити калькулятор за допомогою класа
// 2) Клас має мати такі методи:
// 2.1) getValue - запитати 2 числа в користувача і зберегти їх 
// 2.2) sum - метод що додає 2 числа;
// 2.3) minus - метод що віднімає 2 числа;
// 2.4) mult -метод що перемножує 2 отриманих числа
// 2.5) devide - метод ділить число а на b
// 2.6) pow - метод що підносить а до степеня b
// 3 ) створити в розмітці 6 кнопок кожна з яких буде запускати свій метод калькулятора
// 4 ) Вивести на екран резльтат роботи кожного метода калькулятора після натискання відповідної кнопки (Наприклад при натисканні на створену кнопку + вивести на екран фразу "Сума = і результат робити метода sum")

// let box = document.querySelector('body');
// class Calculate {
   
//     constructor() {
//       this.numberOne = 0;
//       this.numberTwo = 0;
//       this.getValue = this.getValue.bind(this);
//       this.sum = this.sum.bind(this);
//       this.minus = this.minus.bind(this);
//       this.mult = this.mult.bind(this);
//       this.divide = this.divide.bind(this);
//       this.pow = this.pow.bind(this);
//     }
// getValue () {

//     let one = prompt('Enter number 1 please');
//     this.numberOne = +one;
//     let two = +prompt('Enter number 2 please');
//     this.numberTwo = +two;
//     let p = document.createElement('p');
//     box.append(p);
//     p.innerHTML = `Вы вели число ${this.numberOne} и число ${this.numberTwo}`
//     // return `Вы вели число ${this.numberOne} и число ${this.numberTwo}`
//     console.log(`Вы вели число ${this.numberOne} и число ${this.numberTwo}`);
    
// }
// sum () {
 
//     let p = document.createElement('p');
//     box.append(p);
//     p.innerHTML = `Cумма чисел = ${this.numberOne+this.numberTwo}`
//     console.log(` Cумма чисел = ${this.numberOne+this.numberTwo}`)
// }

// minus () {
//     let p = document.createElement('p');
//     box.append(p);
//     p.innerHTML = `Разность чисел = ${this.numberOne-this.numberTwo}`;
//      console.log(`Разность чисел = ${this.numberOne-this.numberTwo}`);
      
// }

// mult () {
//     let p = document.createElement('p');
//     box.append(p);
//     p.innerHTML = `Произведение чисел = ${this.numberOne*this.numberTwo}`;
//     console.log(`Произведение чисел = ${this.numberOne*this.numberTwo}`);
// }

// divide () {
//     let p = document.createElement('p');
//     box.append(p);
//     p.innerHTML = `Частное чисел = ${(this.numberOne/this.numberTwo).toFixed(2)}`;
//     console.log(`Частное чисел = ${this.numberOne/this.numberTwo}`);
// }
// pow () {
//     let p = document.createElement('p');
//     box.append(p);
//     p.innerHTML = `Число ${this.numberOne} в степени ${this.numberTwo} = ${Math.pow(this.numberOne, this.numberTwo)}`;
//     console.log(`Степень = ${Math.pow(this.numberOne, this.numberTwo)}`);
// }
// }

// const calc = new Calculate();

// let getValue = document.querySelector('.get-Value');

// getValue.addEventListener ('click', calc.getValue);

// let sum = document.querySelector('.sum');
// sum.addEventListener ('click', calc.sum);

// let minus = document.querySelector('.minus');
// minus.addEventListener('click', calc.minus);

// let mult = document.querySelector('.mult');
// mult.addEventListener('click', calc.mult);

// let divide = document.querySelector('.divide');
// divide.addEventListener('click', calc.divide);

// let pow = document.querySelector('.pow');
// pow.addEventListener('click',calc.pow );