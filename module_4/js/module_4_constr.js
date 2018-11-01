                        // КОНТЕКСТ ВЫПОЛНЕНИЯ
'use strict'

const motel = {
    name: '7 days',
    stars:4,
    rooms:150,
    hasSWPool: true,
    hasCort: false,
    showName (){
        console.log(`${this.name}`);
    },
    changeRoom(number){
        this.rooms = this.rooms-number;
        return this.rooms;
    },
    openCort (){
        this.hasCort = !this.hasCort;
    },
    // showThis=()=>{
    //     console.log(this);
    wrapper() {   
        const showThis=()=>{
        console.log("Show this context", this);
    };
    showThis();
    } 
}
motel.wrapper();

const hotel = {
    name: 'Resort Hotel',
    price: 2500,
};
const hotel2 = {
    name: '4 Seasons Hotel',
    price: 500,
};
const hotel3 = {
    name: '7 days Hotel',
    price: 700,
};


function showInfo(name='User',age=18) {
    console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
}

// showInfo.call(hotel, 'Homer', 25);
// showInfo.call(hotel2, 'Fry', 38);
// showInfo.call(hotel3, 'Den', 16);//call - аргументы передаются через запятую;

showInfo.apply(hotel, ['Homer', 25]);//apply - аргументы передаются через array;
showInfo.apply(hotel2, ['Fry', 38]);

// console.log(hotel.stars);
// motel.showName();
// motel.showThis();
// hotel.changeRoom(10);
// console.log(hotel.rooms);
// hotel.openCort();
// console.log(hotel.hasCort);

const boundShowInfo = showInfo.bind(hotel);//делаем копия функции showInfo и привязываем (bind) к определенному объекту в данном случае к bind.
boundShowInfo();

// const Tank = {
//     speed:100,
//     armor:50,
//     life:100,
//     damage:20,
//     name: 'Tiger',
//     nickName: 'Tankist',
//     amunition:10,
//     x: 0,
//     y: 0,

//     move (a,b){
//         this.x=a;
//         this.y=b;
//     },

//     fire() {
//         this.amunition> 0 ? this.amunition-=1 : alert ('Enter card number');
//     },

//     heal(size){
//         this.life+size>100 ? this.life=100 : this.life += size;
//     }
// }

// Tank.move(50,150);
// Tank.fire();
// Tank.fire();
// Tank.fire();
// Tank.life = 50;
// Tank.heal(25);
// console.log(Tank);

function Tank (speed, amunition, armor, nickName, x,y) {
this.speed=speed;
this.armor = armor;
this.amunition = amunition;
this.nickName = nickName;
this.x = x;
this.y = y;
this.life = 100;
this.damage = 20;
this.name = 'Tiger';
this.move = function(a,b) {
    this.x=a;
    this.y=b;
};
this.fire = function() {
     this.amunition> 0 ? this.amunition-=1 : alert ('Enter card number')
};
this.heal = function(size) {this.life+size>100 ? this.life=100 : this.life += size;
}

}

let tiger = new Tank(50,8,20, 'Tester',10,20);//
let scorpion = new Tank (45,10,30, 'SC', 52, 10);
scorpion.fire();
console.log (tiger);
console.log(scorpion);

                    //Assigment 7
//   Напишите код, который бы  с помощью 
//   функции-конструкора User, позволял создавать 
//   объекты пользователя со следующим свойствами:
//     - name - строка (имя)
//     - isActive - буль (активен)
//     - age - число (возраст)
//     - friends - число (кол-во друзей)

function User (name, isActive, age, friends) {
this.name=name;
this.isActive = isActive;
this.age = age;
this.friends = friends;
this.getUserInfo=function(){
    console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`)}
}

let ben = new User ('Ben',false, 30,2);
let jeck = new User ('Jeck',true, 18,0);

ben.getUserInfo();
jeck.getUserInfo();

    // Имя, активность, возраст и друзей, 
    // необходимо передать как аргументы 
    // при вызове конструктора.
    
    // Добавить метод getUserInfo(), которая, выводит строку:
    // `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

    // Создать несколько объектов пользователя User и с помощью 
    // функции getUserInfo вывести строку в консоль.

                    //Assigment 8
/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/

const store = {
    products: ['bread', 'cheese', 'milk', 'apples'],
    managers: ['poly', 'mango', 'ajax'],
    addManager(manager) {
      this.managers.push(manager);
      
      console.log(this.managers);
    },
    removeManager(manager) {
      const idx = this.managers.indexOf(manager);
      
      this.managers.splice(idx, 1);
      
      console.log(this.managers);
    },
    getProducts() {
      console.log(this.products);
      
      return this.products;
    }
  }
  
  store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
  
  store.removeManager('mango'); // ['poly', ajax', 'chelsey']
  
  store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
  

                      //Assigment 9
  /*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account(login, password="password", type = "regular" ) {
    this.login = login;
    this.password = password;
    this.type = type;
  
    this.changePassword = function (newPassword) {
    this.password = newPassword;
    console.log(this.password);
    };
  
    this.getAccountInfo = function () {
      console.log(`
        Login: ${login}, 
        Pass: ${password}, 
        Type: ${type}
      `);
    };
  }
  
  const account = new Account("Mango", "qwe123", "premium");
  
  console.log(account.login); // 'Mango'
  console.log(account.password); // 'qwe123'
  console.log(account.type); // 'premium'
  
  account.changePassword("asdzxc"); // 'asdzxc'
  
  account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  