'use strict'
//способы создания регулярных выражений
// let reg = new RegExp();
// let patern = /win/; //- пегулярное выражение

// const string = 'text windows win';
// console.log(string.match(patern)); // метод строки который проверяет содержит ли строка дынное выражение, вернет массив с первым совпадением
// console.log(patern.test(string));// метод регулярных выражений который вернет тру или фолс

let string = 'Is that all there is?',

//flags
reg = /is/gi;//g - ищет глобально, т.е. все совпадения i - игнорирует регистр
console.log(string.match(reg))

//classes в регулярных выражениях
let string3 = '12345, g4 fh f. jkl  - dhdjdk',
reg2 = /\d/g; // - \d - digist - число - класс для поиска чисел, без флага g выведет только первую цифру, которую найде - ["1", index: 0, input: "12345, g4 fh f. jkl  - dhdjdk", groups: undefined] / ["1", "2", "3", "4", "5", "4"]
console.log(string3.match(reg2));

let reg3 = /\D/g; // - ищет любые символы кроме цифры (пробелы, буквы)
console.log(string3.match(reg3));

let reg4 = /\w/g; //- ищет цифры и буквы; 
//  /\W/ - ищет всё кроме букв и цифр
console.log(string3.match(reg4));

//quantity

let string4 = '92345 123, 243 467 52 cat dog 34 987 5',
regV = /\d{1,}/g;//{3} - покажет массив с 3-х значными числами,{1,3} - выведет числа длинной от 1 до 3, при этом если цисло содержит 5 символо, отрежет первые 3.
//{1,} - длина числа от 1 и больше.
//{3,} - вернет числа длинной от 3 символов и больше
let regB = /\b\d{3}\b/g;//b - показывает начало слова и конец слова
console.log(string4.match(regV));
console.log(string4.match(regB));


//sets
let string5 = '85 random text with a number - 5;',
regS = /[a-zA-Z]/ig;//ищем набор символов от a до z и от A до Z, если хотим укр язык должны сменить раскладку и указать [а-яА-Я,Ї]
console.log(string5.match(regS));
let regW = /^5;$/; //^ - начало строки $ - конец строки./5$/ - строка должна заканчиваться на 5;/^5/ - строка
console.log(string5.match(regW));
let find = /^\d{2}.{1,}$/;//точка . - указывает на любой символ в строке.Если мы хоти найти точку то в шаблоне экранируем . - \.

console.log(string5.match(find));
//\s - ищет пробелы
// | - или
let str = 'The car is par ked in the gar age.' ;
let regVur = /\b(c|g|p)ar\b/g;// ищем слово которое начинается на c или g или p и заканчивается на ar //["car", "par", "gar"]
console.log(str.match(regVur));

// + - один або більше аналог {1,};
//  ? - нуль або один
//  * - нуль або більше


//Assigment

let mail = document.querySelector("#mail");
let submitBtn = document.querySelector('[type="submit"]');
let revVr = /^\w+@\w{2,5}\.com$/g;
function getMail (e) {
   
    if (mail.value.match(revVr)) {
    console.log('Hello');
    }
    else {
        console.log('Err');
    }
}
submitBtn.addEventListener('click',getMail);

// Пошта починатися з будь-якої кількості літер чи цифр
// Далі має йти @
// Потім літери чи цифри від 2 до 5 символів
// І закінчуватися на .com


// Якщо пошта правильна намалювати під формою параграф з текстом
// "Пошта валідна"
// Якщо пошта не правильна намалювати параграф з текстом "Пошта неправильна"
