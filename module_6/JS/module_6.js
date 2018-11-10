
'use strict'
//  let animal = {
//      canEat:true,
//      canSleep:true,
//      canWalk:true,
//      canJump() {
//         return 'I can jump';
//     }
//  };

// // let dog = {
// //     canBark: true,
// //     canSwim: true,
// // };

// let dog = Object.create(animal)
//     dog.canBark = true;
//     dog.canSwim = true;
//     dog.canEat = false,

// console.log(animal);
// console.log(dog.canWalk);
// console.log(dog.canEat);


// function Human (name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     // this.breathe = function () {
//     //     console.log(`${this.name} can breathe`);
//     // };
//     // this.walk = function(){
//     //     console.log(`${this.name} can walk`);
//     // };
//     // this.speak = function(words){
//     //     console.log(`${this.name} can say ${words}`);
//     // };
//     // this.fullInfo = function() {
//     //     console.log(`I am ${this.name} ${this.age} ${this.gender}`);
// }

// let poly = new Human ('Poly', 1, 'female');
// let mango = new Human ('Mango', 2, 'male');

// console.log(poly);
// console.log(mango);
// //Выносим повторяющиеся функции в пототип конструктора Human,
// Human.prototype.fullInfo =function() {
//         console.log(`I am ${this.name} ${this.age} ${this.gender}`);
//     }

// Human.prototype.speak = function(words){
//     console.log(`${this.name} can say ${words}!`);}

// Human.prototype.walk = function(){
//     console.log(`${this.name} can walk.`);
// };
// Human.prototype.breathe = function () {
//     console.log(`${this.name} can breathe.`);
// };

// poly.speak('Hello');
// mango.breathe();

// Human.prototype.friends = ['Bob', 'Jack', 'Bill'];
// console.log(mango.friends);
// poly.friends.pop();//удаляется друг Bill для всех объектов у которых есть ссылка на функцию в прото.
// console.log(mango.friends);

// function Ukrainian (name,age,gender,national) {
//     Human.call(this,name,age,gender);
//     this.national = national;
// }



// Ukrainian.prototype=Object.create(Human.prototype);
// let ivan = new Ukrainian ('Ivan', 13, 'male', 'ukrainian');
// console.log(ivan);
// Ukrainian.prototype.constructor=Human;


//                                 //ASSIGMENT 1
//     /*
//   Создать функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email и friendsCount. 
  
//   В prototype функции-конструктора добавить метод getAccountInfo(), 
//   который выводит в консоль значения полей login, email и friendsCount. 
  
//   Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
// */
 function Account (login, email, friendsCount) {
   this.login = login;
        this.email = email;
        this.friendsCount = friendsCount;
 }

 Account.prototype.getAccountInfo = function () {
     console.log(`User login -  ${this.login}; email - ${this.login}; friendsCount - ${this.friendsCount}.`);
 }

 let ben = new Account ('ben',"jshgfdsf",5);
 ben.getAccountInfo();

 let jon = new Account ('Jon','john@mail.com',3);
 jon.getAccountInfo();


//                                 //ASSIGMENT 2

//  /*
//   Напишите функцию-конструктор StringBuilder.
  
//   На вход она получает один параметр string - строку.
  
//   Добавьте следующие методы в prototype функции-конструктора.
  
//     - getValue() - выводит в консоль текущее значение поля value
  
//     - append(str) - получает парметр str - строку и добавляет 
//       ее в конец значения поля value
    
//     - prepend(str) - получает парметр str - строку и добавляет 
//       ее в начало значения поля value
  
//     - pad(str) - получает парметр str - строку и добавляет 
//       ее в начало и в конец значения поля value
// */
// Human.prototype.breathe = function () {
//     console.log(`${this.name} can breathe.`);
// };

// function StringBuilder(string ="") {
//     this.value = string;
//   }

// StringBuilder.prototype.getValue = function () {
//     console.log(`${this.value}`);
// }

// StringBuilder.prototype.append = function (str) {
//     this.value=this.value+str;
// }

// StringBuilder.prototype.prepend = function (str) {
//     this.value=str+this.value;
// }

// StringBuilder.prototype.pad = function (str) {
//     this.value=str+this.value+str;
// }

//   const myString = new StringBuilder('.');
  
//   myString.append('^'); 
//   myString.getValue(); // '.^'
  
//   myString.prepend('^'); 
//   myString.getValue(); // '^.^'
  
//   myString.pad('='); 
//   myString.getValue(); // '=^.^='


//   // 1) Створити конструктор User шо буде мати поля name, surname
// // 2) Додати метод getFullName() що виводить на екран імя і прізвище
// // 3) Створити конструктор Student шо буде наслідуватися від User
// // 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn (рік вступу)
// // 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// // 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран

// function User (name, surname) {
//     this.name=name;
//     this.surname = surname;
//   }

//   User.prototype.getFullName = function () {
//       return this.name+ ' '+this.surname;
//   }


// function Student (name, surname, yearIn) {
//     User.call(this,name, surname);
//     this.yearIn = yearIn;
//     this.curentYear = 2018;
// }

// Student.prototype=Object.create(User.prototype);
// Student.prototype.constructor=User;
// Student.prototype.getCourse = function () {
//     return ` student in ${this.curentYear-this.yearIn} level.`
// }
// Student.prototype.getFullInfo = function () {
//     return (this.getFullName()+this.getCourse())}
  

//   let kate = new Student ('Kate', 'Denisenko', 2016);
  
//    console.log(kate);
//   console.log(kate.getFullInfo());



// // Part 1
// // Створити конструктор Book який створює обєкти такого типу {title: title, author:author, pages: pages, price: price, curentPage: 0};
// // Помістити в прототип метод  buy(arr) який приймає аргументом масив order додає ціну книжки в нього.
// // Помістити в прототип метод read(num) який приймає аргументом кількість сторінок що прочитано і змінює значення поля curentPage;
// // Створити 3 обєкта книжки викликати для них методи buy() та read(num); 
// // Порахувати загальну вартість замовлення з масива order.
// // Вивести в консоль змінене значення поля curentPage після запуску методів read(num); 
// // Всі куплені книги додати в масив books.
  


// let books = [];
// let order = [];

// function Book (title, author, pages, price) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.price = price;
//     this.curentPage = 0;
// }

// Book.prototype.buy = function(arr) {
//     return arr.push(this.price);
// }
// Book.prototype.read = function(num) {
//     return this.curentPage=num;
// }

// Book.prototype.allBooks = function () {
//     return books.push(this);
// }


// let bookOne = new Book ('Atlas', 'Rend', 600, 450);
// console.log(bookOne);
// bookOne.buy(order);
// bookOne.read(20);
// bookOne.allBooks();
// console.log(bookOne.curentPage);


// let bookTwo = new Book ('Idiot', 'Dostoevskii', 200, 150);
// console.log(bookTwo);
// bookTwo.buy(order);
// bookTwo.read(40);
// bookTwo.allBooks();
// console.log(bookTwo.curentPage);

// let bookThree = new Book ('Find ', 'Frankl', 300, 100);
// console.log(bookThree);
// bookThree.buy(order);
// bookThree.read(60);
// bookThree.allBooks();
// console.log(bookThree.curentPage);

// console.log(order);

// let totalPrice = order.reduce((acc,el)=>acc+el);
// console.log(totalPrice);


// console.log(books);

// //  Part 2
// // Створити ф-ю констпуктор E-Book який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле fileSize де вказується розмір книги в кілобайтах.
// // Додати в прототип E-Book метод download() який при виклику виводить в консоль напис 'Book {title} has been dowloaded, app was downloaded {fileSize} kb';
// // Створити 2 книги конструктором E-Book і викликати для них метод buy(arr) щоб додати їх до масиву order.
// // Викликати для них метод download()

// function Ebook (title, author, pages, price,fileSize) {
//     Book.call(this, title, author, pages, price);
//     this.fileSize=fileSize;
// }
// Ebook.prototype=Object.create(Ebook.prototype);
// Ebook.prototype.constructor=Book;
// Ebook.prototype.download = function () {
//     console.log(`Book ${this.title} has been dowloaded, app was downloaded ${this.fileSize} kb`);
// }

// let eOne = new Ebook ('Farytails', 'Kyri', 120, 75, 78);
// eOne.buy(order);
// eOne.download();
// let eTwo = new Ebook ('War and Peace', 'Tolstoy', 900, 600, 189);
// eTwo.buy(order);
// eOne.download();
// console.log(order);

// // Part 3 
// // Створити корструктор PapperBook який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле cover.
// // Додати в прототип PapperBook метод burn(arr) який приймає аргументом масив books з частини №1 при виклику виводить в консоль напис 'Book {title} has been burned' і видаляє з масива books ту книгу для якої викликаємо цей метод.

// // Створити 3 книги конструктором PapperBook і викликати для них метод buy(arr) щоб додати їх до масиву order.
// // Викликати для першої і другої книги методи burn(arr), щоб видатити їх з масива order

// function PapperBook (title, author, pages, price, cover) {
//     Book.call(this, title, author, pages, price);
//     this.cover=cover;
// }

// PapperBook.prototype=Object.create(Book.prototype);
// PapperBook.prototype.constructor = Book.
// PapperBook.prototype.burn = function(arr) {
//     console.log(`Book ${this.title} has been burned`);
//         arr=arr.splice (arr.indexOf(this.price),1);
//     return arr;
// }

// let papBookOne = new PapperBook ('Hello world', 'Some Persone', 25, 130, 'hard');
// papBookOne.buy(order);

// let papBookTwo = new PapperBook ('Hello Kuiv', 'Some Persone', 60, 180, 'hard');
// papBookTwo.buy(order);

// let papBookThree = new PapperBook ('Good bye', 'Some Persone', 80, 200, 'hard');
// papBookThree.buy(order);
// console.log(order);
// papBookThree.burn(order);
// console.log(order);

                                  //ASSIGMENT 3,4

/*
  Создайте класс Car с указанными полями и методами.
*/

   /*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  */
class Car {
    constructor (maxSpeed, value) {
        this.speed = 0;
        this.maxSpeed = maxSpeed;
        this.running = false;
        this.distance = 0;
        this._value = value;
    }
        static getSpecs (car) {
            console.log(car.maxSpeed);
            console.log(car.running);
            console.log(car.distance);

        }
        turnOn() {
            this.running = true;
            // Добавьте код для того чтобы завести автомобиль
            // Просто записывает в свойство running значание true
          }

          turnOff() {
            this.running = false;
            // Добавьте код для того чтобы заглушить автомобиль
            // Просто записывает в свойство running значание false
          }

          accelerate(spd) {
            spd<this.maxSpeed ? this.speed = spd: 0//при использовании тернарных операторов должны быть описаны все условия, т.е должны быть :
            //   if (spd<this.maxSpeed) {
            //     this.speed = spd;
            //   }
              return this.speed;
            // Записывает в поле speed полученное значение, при условии что
            // оно не больше чем значение свойства maxSpeed
          }
          decelerate(spd) {
              if (spd<this.maxSpeed && spd>0) {
                this.speed = spd;
              }
              return this.speed;  
            // Записывает в поле speed полученное значение, при условии что
            // оно не больше чем значение свойства maxSpeed и не меньше нуля
          }

          drive(hours) {
              if (this.running===true) {
                this.distance += (hours*this.speed);
              } 
              return this.distance;
        
          }
        }
              
 
  const someCar = new Car(200);
  someCar.turnOn();
  someCar.accelerate(5);
  someCar.drive(2);
  
  
  const polo = new Car (300);
   polo.turnOn();
   polo.accelerate(6);
   polo.drive(6);
  

  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
  Car.getSpecs(polo);
    
  

                                   //ASSIGMENT 5   
  
/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

class Car {
    constructor(maxSpeed, value) {
      // ... код
      this._value = value;
    }
    // ... код
  }
  
 
  
