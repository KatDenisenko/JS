'use strict'
// function sayHello () {
//     console.log("Hello!");
// }
// let timeOutID = setTimeout(sayHello,2000);

// let timeIntID = setInterval(sayHello,1000);
// // setTimeout(sayHello,2000);
// // setInterval(sayHello,1000);

// console.log('timeOut',timeOutID);
// console.log('Interval',timeIntID);

// clearInterval(timeIntID);

// let date = new Date ();
// console.log(date);
// console.log('День',date.getDate());
// console.log('Месяц',date.getMonth());//месяца считаются с нуль.
// console.log('Day',date.getDay());//начало недели начинается с воскресенья и у него индекс 0.
// console.log('Year',date.getFullYear());

// console.log('Hours',date.getHours());
// console.log('Minutes',date.getMinutes());
// console.log('Seconds',date.getSeconds());
// console.log('Milliseconds',date.getMilliseconds());//отсчет ведется с начала юникс эпохи с 1 января 1970 г
// console.log('getTime',date.getTime());

// Date.now();//получаем дату на сегодня

// let date = new Date (4,2017,April);//создаём переменную (строкой) от которой бем производить отсчет
// let date = new Date (2000, 5, 8, 12, 0,0,0)
// //так же можно задавать даты в цифровом формате в следующем порядке (год,месяц, день, час, минута, (секунда, милисекунда - не обязательны);

//СДЕЛАЕМ ТАЙМЕР
let deadlineDate = new Date (2018,11,31,23,59,59);
let numbersDays = document.querySelector('.days');
let numbersHours = document.querySelector('.hours');
let numbersMinutes = document.querySelector('.minutes');
let numbersSeconds = document.querySelector('.seconds');

function timer () {

let today = Date.now();
let delta = deadlineDate-today;
//console.log(delta);
let seconds = Math.floor(delta/1000 %60);//seconds
let minutes = Math.floor(delta/1000/60 % 60);//minutes
let hours = Math.floor(delta/1000/60/60 % 24);//hours
let days = Math.floor(delta/1000/60/60/24);//days

// console.log(deadlineDate);

// console.log(today);


numbersDays.textContent = days;
numbersHours.textContent = hours;
numbersMinutes.textContent = minutes;
numbersSeconds.textContent = seconds;
//console.log(` ${days} - ${hours} - ${minutes} - ${seconds}`);
}

let start = setInterval (timer,1000);


