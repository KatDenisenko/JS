                //ФУНКЦИОНАЛЬНЫЕ МЕТОДЫ МАССИВОВ

let arr= [1,1,2,3,4,5,6];
// console.log(arr);
// let result=[]

// for  (let el of arr) {
//     result.push(el*100);

// }
// console.log(result);
// решим данную задачу с помощью метода map

//map

//способ 1

// let result_copy = result.map(function(el){//всегда создаёт копию массива
//     return el*0.7;//в функциональном методе обязательно должен быть return.
// })
// console.log(result_copy);

//способ 2 запись с помощью стрелочной функции;

// let result_copy = result.map(el=>{
//     return el*0.7;
// });
// console.log(result_copy);

//способ 3 запись с помощью стрелочной функции без {} скобок;

// let result_copy = result.map(el=>el>200 ? el*0.7:el);//стрелочная функция с тернарным оператором;
// console.log(result_copy);

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];

//1 способ решим с помощью цикла for of

// const result = [];
// for (let el of inventors) {
//     result.push(el.first);
// }
// console.log(result);

//2 способ решим с помощью map

// let result = inventors.map(function(el){
//     return el.result;
// })

//3 способ решим с помощью стрелочной функции

// let result = inventors.map(el => el.first);
// console.log(result);

// const numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9];

//1 способ решим с помощью цикла for of

// const result= [];
// for (let el of numbers) {
//     if (el<=10) {
//         result.push(el);
//     }
// }
// console.log(result);

//filter - вытягиваем из массива несколько элементов которые удовлетворяют условию.

//2 способ решим с помощью filter

// let result = numbers.filter(function(el){
// if (el<=10) {
//     return el;
// }
// });

//3 способ решим с помощью стрелочной функции

// let result = numbers.filter(el => el>=10);
// console.log(result);

//  let result = inventors.filter(el => el.year>=1500 && el.year<=1600)
//  .map(el=>el.first);//chaining - (цепочка) возможность использования функциональный метод массива к результатам йункционального методв массива;
//  console.log(result);

 //find - находит первый элемент который проходит проверку;

//  const numbers = [0, 1, 10, 3, 25, 5, 60, 7, 12, 9];

//  let result = numbers.find(el=>el>5);
//  console.log(result);

//every - возвращает true - все элементы массива прошли проверку
// false  - хотя бы один элемент массива не прошел проверку.

// const temperature = [25, 15, -10, 28, 5];

// let result = temperature.every(el=>el>0)

//  console.log(result);


 //reduce - позволяет выполнять одни и теже действия с элементами.
// можно об

//  const numbers=[250, 1, 10,3];

//  let result = numbers.reduce(function(acc,element){
//      return acc+element;
//  },0);
//  console.log(result);

//  let result = numbers.reduce((acc,el)=>acc+el,0);
//  console.log(result);

 const hoursWorkedPerWeek = [
    {day: 'M',number: 9},
    {day: 'T',number: 10},
    {day: 'W',number: 11},
    {day: 'T',number: 5},
 ]

//  let result = hoursWorkedPerWeek.reduce((acc,el)=>
//  acc+el.number,0);
//  console.log(result);

 // sort - сортирование элементов массива

//  let numbers = [1, 10, 3, 25, 5, 60, 7, 12, 9];

//  numbers.sort(function(a,b){
//      if (a>b) {
//          return 1;
//      } else {
//          return -1;
//      }
//  });//базовый шаблон сортировки
//  console.log(numbers);//получим  массив numbers отсортированный по возрастанию;

//  numbers.sort(function(a,b){
//      return a-b;
//  });//сортирует в порядке убывания; a-b - сортирует в порядке возрастания;
//  console.log(numbers);

//  numbers.sort((a,b) => a-b);// сортируем цифры;
//  console.log(numbers);

 const words = ['pinguin', 'cat', 'dog', 'pig', 'hen'];
//  words.sort();//сортируем только строки
//  console.log(words);
//  words.sort().reverse();
//  console.log(words);


//  words.sort((a,b)=> a>b? 1:-1);//сортирует и строки и объекты
//  console.log(words);

// inventors.sort((a,b) => a.last>b.last ? 1:-1);
// console.log(inventors);//сортируем эллементы массива по ключу last.

// let numbers = [1, 10, 3, 25, 5, 60, 7, 12, 9];
// // forEach - похож на метод map, но изменяет оригинальный масиив.
// let x = numbers.forEach(el => el*2);
// console.log(x);
                        //ASSIGMENTS
    const scientist = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1373,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];



 

// 1) отримати масив вчених що народилися в 19 ст

let result1 = scientist.filter(el => el.year>=1800 && el.year<=1900);
console.log(result1);

// 2) знайти суму років скільки прожили всі вченні

//  let result2 = scientist.reduce(function(acc,element){
//     return acc+(element.passed-element.year);
//  },0);
//  console.log(result2);

 let result2 = scientist.reduce((acc,element)=>acc+(element.passed-element.year),0);
 console.log(result2);

// 3) Відсортувати вчених по алфавіту

scientist.sort((a,b)=>a.last>b.last? 1:-1);
console.log(scientist);
// 4) Відсортувати вчених по даті народження
scientist.sort((a,b)=>a.year>b.year? 1:-1);
console.log(scientist);
// 5) Відсортувати вчених по кількості прожитих років
scientist.sort((a,b)=>(a.passed-a.year)>(b.passed-b.year)? 1:-1);
console.log(scientist);
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті

let result6 = scientist.filter(el=>el.year>=1700||el.year<=1400);
console.log(result6);

// 7) Знайти вченого який народився найпізніше.
scientist.sort((a,b)=>a.year<b.year? 1:-1);
console.log(scientist[0]);

// 8) Знайти рік народження Albert Einstein
let result8 = scientist.find(el=>el.last==='Einstein');
console.log(result8.year);

// 9) Знайти вчених прізвище яких починається на літеру С

let result9 = scientist.filter(el=>el.last[0]==='C');
console.log(result9);


// 10) Видалити з масива всіх вчених імя яких починається на A
let result10 = scientist.filter(el=>el.first[0]!=='A');
console.log(result10);


/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/


const findGreaterThan = (num,arr)=>arr.filter(el=>el>num);



  console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
  console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
  console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
  

  


  /* 
    Функция multiplyBy принимает два аргумента - число и массив. 
    Возвращает массив все значения которого умножены на число.
  */
//   const multiplyBy = (num, arr) => {
//     let result = [];
  
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//       result.push(arr[i] * num);
//     }
  
//     return result;
//   };
  const multiplyBy = (num, arr) => arr.map(el=>el*num);
  
  console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
  console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
  console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
  



  /* 
    Функция summAllNumbers принимает любое число аргументов.
    Возвращает число - сумму всех аргументов.
  */
//   function summAllNumbers(...args) {
//     let accumulator = 0;
  
//     for (let i = 0, max = args.length; i < max; i += 1) {
//       accumulator += args[i];
//     }
  
//     return accumulator;
//   }
const summAllNumbers=(...args)=> args.reduce((acc,el)=>acc+el,0);
    
    //  let result = numbers.reduce((acc,el)=>acc+el,0);
    //  console.log(result);
  console.log( summAllNumbers(1, 2, 3) ); // 6
  console.log( summAllNumbers(1, 2, 3, 4) ); // 10
  console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15
  
//   /* 
//     Функция findEvery получает два аргумента - число и массив.
//     Возвращает true если все элементы массива больше или равны числу.
//     Иначе если есть хоть один элемент меньше числа, то возвращается false.
//   */
  const findEvery = (num, arr) => arr.every(el=>el>=num);
  
  console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
  console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
  console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

                    //ASSIGMENT 2
/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
  
//   // Вызовы функции для проверки
const getPropValues=(arr, prop)=>arr.map(el => el[prop]);


//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
  
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
  
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]

                      //ASSIGMENT 3
/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
//   ];
//   const setGuestState=(guests, period)=>
//   guests.map((el)=>el.inactiveDays>period ? el.isActive=false : el.isActive=true);
        

//   // Вызовы функции для проверки
//   console.log(
//     setGuestState(guests, 10)
//   ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
  
//   console.log(
//     setGuestState(guests, 20)
//   ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
//   console.log(
//     setGuestState(guests, 50)
//   ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true


                        //ASSIGMENT 4
  /*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
  
//   const getActiveGuests=(guests)=>
//       guests.filter(el=>el.isActive ===true);
  
//   // Вызовы функции для проверки
//   console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
  
                          //ASSIGMENT 5
/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
//   const getGuestsOlderThan=(guests, age)=>
//       guests.filter(el=>el.age>age);
  
//       // Вызовы функции для проверки
//   console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
  
//   console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
  
//   console.log(getGuestsOlderThan(guests, 55)); // []



                            //ASSIGMENT 6

//   Напишите функию getGuestById(guests, id), принимающую 
//   guests - массив объектов гостей, id - идентификатор (число). 
  
//   Функция должна возвращать объект гостя с совпадающим id.
  
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */

const guests = [
  { id: 1, name: 'Mango', age: 20 },
  { id: 2, name: 'Poly', age: 18 },
  { id: 3, name: 'Ajax', age: 30 },
  { id: 4, name: 'Chelsey', age: 45 }
];
const getGuestById=(guests, id)=>guests.find(el=>el.id===id)

// Вызовы функции для проверки
console.log(
  getGuestById(guests, 3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
  getGuestById(guests, 1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
  getGuestById(guests, 5)
); // undefined
  
                           //ASSIGMENT 7
                    
//   Используя метод reduce, посчитайте сумму 
//   всех значений свойств объекта order.

const order = {
    bread: 10,
    apples: 25,
    chicken: 60,
    milk: 15,
    cheese: 40
  };
  let values = Object.values(order); 
  let result=values.reduce((acc,el)=>acc+el,0);
  console.log(result); // 150

                             //ASSIGMENT 8
/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/


const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
  };
  
  const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
  };
  
  const orderB = {
    bread: 1,
    milk: 2,
    cheese: 3
  };
  
  const getTotalPrice=(products, order)=>{
    let result=[];
    for (let key in order) {
          result.push(order[key]*products[key])};
        //   console.log(result);
    let pr = result.reduce((acc,el)=>acc+el,0);
  return pr;

  }
  // Вызовы функции для проверки
  console.log(getTotalPrice(products, orderA)); // 140
  
  console.log(getTotalPrice(products, orderB)); // 130
  
                             //ASSIGMENT 9
/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/

const guestsA = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: false },
    { name: "Ajax", isActive: true }
  ];
  
  const guestsB = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: true },
    { name: "Ajax", isActive: true }
  ];
  
  const allGuestsActive=(guests)=>guests.every(el=>el.isActive===true);

  // Вызовы функции для проверки
  console.log(allGuestsActive(guestsA)); // false
  
  console.log(allGuestsActive(guestsB)); // true
  

