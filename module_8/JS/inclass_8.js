
'use strict'
// let button = document.querySelector('#button');

// function hello () {
//     alert('Hello user');
//     button.removeEventListener('click', hello);
// }

// button.addEventListener('click', hello);

// function eventInfo() {
//     console.log(event.target);
// }


// // button.addEventListener('click', eventInfo);

// // let send = document.querySelector('#send');

// let inputName = document.querySelector('[placeholder="Name"]');
// let inputFullName = document.querySelector('[placeholder="Full name"]');

// function readValue () {
//  event.preventDefault();//отменяет дефолтную перезагрузку для form.
//  console.log(inputName.value, inputFullName.value);
// //  inputName.value='';
// //  inputFullName.value = '';
//  form.reset();//очищает поля в form, вместо inputName.value=''
// }

// // send.addEventListener('click',readValue);

//  let form = document.querySelector('#form');
//  form.addEventListener('submit',readValue);
 
            // ОПРЕДЕЛЯЕМ ПОРЯДКОВЫЙ НОМЕР СПИСКА

// let ul = document.querySelector('#ul');
// let arr=Array.from(ul.children);// [...ul.children] ... spred оператор, разделяет на один массив
// ul.addEventListener('click',findIndex);

// function findIndex (){
//     let index = Array.from(ul.children).indexOf(event.target);
//    console.log(index+1);;
// }

            // СОЗДАЁМ КОНВЕРТЕР
let form = document.querySelector('.form');
form.addEventListener('submit', convert);
// let input = document.querySelector('[]');

let arrInput =[...document.querySelectorAll('.form>label>input')];//массив инпутов
console.log(arrInput);

let arrMeters =[1,100,0.001,0.00062137,39.370,3.2808, 1.0936];


 function convert () {
    
    let arrValue = arrInput.map(num=>num.value);
    let newArrValue = arrMeters.map(num=>num*arrValue[0]);

    for (let el of arrInput) {
        el.value = newArrValue[arrInput.indexOf(el)];
    }
   
    console.log(arrValue[0]);
    console.log(newArrValue);
 }
// let arr = [100,0.001,0.00062137,39.370];
// let m = (document.querySelector('#m'));

// let sm = document.querySelector('#sm');
// let km = document.querySelector('#km');
// let miles = document.querySelector('#miles');
// let inch = document.querySelector('#inch');
// let ft = document.querySelector('#ft');
// let yd = document.querySelector('#yd');

// function convert () {
    
//     sm.value = Number(m.value)*100;
//     km.value = Number(m.value)*0.001;
//     miles.value = Number(m.value)*0.00062137;
//     inch.value = Number(m.value)* 39.370;
//     ft.value = Number(m.value)* 3.2808;
//     yd.value = Number(m.value)* 1.0936;
// }




