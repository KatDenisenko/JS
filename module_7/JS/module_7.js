//console.log(document); 

let title = document.querySelector('.title');//получает доступ к первому элементу который нашел, если элементов будет много получит доступ только к превому которого нашёл.
console.log(title);

let text = document.querySelectorAll('p');//находит все элементы р, результаты получаем в видк псевдомассива.
console.log(text);
let text_t = [...document.querySelectorAll('p')]//превращаем псевдомассив в масив с помощью оператора spred (...)
let text2=Array.from(document.querySelectorAll('p'));
console.log(text2);

//было раньшe
let text3 = document.getElementsByClassName('title');
let li = document.getElementById('one');

let ul = document.querySelector('.list');
console.log(ul);

console.log(ul.children);//HTMLCollection(3) [li#one.item, li.item, li.item, one: li#one.item] - псевдомассив элементов
console.log(ul.parentNode);
console.log(ul.previousElementSibling);//предыдущий брат или мемтра
console.log(ul.nextElementSibling);//следующий брат или сестра

let text4 =document.querySelector('.par');
console.log(text4);
console.log(text4.classList.length);// показывает количество классов HTML єлемента
text4.classList.add('big-text');// добавляем класс

text4.classList.remove('par');// удаляем класс par из html
console.log(text4);
//ext4.classList.toggle('par');//если класс есть он его удаляет, если нет удаляет.
console.log(text4);
console.log(text4.classList.contains('title'));//false


const lnk = document.querySelector('.link');//<a href="https://www.google.com/" class="link">item 1</a>
console.log(lnk);

console.log(lnk.hasAttribute('href'));//true - проверяет есть ли атрибут
console.log(lnk.getAttribute('href'));//https://www.google.com/ - читает значение атрибута, 1 способ.
console.log(lnk.href);// - https://www.google.com/ - 2 способ как получить информацию из атрибута
                            ///\\\
                    //hasAttribute getAttribute возвращают строки
lnk.setAttribute('title', 'super link');//создаем ноавый атрибут к html документу, (атрибут,значение атрибута, т.е в HTML для тега lnk будет новый атрибут title=super link; )
lnk.setAttribute('id', 'idFromJs');
lnk.removeAttribute ('title');//удаляем атрибут

// data-myword - возможность создать свой атрибут в теге HTML на который не будет
//ругаться валидатор,если он начинается со слова data-...

let li2 = document.querySelector('#one');
console.log(li.dataset.info);//даёт возможность обращаться к атрибутам data-;

// let p = document.querySelector('.text');
// console.log(p.textContent);

// let p = document.querySelector('.text').textContent;
// console.log(p);// получим доступ к внутренниму контексту html элемента

// let p = document.querySelector('.text').innerHTML;// 2 способ, как получить доступ к внутренниму контексту html элемента
// console.log(p);
// console.log(p);

// разница между .textContent и .innerHTML
let ul3=document.querySelector('.list');
console.log(ul3.textContent);
// item 1
// item 2
// item 3 //достает только текст
console.log(ul3.innerHTML);
{                /* <li class="item" data-info="first" id="one"><a href="https://www.google.com/" class="link" id="idFromJs">item 1</a></li>
                    <li class="item" data-info="second"><a href="1">item 2</a></li>
                    <li class="item" data-info="third"><a href="2">item 3</a></li> */}
//достает разметку в формате строки

// создадим HTML елемент с помощью JS

let mainTitle = document.createElement('h1');
console.log(mainTitle);
mainTitle.classList.add('title-style');
console.log(mainTitle);
mainTitle.textContent='I am crazy title created from JS';

let container = document.querySelector('.container');
// container.append(mainTitle);// вставляет элемент в конец контейнера;
// container.prepend(mainTitle);//вставляет элемент в начало контейнера;

// container.before(mainTitle);//вставляет перед элементом;
let h2 = document.querySelector('.title');
h2.after(mainTitle);

// let result = mainTitle.cloneNode(true);//если false копируется один элемент без вложенности <h1 class="title-style"></h1>
// console.log(result);                    // усли true копируется всё
//  h2.before(result);

 h2.replaceWith(mainTitle);
 let list = document.querySelector('.list');
 list.remove();// удаляем list

 let input = document.querySelector('.name');
 console.log(input.value);//получаем значение value из input.

 let checkbox = document.querySelector('#box');// 
 console.log(checkbox.checked);//true - элемент выбран, false - элемент не выбран, галочки нет.
 console.log(checkbox.checked);// используется для получения информации с checkbox radiobutton.

 let articleTitle=document.querySelector('h2');
 console.log(articleTitle.style);
articleTitle.style.color="yellow";
articleTitle.style.fontSize="60px";
articleTitle.style.textAlign="center";
articleTitle.style.textTransform="uppercase";
articleTitle.style.background="blue";
// articleTitle.style.backgroundImage='url:ALARM@1X'
 console.log(articleTitle.textContent);

// ссылка -  добавляем хреф - контекст - распологаем конце артикл
 let article = document.querySelector('.article');
//  let a = document.createElement('a');
//  a.setAttribute('href','#');
//  a.textContent='link';
//  article.append(a);

let str = `<a href="#">link</a>`;//создаем строку с разметкой
// article.innerHTML=str;//innerHTML перезаписал str
article.innerHTML+=str;//innerHTML добавил str

                        ///ВСТРОЕННЫЕ ОБЪЕКТЫ БРАУЗЕРА
console.log(navigator);

console.log(navigator.userAgent);//показывает все установленные браузеры
console.log(navigator.vendor);//показыает браузер из которого открыт сайт

console.log(window.screen);// информация о экране пользователя
console.log(location);
//history - 

//BOM - строенные объекты в браузере, которые позволяют узнать информацию о системе пользователя, версии браузера и т.д