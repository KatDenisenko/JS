//                         //ЗАМЫКАНИЕ ФУНКЦИЙ
// let user=counter();
// user();//благодаря () запускаем фцнкцию addCount
// user();
// user();
// user();

// let user2=counter();
// user2();
// user2();
// user2();
// user2();
// user2();
// user2();
// user2();
// user2();


// function counter () {
//     let count = 0;// замыкаем переменную count в функции counter;
//     function addCount (){
//         count++;
//     console.log(count);
//     }//функция которая может изменить переменную count
    
//         return addCount; //функция не запускается т.к. нет(), т.е. передаётся тело функции, а сама функция запускаетс при запуске переменной user();
// }

//                             // ОБЪЕКТЫ 
// const HOTEL = {
//     name: 'Resort Hotel',
//     stars: 5,
//     status: 'LUX',
//     capacity: 100,
//     personal: ['Bob', 'Bender', 'Homer'],
// };  

// let arr = [2,5,6,7,8,9,30];

// console.log(arr);
// console.log(HOTEL);

// console.log(HOTEL.name);//обращаемся к ключу объекта
// console.log(HOTEL.personal[0]);
// console.log(HOTEL.stars);
// console.log(HOTEL['status']); //используем такой метод обращения к ключу в основном если название ключа приходит к нам как аргумент функции, название переменной и.т.д. то обращаемся через квадратные скобочки.

// HOTEL.manger = 'Sandra Bulock';
// HOTEL.stars = 10;
// HOTEL['place'] = 'Ukrain, Kiev';
// delete HOTEL.personal;//удаление ключа объекта.

// let name='Resort';
// let country = 'Spain';
// const HOTEL2 = {
// name,
// country,//если значение ключа равно значению переменной, и название ключа совпадает с названием переменной.
// pool: {
//     volume:'50m',
//     temp:'25C',
// }
// }
// console.log(HOTEL2);

// let hasStars = HOTEL2.hasOwnProperty('pool');
// console.log(hasStars);// возвращает true или false,более старый спосооб проверки ключа в оъекте.
// let hasPool = 'pool' in HOTEL;//возвращает true или false,
// console.log(hasPool);


// //функция записанная в объект, называется методом объекта.
//  const BMW = {
//      wheels: 4,
//      color: 'red',
//      year:2018,
//      model: 'X5',
//      fullComplect: false,
//      move: function() {
//          console.log('I`m move');
//      },
//      stop() {
//          console.log('Stopped');
//         },
//     start: () => console.log('start'),//не рекомендуется использовать в середине объекта, стрелочная функция работает не корректно в середине объекта.
//  }

// BMW.move();
// console.log(BMW.stop);
// //в данном объекте функции  move и stop являются методами
// //объекта BMW;

// let User = {
//     name: "Bob",
//     age:45,
//     isHappy:true,
// }

// let User2 = Object.assign({},User);
// User2.age=40;
// console.log(User);
// console.log(User2);

// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};

// Object.assign(first,last); //изменится первый объект, к нему добавятся ключи со вторго объекта.
// console.log(first);
// console.log(last);

// const a = {x:1, y:2};
// const b = {x:0, z:3};
// // const c = Object.assign({}, a, b);
// // console.log(c);

// // оператор спред

// const c = {
//     ...a,
//     ...b,
// };
// console.log(c);

// const hotel = {
//     name: '7 days',
//     stars:5,
//     rooms:150,
// }

// let keys = Object.keys(hotel); //формирует массив ключей объекта hotel.
// console.log(keys);

// let values = Object.values(hotel); //формирует массив свойств объекта hotel.
// console.log(values);

// let entries = Object.entries(hotel);
// console.log(entries);

// // ЦИКЛ FOR IN РАБОТАЕТ С ОБЪЕКТАМИ!!!!
// for (let key in hotel) {
//     if (hotel.hasOwnProperty(key)) {
//         console.log(`${key}-${hotel[key]}`);
//     }
// }

//                     //ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ И МАССИВОВ

//     const {stars, rooms} = hotel;
//     // console.log(name);
//     console.log(stars);//5
//     console.log(rooms);//150

//     const animals = {
//         type: 'dog',
//         age: 2,
//         name: 'Jeck',
//     }
//     //  function showObjVal (obj){
//     //      console.log(obj.type);
//     //      console.log(obj.age);
//     //      console.log(obj.name);
//     //  }
//     //  showObjVal(animals);

//      function showObjValDestr ({type, age, name}){
//      console.log(type);
//      console.log(age);
//      console.log(name);}

//      showObjValDestr(animals);


//      let strNum = ['one', 'two', 'three'];//деструктуризация строки
//      let [d,e,f] = strNum;
//      console.log(d);
//      console.log(e);
//      console.log(f);


                                    //ASSIGMENT 1

                                    /*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user3 = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };
  
  user3.mood = 'happy';
  user3.hobby='javascript';
  delete user3.premium;

  console.log(user3);

  for (let key in user3) {
    if (user3.hasOwnProperty(key)) {
        console.log(`${key}:${user3[key]}`);
    }
}
let user3_keys = Object.keys(user3); 
console.log(user3_keys);
for (let index of user3_keys) {
    console.log(`${index}:${user3[index]}`);
}

let user3_entries = Object.entries(user3);
console.log(user3_entries);
for (let k of user3_entries) {
    console.log(`${k[0]}:${k[1]}`);
}


                                    //ASSIGMENT 2

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  };
  let max=1;
  let name;
// const best;
   for (let key in tasksCompleted) {
     
      if (tasksCompleted[key]>max) {
          max=tasksCompleted[key];
          name = key;
 }
    }
    console.log(`${name}:${max}`);

  
                                    //ASSIGMENT 3    
/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки

function countProps(obj) {
    let obj_arr = Object.keys(obj); 
    let length = obj_arr.length;
    return length;
}

console.log(
    countProps({})
  ); // 0
  
  console.log(
    countProps({a: 1, b: 3, c: 'hello'})
  ); // 3


                                      //ASSIGMENT 4   
  /*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// Вызовы функции для проверки

function isObjectEmpty(obj) {
    let objArr = Object.keys(obj);
    let L = objArr.length;
    console.log(L);
    if (L===0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(
    isObjectEmpty({})
  ); // true
  
  console.log(
    isObjectEmpty({a: 1})
  ); // false
  
  console.log(
    isObjectEmpty({a: 1, b: 2})
  ); // false
  

                                        //ASSIGMENT 5   

  /*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// Вызовы функции для проверки

function countTotalSalary(salaries) {
    let valueSalaries = Object.values(salaries);
    console.log(valueSalaries);
    let sum=0;
    for (let value of valueSalaries) {
        sum+=value;
    }
    return sum;
}
console.log(
    countTotalSalary({})
  ); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80
    })
  ); // 330
  

                                          //ASSIGMENT 6   
  /*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
  ];
//   let [x,y,z] = users;
//   console.log(x);
//   console.log(y);
  
  function getAllPropValues(arr, prop) {
    let resultArr=[];
    
    for (let obj of arr) {
      if (obj.hasOwnProperty(prop))
      {
    resultArr.push(obj[prop]); 
        }
    }
return resultArr;
  }
  
  // Вызовы функции для проверки
  console.log(
    getAllPropValues(users, 'name')
  ); // ['Poly', 'Mango', 'Ajax']
  
  console.log(
    getAllPropValues(users, 'mood')
  ); // ['happy', 'blissful', 'tired']
  
  console.log(
    getAllPropValues(users, 'active')
  ); // []


//   Написати ф-ю cipher яка приймає зашифровану 
//   строку і повертає розшифровану. Перетворення 
//   строки відбувається за алгоритмом ROT13 який 
//   заміняє поточну літеру 13 буквою в абетці після неї. 
//   Наприклад A => N; K => X; R => E; U => H;
// Перші 13 літер алфавіту зміщуються вправо. 
// Другі 13 літер зміщується вліво. Використати 
// методи строки: 

let uni;

function cipher(str){
  uni=String.fromCharCode(str);
  console.log(uni);
return uni;
}
// fromCharCode()  =   букви в юнікод
// charCodeAt()      = юнікод в букви
console.log(cipher("SERR CVMMN"))  // FREE PIZZA;
console.log(cipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"))  // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG;

// const alphabet = [A,B,C,D,E,F,G];


