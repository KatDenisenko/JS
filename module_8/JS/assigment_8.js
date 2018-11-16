                // ASSIGMENT 1

// let btn = document.querySelector('.button');
// let i=1;
// function content () {

//     btn.textContent = `${i++}`;
//     console.log(btn);
// }
// btn.addEventListener('click',content);

                // ASSIGMENT 2

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

// let add = document.querySelector('button');
// let input = [...document.querySelectorAll('input')];
// let result = document.querySelector('.result');
// function sum () {
//     let s = input.reduce((acc,el)=>acc+Number(el.value),0)
//    result.textContent = s;
//     console.log(s);
// }
// add.addEventListener('click',sum);


                // ASSIGMENT 3

// let add = document.querySelector('.js-add');

// let sub = document.querySelector('.js-sub');

// let value = document.querySelector('.js-value');
// // let btn = document.querySelectorAll('.btn');
// let i=1;
// function calc () {
//   console.log(i);
//   value.textContent = `${i=i+1}`;
//   // value.textContent = `${i++}`;
// }

// function calcSub () {
//    console.log(i);
//   if (i>0) {
//     value.textContent = `${i=i-1}`;
//     // value.textContent = `${i--}`;
//   }
// }

// sub.addEventListener('click', calcSub);
// add.addEventListener('click', calc);


                // ASSIGMENT 4

                /*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/

// let form = document.querySelector('.question-form');
// let inputArr = [...document.querySelectorAll('.options>label>input')];
// let result = document.querySelector('.result');

// function choise () {

//   let check = inputArr.filter(el=>el.checked===true);
//   result.textContent = `Result: ${check[0].parentElement.outerText}`
//   event.preventDefault();//- не должна перезагружаться страница
// }

// form.addEventListener('submit', choise);



                // ASSIGMENT 5

                /*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/
//  let ul = document.querySelector('.images');
//           //  let img = document.querySelectorAll('.images>li>img')
//           //  let img =  document.querySelector('img')

//  console.log(ul);
// function src () {
//             //console.log(event.target.attributes[0].nodeValue);
//   alert (`${event.target.attributes[0].nodeValue}`);
//   alert (`${window.location.href = event.target.attributes[0].nodeValue}`);

// }

//  ul.addEventListener('click', src);

                 // ASSIGMENT 6

     /*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/

// let list = document.querySelector('.list');

// function del () {

// event.target.parentElement.remove();
// }

// list.addEventListener('click', del);

                // ASSIGMENT 7

                /*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/

// let inputs = document.querySelector('.inputs');
    // let input2 = document.querySelector('[data-length="2"]');
    // let input4 = document.querySelector('[data-length="4"]');
    // let input8 = document.querySelector('[data-length="8"]');
    // let input16 = document.querySelector('[data-length="16"]');

// function length () {
// console.log(event.target.value.length);
//   if (+(event.target.value.length)===+(event.target.dataset.length)) {
//     event.target.attributes[0].ownerElement.style.outline = "5px solid green";
//   }
//   else {
//     event.target.attributes[0].ownerElement.style.outline = "5px solid red";
//   }
// }

// inputs.addEventListener('focusout',length)
    // input2.addEventListener('blur',length);
    // input4.addEventListener('blur',length);
    // input8.addEventListener('blur',length);
    // input16.addEventListener('blur',length);


                    /* // ASSIGMENT 8 */
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/

// let input = document.querySelector('.input');
// let p = document.querySelector('.input-value');
// function clg () {
//   console.log('Input is in focus!');
// }
// function text () {
//   p.innerHTML= `Current input value: ${input.value}`;
// }

// input.addEventListener('focus',clg);
// input.addEventListener('input',text);

                    /* // ASSIGMENT 9 */

                    /*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.
    
  
  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна
    и самого прозрачного фона. Плагин должен реализовавать два метода show и hide,
    либо один toggle.
    
    При клике на кнопку показа модального окна должен вызываться 
    метод show или toggle. Соответственно при для закрытия 
    окна hide либо toggle.
*/

// let btn = document.querySelector('.js-open-modal');
// let divHiden = document.querySelector('.js-modal-backdrop');
// // let backdrop = document.querySelector('.js-modal-backdrop');
// let closeBtn = document.querySelector('.js-close-modal');
// let subBtn = document.querySelector('.sub-form-btn');


// function delClass() {

//   divHiden.classList.remove('modal-hidden');
// }

// btn.addEventListener('click',delClass);

// function addClass () {
//   divHiden.classList.add('modal-hidden');
// }

// closeBtn.addEventListener('click',addClass);

// subBtn.addEventListener('click',addClass);


                        /* // ASSIGMENT 10 */

                        /*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

let menu  = document.querySelector('.js-menu');
let menuLink = [...document.querySelectorAll('.menu-link')];

function changeColor () {
  for (let el of menuLink)
  if (event.target === el) {
    el.classList.add('menu-link-active');}
    else {
      el.classList.remove('menu-link-active')
    }  
  event.preventDefault()
}

menu.addEventListener('click',changeColor);