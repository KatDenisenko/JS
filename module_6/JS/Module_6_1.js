// // const Video = function (size, duration, title, format, hd, author) {
// //     this.size = size;
// //     this.duration = duration;
// //     this.title = title;
// //     this.format = format;
// //     this.hd = hd;
// //     this.author = author;
// //   }
  
// //   Video.prototype.getFullInfo = function () {
// //     return `${this.author} ${this.title} ${this.duration}`;
// //   }
  
// //   Video.prototype.archive = function (num) {
// //     this.size = parseFloat(this.size) / num + 'gb';
// //   }
  
// //   Video.prototype.changeAuthor = function (newAuthor) {
// //     this.author = newAuthor;
// //   }
  
// //   Video.prototype.changeTitle = function (newTitle) {
// //     this.title = newTitle;
// //   }
  
// //   const Stream = function(size, duration, title, format, hd, author, status) {
// //     Video.call(this, size, duration, title, format, hd, author);
// //     this.status = status;
// //   }
  
// //   Stream.prototype = Object.create(Video.prototype);
// //   Stream.prototype.constructor = Stream;
  
// //   Stream.prototype.changeStatus = function() {
// //     this.status = !this.status;
// //   }

//   class Video {
//       constructor (size, duration, title, format, hd, author) {
//         this.size = size;
//         this.duration = duration;
//         this.title = title;
//         this.format = format;
//         this.hd = hd;
//         this.author = author;
//       }
//   static greet (){
//         console.log('Hello I am static method');
//       }

//   getFullInfo () {
//     return `${this.author} ${this.title} ${this.duration}`;
//   }

//   archive (num) {
//     this.size = parseFloat(this.size) / num + 'gb';
//   }

//   changeAuthor (newAuthor) {
//       this.author = newAuthor;}

//    changeTitle (newTitle) {
//     this.title = newTitle;
// }

// }

// let movie = new Video('25gb', '120min', 'Movie 43', 'MPG4', 'true', 'WB');
// console.log(movie.getFullInfo());

// class Stream {
//   this.title = newTitle;
// }

// class Stream extends Video {
//     constructor(size, duration, title, format, hd, author,status){
//       super (size, duration, title, format, hd, author);//super - активирует доступ к объекту this
//       // пока не передашь super this работать не будет
//       this.status = status
//     }
    

//     changeStatus () {
//       this.status = !this.status;
//        }

//     getFullStreamInfo () {
//       //this.getFullInfo()+this.status;//this.getFullInfo() - используем радительскую функция() метод к экземпляру
//       super.getFullInfo() + this.status;//указываем на прямуб возьму метод из super

//     }
// }





                          //ASSIGMENT IN CLASS
// Part 1
// Написати клас  Герой в якого будуть параметри (name, life, level, хр, stamina)
// name - імя
// life - житя =100
// level - рівень = 1
// хр - досвід = 0
// stamina - витривалість = 100
// Клас буде мати методи :
// 1) riseLevel - метод що збідьшує рівень героя на один, якщо хр = 1000
// 2) addXp - метод що приймає параметром хр і плюсує поки сума небуде 1000. Коли хр стає тисячу метод обнуляє поле до 0.
// 3) walk - метод що виводить в консоль фразу "name walking"
// 4) rest - метод що відновлює поле stamina до початкового значення і виводить в консоль фразу 'Recovered' 
// Створити героя і викликати для нього метод addXp(50) і addXp(950)
// Далі викликати метод riseLevel() що збільшить рівень до 2.
// викликати метод walk.

  class Hero {
    constructor (name) {
      this.name = name;
      this.life = 100; 
      this.level = 1;
      this.xp = 0; 
      this.stamina = 100;
    }
    riseLevel () {
      // if (this.xp===1000) {
          this.level+=1;
          this.xp-= 1000;
      // }
      return this.level;
    }

    addXp (xp) {
    if (this.xp===1000) {
      
      this.riseLevel ();
      // this.xp=0;
    }
    else {this.xp+=xp;}
   
    // return this.xp;
     }

     walk () {
       console.log(`${this.name} walking`);
     }
     rest () {
       this.stamina = 100;
       console.log('Recovered');
     }
   }

   let wich = new Hero ('Arahna');
   wich.addXp(50);
   console.log(wich.xp);
   wich.addXp(950);
   console.log(wich.xp);
   wich.riseLevel();

   wich.walk();
   console.log(wich.level);
   console.log(wich.xp);


   
   wich.addXp(950);
   console.log(wich.xp);
   wich.addXp(950);
   console.log(wich.xp);
   wich.riseLevel();

   wich.walk();
   console.log(wich.level);
   console.log(wich.xp);

   wich.addXp(950);
   console.log(wich.xp);
   wich.riseLevel();

   wich.walk();
   console.log(wich.level);
   console.log(wich.xp);


   // Part 2

// Написати класи Людина, Гном, Маг які будуть насладувати все від класа Герой.
// Ці 3 класа будуть мати додаткову властивість race - раса.
// Людина додатково матиме поле - strength = 100
// Гном матиме додатково поле - rage = 0
// Маг матиме додаткове поле - mana = 100

// Для людини додати метод - wardenFight - який при кожному запуску зменьшує поле stamina на 20.

// Коли поле stamina стане 0 потрібно викликати метод rest() щоб відновити її значення.

// Для гнома додати метод berserk'sFury - який при кожному виклику збільшує поле 
// rage на 30. Якщо rage = 100 обнулити поле stamina і rage та викликати метод rest().

// Для мага додати метод spell який при виклику зменьшує занчення на 25 і stamina на 25.
// Коли значення stamina стає 0 потрібно викликати метод rest().

// Додати метод reload() який оновлює поле mana до 100
// Створити по одному екземпляру кожного класу для кожного з них обнулити показник stamina викликом їхніх спеціальних методів, щоб в консолі зявилося повідомлення 'Recovered' 
   
class Human extends Hero {
     constructor(name, race){
          super (name)
          this.race = race;
          this.strength=100;
        }
        wardenFight () {
          this.stamina-=20;
          if (this.stamina===0) {
            this.rest();
          }
          return this.stamina;
        }

     };

     let girl = new Human ('Dori');
     girl.wardenFight ();
     console.log(girl.stamina);
     girl.wardenFight ();
     girl.wardenFight ();
     girl.wardenFight ();
     console.log(girl.stamina);
     girl.wardenFight ();
     girl.wardenFight ();
     console.log(girl.stamina);
   
     class Gnome extends Hero {
      constructor(name, race){
           super (name);
           this.race = race;
           this.rage = 0;}

           berserksFury () {
            
              this.rage+=30;
              if (this.rage>=100) {
                     this.stamina = 100; 
                      this.rage = 0;
                      this.rest();
               }
               return this.rage;
          }
      }
      let dwarf = new Gnome ("Ringtone");

      dwarf.berserksFury();
      console.log(dwarf.rage);
      dwarf.berserksFury();
      dwarf.berserksFury();
      dwarf.berserksFury();
      console.log(dwarf.rage);
      dwarf.berserksFury();
      console.log(dwarf.rage);
      console.log(dwarf.stamina);

      class Magician extends Hero {
        constructor(name, race){
             super (name,);
             this.race = race;
             this.mana = 100;}

             spell () {
               this.mana-=25;
               this.stamina-=25;
               if (this.stamina===0) {
                    this.rest();
               }
               if(this.mana===0) {
                 this.reload()
               }
             }
            
             reload (){
               this.mana = 100;
             };
        }


      let din = new Magician ("Din");
      din.spell();
      console.log(din.stamina);
      console.log(din.mana);
      din.spell();
      din.spell();
      din.spell();
      din.spell();
      console.log(din.stamina);
      console.log(din.mana);
      din.reload();


      // Part 3 

// Створити клас FireMage який наслідує всі властивості від Мага і має додаткову властивість skill
// skill - поле де додається навик 'fireball'
// Додати метод shootFireBall - який виведе в консоль фразу "Вогняний шар запущений і нанесен шкоди на ${рандомне число від 1 до 30}" і запустить метод spell();
// Створити екземпляр класу FireMage і запустити 4 рази метод shootFireBall(). після цього в консолі має зявитися напис 'Recovered'.


class FireMage extends Magician {
  constructor (name){
  super (name);
  this.skill ='fireball';}
  shootFireBall () {
    console.log(`Вогняний шар запущений і нанесен шкоди на ${Math.floor(Math.random() * (29)) + 1}`);
    this.spell();
  }
}

let mage = new FireMage ('BenMag');
mage.shootFireBall();




