'use strict'
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// let list = document.querySelector('.categories');
// let li = document.querySelectorAll ('.categories>li');
// console.log(li);
// li.forEach(el=>console.log(el.firstChild.data.trim(),el.firstElementChild.childElementCount));


/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// let list2 = document.querySelectorAll('.list>li');

// console.log(list2);
// list2[0].style.color="red";
// console.log(list2);
// list2[list2.length-1].style.color="blue";

/*
  Дан ul склассом .list3 и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// let list3=document.querySelector('.list3');

// for (let el of elements) {
// list3.innerHTML+=`<li>${el}</li>`
// }
// console.log(list3);

/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/

// let ul = document.createElement('ul');
// let body = document.querySelector('body');
// body.append(ul);
// console.log(ul);
// let li3;
// do { 
//      li3 =prompt('Enter li name');
//      if (li3!==null){
//     ul.innerHTML+=`<li>${li3}</li>`};}
// while (li3!==null);


// let ul = document.createElement('ul');
// let body = document.querySelector('body');
// body.append(ul);
// let liName;
// do { 
//     let li4 = document.createElement('li');
//     liName =prompt('Enter li name');
//     li4.textContent=`${liName}`;
//     ul.append(li4);
//    }
   
// while (liName!==null);
// console.log(ul);

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let filter = [...document.querySelectorAll('.size-filter>li>label>input')];
// console.log(filter);
// let checked=[];
// let value = [];
// for (let el of  filter) {
//   if (el.checked) {
//     checked.push(el);
//   }
// }
// console.log(checked);
// function getInputsData(inputs) {
//   for (let el of inputs) {
//     value.push(el.value);
//   }
//   return value;
// }
// console.log(getInputsData(checked));


                                //ASSIGMENT 6

/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/


// function createPostCard () {
  
   
//   let div = document.createElement('div');
//   div.classList.add('post');
 
//   let img = document.createElement('img');
//   img.classList.add('post__image');
//   img.setAttribute('src','http://via.placeholder.com/400x150');
//   img.setAttribute('alt','post image');

//   let h2 = document.createElement('h2');
//   h2.classList.add('post__title');
//   h2.textContent = 'Lorem ipsum dolor';

//   let p = document.createElement('p');
//   p.classList.add('post__text');
//   p.textContent ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';


//   let a = document.createElement('a');
//   a.classList.add('button');
//   img.setAttribute('href','#');
//   a.textContent='Read more';

//   div.prepend(img,h2,p,a);
//   let body = document.querySelector('body');
//   body.append(div);
//   return div;
// }
// console.log(createPostCard ());

                                //ASSIGMENT 7

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
 let root = document.querySelector('#root');

function createBoxes(num) {
  let wrapper = document.createElement('div');
  let number = 30;
  for ( let i=1; i<=num; i++) {
    
    let div = document.createElement('div');

     function color () {
      let c = Math.floor(Math.random()*256);
     return c;
     }
  
    div.style.backgroundColor=`rgb(${color()}, ${color()}, ${color()})`;
    div.style.height = `${number}px`;
    div.style.width = `${number}px`;
    div.style.margin = 'auto';
    div.style.marginBottom = '10px';
    number+=10;
    wrapper.append(div);
  }
return root.append(wrapper);

}
createBoxes(9);