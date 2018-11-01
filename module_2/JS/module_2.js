                        
                        // WHILE ЦИКЛ

// let number =0;//переменная счетчик
// let arr =[];
// while (number<=4) {
//     let result = prompt('Enter number');
//     if(result !== null && result !=='') {
//         if (Number(result)===9) {
//             alert('9 is bed number');
//             number+=1;
//             continue;//прерывает выполнение цикла при не выполнении опред. условий и возвращается в начало цикла.
//         } else {
//         arr.push(Number(result));//превращаем переменную в строку
//         number+=1;}//number++ можно записывать и таким образом;
//     } else {
//         break;//прерываем масив елси не выполняется условие if.
//     }
// }
// console.log(arr);

                          // WHILE DO ЦИКЛ
// let newNumber = 10;
// do {
//     console.log(newNumber);
//     newNumber++;
// }
// while (newNumber<5);

                             // FOR LOOP

// let newArray = [11,26,34,5,53,66,71];
// let newArrayTen =[];
// for (let i=0, max = newArray.length; i < max;i+=1) {
//     newArrayTen.push(Number((newArray[i]*1.1).toFixed(2)));//
// }
// console.log(newArrayTen);

//                              // FOR OF LOOP удобный цикл для работы с массивом;
// let forArray = [11,26,34,5,53,66,71];
// let newForArray=[];
// for(let element of forArray){
//     newForArray.push(Number((element*2).toFixed(2)));
// }
// console.log(newForArray);

                            //ASSIGMENT 1

// let string=prompt('Please enter any string');
// let arrString = string.split(' ');
// console.log(arrString.length);
// for(let element of arrString) {
//     console.log(`${arrString.indexOf(element)} = ${element}`);
// }

                             //ASSIGMENT 2
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let userInput;
// let number=100;

//     do { userInput = prompt('Enter number more then 100');
//     if (userInput===null||Number(userInput) > number) {
//      break;
//     }    
// }
// while (Number(userInput)<=number);


                             //ASSIGMENT 3
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;
// for (let i=min; i<=max; i++) {
 
//  if (i % 5 === 0) {
//         console.log("Buzz");
//         continue;
//     }
//  else if(i % 3 === 0) {
//         console.log("Fizz");
//          continue;
//         }
    
//     console.log (i);
//     }

                                 //ASSIGMENT 4
/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (let element of numbers) {
//     if (element>num){
//         newArray.push(element);
//     }
// }
// console.log(newArray);

                             //ASSIGMENT 5
/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "Mayjfjhgfdfhj thdfdfe force be with you";

// let stringArr=string.split(' ');
// let longestWord=stringArr[0];
// let wordLength=stringArr[0].length;
// console.log(stringArr.length);
// for (let i=0; i<stringArr.length; i++){

//  if(stringArr[i].length > wordLength) {
//     wordLength = stringArr[i].length;
//     longestWord = stringArr[i];
//  } 
// }
// console.log(longestWord); // 'force'

                             //ASSIGMENT 6
                             /*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  
  - Заканчивает запрашивать числа, как только посетитель введёт не число 
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
let userInput;
const numbers = [];
let total = 0;

do {userInput = prompt('Enter number please');
    if (userInput===null) {
        break;
    }    
        else if (!isNaN(userInput)){
            numbers.push(Number(userInput));}
        else {
            alert('Enter the number please.')};
        }
    while (userInput!==null);
    console.log(numbers);
    

for(let element of numbers){
    total+=element;
    }
  if  (numbers.length>0) {
alert(`Общая сумма чисел равна ${total}`);}
else {}

                                    //ASSIGMENT 7
// Создайте игру угадай число.
  
//   Есть массив чисел numbers, содержащий "верные" числа.
//   Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
//   Просим пользователя ввести цифру от самого маленького,
//   до самого большого элемента массива. Эти значения необходимо
//   сохранить в переменные min и max. Учтите что массив произвольный,
//   но элементы всегда идут по возрастанию.
  
//   Пусть prompt говорит "Введите цифру между x и y", где x и y 
//   соотвественно самый маленький и самый большой элемент массива.
  
//   Но пользователь может ввести что угодно, необходимо проверить 
//   что было введено. Преобразовать input в числовой тип и проверить 
//   число ли это.
  
//     - Если не число - выводим alert с сообщением о том, что было 
//       введено не число.
//     - Если число - проверить содержит ли в себе массив numbers это число.
//     - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
//     - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
// */

const numbers = [12, 15, 25, 37, 41];
let min=numbers[0];
let iArr=numbers.length-1;
let max=numbers[iArr];
let userNum=prompt(`Введите число от ${min} до ${max}`);
// if (userNum===null) {
//             break;
//         }

 if (!isNaN(userNum)){
     if (numbers.includes(Number(userNum))) {
        alert ('Поздравляем, Вы угадали!');
     }
   
        else {
            alert ('Сожалеем, Вы не угадали!');
        }
    }
    
 else { 
alert("Введите число!");}