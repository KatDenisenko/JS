
'use strict'
//https://jsonplaceholder.typicode.com/ - 
// const req = new XMLHttpRequest(); //- функция конструктор браузера


// //console.log(req);
// // settings
// // req.open(method, URL, async); - open метод объекта req
// // Методы XMLHttpRequest():
// //delete - удалить инфу
// //get - получить инфу
// //post  -  записать инфу
// //put-обновить
// //async может быть true - async or false - sync

// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
// req.setRequestHeader('Content-Type', 'application/json');// - указываем заголовки о информации с которой мы работаем, указывается в документации ресурса с которым работаем.
// //не всегда обязательна
// // // req.send([body])
// req.send();

// // req.abort() - отменяем запрос если не выполняем send();

// // status

// // https://developer.mozilla.org/ru/docs/Web/HTTP/Status - Коды ответа HTTP
// //200 - ok;
// //201 - информация успешно post
// //400 - Запрос не может быть обработан из-за неверного синтаксиса запроса или другой ошибки клиента.
// //401 - Для доступа к ресурсу требуется авторизация.
// //403 - У клиента нет разрешения на доступ к этому ресурсу.
// //404 - В настоящее время ресурс не найден. Возможно, он был удален или еще не существует.
// //500 - Общий ответ на непредвиденный сбой, если нет более конкретной информации.

// if (req.status !== 200) {//проверяем статус запроса, успешный запрос или нет
//     console.error(`${req.status}: ${req.statusText} `)
// } else {
//     console.log(JSON.parse(req.response));//превращает ответ запроса из формата JSON в JS.
// }
// console.log(`test`);



                        //Асинхронный запрос - 

// const req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// req.setRequestHeader('Content-Type', 'application/json');
// req.send();
// req.onreadystatechange = function () {
//     if (req.readyState !== 4) {//поле куда записывается функция которая следит за состоянием запроса
// //0 - початок
// // 1 - викликаний open
// // 2 - отримані заголовки
// // 3 - отримуємо данні
// // 4 - запит закінчено
//         console.log(req.readyState);
//         return
//     }

//     if (req.status !== 200) {
//         console.error(`${req.status}: ${req.statusText} `)
//     } else {
//         console.log(JSON.parse(req.response));
//     }
// };
// Данные запросы использовались до ES 6, сечас используют fetch - функция обертка для XMLHttpRequest()

// fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
// .then(data => creatLi(data))

// //массив data доступен нам только в функции .then поэтому мы создаем фонкцию из вне,а затем вызываем её в .then

// function creatLi (arr) {
// let ul = document.querySelector('ul');

// for (let el of arr) {
//     let li = document.createElement('li');
//     li.textContent = `${el.name}`
//     ul.append(li);
// }
// }
//по дефолте передается метод get

//получим ответ от сервера
//.then() - функция которая получает доступ к ответу от сервера, принимает параметр, в который попадает ответ
//JSON - информация в формате строки
//Методы JSON:
// JSON.parse() - обработка ответов из сервера
// JSON.stringify() - обработка информации, которая будет отправляться на сервер

// let URL = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=latest&per_page=9';

// fetch(URL).then(images=>images.json()).then(object => creatImg(object.hits))

// function creatImg (arr) {
//   let div = document.querySelector('div');  

// for (let el of arr) {
//     let img = document.createElement('img');
//     img.setAttribute('src',el.largeImageURL);
//     div.append(img);
// }
// }

//ASSIGMENT - создаём страничку с картинками с запросом 

function click () {

let input = document.querySelector('.input');
let container = document.querySelector('#container');
let URL = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${input.value}&order=latest&per_page=12&page=${counter}`

fetch(URL).then(feedback=>feedback.json()).then(imgArr=>creatDiv(imgArr.hits));//())


 function creatDiv (arr) {
    
     container.innerHTML= '';//очищаем div при запуске цикла
    
         for (let el of arr) {
          let div = document.createElement('div');
           div.setAttribute('class','one');
            let p = document.createElement('p');
            p.textContent = el.user;
            let img = document.createElement('img');
            img.setAttribute('src',el.webformatURL);
        div.append(p);
        div.append(img);
        container.append(div);
     }
 }
 event.preventDefault();//отменяем дефолтную перезагрузку
}

let box = document.querySelector('.box');
 box.addEventListener('submit',click);
 window.addEventListener('DOMContentLoaded',click);//запускаем функцию после построения DOM дерева
 
 let get = document.querySelector('#get');
 let counter = 1;

 function seeMore () {
    counter+=1;
    console.log(counter); 
    click ();
 }

 get.addEventListener('click',seeMore);