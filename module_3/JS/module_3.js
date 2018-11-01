
// function addTwoNumbers () {
//     let result = 5+6+7;
//     return result;
// }
// console.log(addTwoNumbers());

// const century = function(year) {
//     age = Math.ceil(year/100);
//     return age;
// }

// console.log(century(562));
// console.log(century(2018));
// console.log(century(1583));
                            //Функция которая вычисляет  век по году
// function add () {
    
//     let arr = Array.from(arguments);//Array.from(arguments) превращает псевдомассив arguments в массив.
//     // console.log(arr);
//     let total =0;
//     for ( let el of arr) {
//         total +=el;
//     }
//     return total;

// }
// console.log(add(5,10,15));
// console.log(add(1));
// console.log(add(10,20,30,40,50));

// function connect (a,b) {
//     return a+b;
// }
//  connect(5,6);
//  connect(null,6);



                                //Assigment 1

 /*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки


// function checkNumberType(num) {
    
//     if  (num%2===0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'



                            //Assigment 2
/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// Вызовы функции для проверки

// function formatString(str) {
    
//     if  (str.length<40) {
//         return str;
//     } else  {
//         let cutStr=str.slice(0,40)+'...'
//         return cutStr;
//     }
//     }

// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка


                                //Assigment 3
/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/



// function checkForSpam(str) {
    
//     if  (str.toLowerCase().includes("sale")||str.toLowerCase().includes("spam")) {
//         return true;
//     } else  {
//         return false;
//     }
//     }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true


                                //Assigment 4
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
// function getPx(str) {
    
//     if  (typeof str === 'string') {
//        return parseFloat(str);
    
//     } else  {
//         return null;
//     }
//     }
// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null



//                                 //Assigment 5
// /*  
//   Создайте фукнцию findLongestWord(str),
//   которая получает аргументом произвольную строку и
//   возвращает самое длинное слово в этой строке.   
  
//   Важное условие - в строке могут быть только пробелы
//   и символы букв и цифр!
// */
// function findLongestWord(str) {
//     let strArr=str.split(' ');
//     let longestWord=strArr[0];
//     let wordLength=0;
    
//     for (let i=0; i<strArr.length; i++){

//          if (strArr[i].length > wordLength) {
//             wordLength = strArr[i].length;
//             longestWord = strArr[i];
//          } 

//     } 
//     return longestWord;
// }

// // Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // вернет 'jumped'
  
//   console.log(
//     findLongestWord("Google do a roll")
//   ); // вернет 'Google'
  
//   console.log(
//     findLongestWord("May the force be with you")
//   ); // вернет 'force'
  


                                //Assigment 6

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
// */
// function findLargestNumber(numbers) {
 
//     let biggestNumber=0;  

//     for (let element of numbers) {
//            if (element>biggestNumber) {
//             biggestNumber = element;
//          } 
//     } 
//     return biggestNumber;
// }
// // Вызовы функции для проверки
// console.log(
//     findLargestNumber([1, 2, 3])
//   ); // вернет 3
  
//   console.log(
//     findLargestNumber([27, 12, 18, 5])
//   ); // вернет 27
  
//   console.log(
//     findLargestNumber([31, 128, 14, 74])
//   ); // вернет 128



                                  //Assigment 7
  /*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];

// function addUniqueNumbers(){
       
//     let arr = Array.from(arguments);//Array.from(arguments) превращает псевдомассив arguments в массив.
//     for (let element of arr) {
//         if (!uniqueNumbers.includes(element)) {
//             uniqueNumbers.push(element);
//         }
//     }
// return (uniqueNumbers);
// }

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]



                                  //Assigment 8
/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

// Вызовы функции для проверки
function removeFromArray(arr) {
    let arrNew = Array.from(arguments);
    let arrCut = arrNew.slice(1);

    for (let element of arrCut) {
        if (arr.includes(element)) {
            let del = arr.indexOf(element);
            arr.splice(del,1);
        }
    }
return arr;

}

// console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4)
//   ); // [1, 3, 5]
  
// console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
//   ); // [12, 8, 17]


                                    //Assigment 9

  // ================================ 1 ==========================
/*
Написати ф-ю convertToRem(px) яка приймає строку і повертає значення в rem

*/
function convertToRem(px) {
    const rem=16;
    convert=parseInt(px)/rem;

return `${convert}rem`;
}
console.log(convertToRem('16px')); // 1rem
console.log(convertToRem('24px')); // 1rem
console.log(convertToRem('0px')); // 1rem



// =============================== 2 ===================================

/*
Написати ф-ю convertToPrc(container, block) яка приймає розміри контейнера та розміри блока в форматі строк і повертає значення блока в %. 
Якщо результат дробовий округлювати до двох знаків після коми.

*/

function convertToPrc(container, block) {
    let convert = (parseInt(block)*100)/parseInt(container);

return `${convert.toFixed(2)}%`;
}
console.log(convertToPrc('1000px', '100px')); //10%
console.log(convertToPrc('950px', '150px')); // 15.79%

// =============================== #3 ===================================
/*
Написати ф-ю pxConvertor(from, to, block, container)  яка приймає параметри:
 from - одиниці з яких конвертувати, 
 to - одиниці в які конвертувати, 
 block - розміри блока для конвертації, 
 container - розмір контейнера. Всі параметри це строки. Ф-я повертає результат або % або rem.
   console.log('px', 'rem', 16); // 1rem
   console.log('px', 'rem', 24); // 1.5rem
   console.log('px','%', 100px', '1000px'); //10%
   console.log('px', '%', '150px', '950px'); // 15.79%
*/



