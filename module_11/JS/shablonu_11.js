// const context = {
//     city: "London",
//     street: "Baker Street",
//     number: "221B"
// };
// //1) получаем доступ к шаблону
// const source = document.querySelector('#address-template').innerHTML.trim();
// console.log(source);

// //2) запускаем функцию шаблонизатор

// const temp = Handlebars.compile(source);//функция имеющая шаблон и готова принять её по параметрам
// console.log(temp);

// //3) передаем в функцию объект
// const mark = temp(context);
// console.log(mark); 


// //4) вставляем готовую разметку на экран
// let div = document.querySelector('.content-placeholder');
// div.innerHTML = mark;

                            //ASSIGMENT 2

// const link = document.querySelector('#assigment').innerHTML.trim();
// console.log(link);

// const hand = Handlebars.compile(link);
// console.log(hand);

// const info = {
//     title: 'Handlebars',
//     helpers: 'Each and if',
//     func: 'compile'
// }
// const paste = hand(info);
// // console.log(mark);


// let div = document.querySelector('.content-placeholder');
// div.innerHTML = paste;

                            //ASSIGMENT 3

// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ]
// };

// const link = document.querySelector('#name-template').innerHTML.trim();//jобрезает лишние пробелы
// console.log(link);

//  const hand = Handlebars.compile(link);
//  console.log(hand);


// const past = hand(data);
// console.log(past);


// let div = document.querySelector('.content-placeholder');
//  div.innerHTML = past;


                            //ASSIGMENT 3

//  const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };

// const link = document.querySelector('#assigment_3').innerHTML.trim();//jобрезает лишние пробелы
// console.log(link);

//  const hand = Handlebars.compile(link);
//  console.log(hand);


// const past = hand(menuData);
// console.log(past);


// let div = document.querySelector('.content-placeholder');
//  div.innerHTML = past;

                             //ASSIGMENT 4

//  const data = {
//     animals: [
//         {
//             name: "cow",
//             noise: "moooo"
//         },
//         {
//             name: "cat",
//             noise: "meow"
//         },
//         {
//             name: "fish",
//             noise: ""
//         },
//         {
//             name: "farmer",
//             noise: "Get off my property!"
//         }
//     ]
// };

// const link = document.querySelector('#built-in-helpers-template').innerHTML.trim();//jобрезает лишние пробелы
// console.log(link);

// const hand = Handlebars.compile(link);
// console.log(hand);

// const past = hand(data);
// console.log(past);

// let div = document.querySelector('.content-placeholder');
//  div.innerHTML = past;

                             //ASSIGMENT 5
 const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
};

const link = document.querySelector('#template-id').innerHTML.trim();//jобрезает лишние пробелы
console.log(link);

const hand = Handlebars.compile(link);
console.log(hand);

const past = hand(gallery);
console.log(past);

let div = document.querySelector('.gallery-content');
 div.innerHTML = past;