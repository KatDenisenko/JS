                                    // ASSIGMENT 1

/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

// const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
// let body = document.querySelector('body');
// let start = document.querySelector('.js-start');
// let stop = document.querySelector('.js-stop');
// let interval;

// function begin () {
// interval = setInterval(bgcol,1000);
// function bgcol () {
//     body.style.backgroundColor=`${colors[Math.floor(Math.random()*7)]}`
// }
// return interval;
// }

// function stoped () {
//     clearInterval(interval);
// }

// start.addEventListener('click',begin);
// stop.addEventListener('click',stoped);


                                    // ASSIGMENT 2

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//     let miliSec = Math.floor(time/100 %10);
//     let sec = Math.floor(time/1000%60);
//     let min = Math.floor(time/1000/60%60);
   
    
//     return `${min}:${sec}.${miliSec}`;
//   }
  
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2
   

                            // ASSIGMENT 3

                            /* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");


// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

// function startTimer () {
//     timer.startTime = Date.now();
//  timer.id = setInterval(delta,100);
// }

// function delta () {
//     timer.deltaTime = Date.now() - timer.startTime;
//     updateClockface(clockface, timer.deltaTime)
// }

// function stopTimer () {
//     console.log(timer.id);
//     clearInterval(timer.id);
// }


// function getFormattedTime(time) {
//     let miliSec = Math.floor(time/100 %10);
//     let sec = Math.floor(time/1000%60);
//     let min = Math.floor(time/1000/60%60);
   
//     min = min < 10 ? `0${min}` : min;
//     sec = sec < 10 ? `0${sec}` : sec;

//     return `${min}:${sec}.${miliSec}`;
//   }

// function updateClockface(elem, time) {
  
//   elem.textContent = getFormattedTime(time);
// }

// startBtn.addEventListener('click', startTimer);
// stopBtn.addEventListener('click',stopTimer);

// function setActiveBtn(target) {
//   if(target.classList.contains('active')) {
//     return;
//   }
  
//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');
  
//   target.classList.add('active');
// }

                            // ASSIGMENT 3

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

const DELAY = 1000;

let goodsAmount = 100;

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
