let ul = document.querySelector('.task-list');
let input=document.querySelector('[type="text"]')
let form = document.querySelector('#form');


function loadTasks () {

fetch('http://localhost:3001/tasks')
.then(res=>res.json())
.then (data=>createLi(data))}

function postTask (evt) {
evt.preventDefault();
let text = input.value;
if (text !=='') {
fetch('http://localhost:3001/tasks',{
    method: 'post',
    body: JSON.stringify({text:text}),//поле в котором отправляется информация на сервер,если значение ключа и значение называются одинаково можно указать {text} и оно преобразуется в {text:text}
    headers: {
        'Content-Type': 'application/json'}//поле хедер, которое необходимо передавать при методе post для этого сервера
})
.then(res=>res.json())//проверяем, что пришло с сервера в результате нашей отправки - пришел объект
.then(data=>addLi(data))//добавляем информацию на сайт, что бы не обновлять постоянно страничку.
}
form.reset();
}

function createLi(arr) {// создаём лишки по данным из сервера
    for (let el of arr) {
        let li = document.createElement('li');
        li.textContent=el.text;
        li.setAttribute('data-id',el.id);
        ul.append(li);
    }
}

function addLi (obj) {//создаём лишку записанную на сервер
    let li = document.createElement('li');
    li.textContent = obj.text;
    li.setAttribute('data-id',obj.id);
    ul.append(li);
}

function deleteLi (e) {
let idElement = e.target.dataset.id;
fetch(`http://localhost:3001/tasks/${idElement}`, {
    method:'delete',
})
.then(()=>e.target.remove())
}

function upDate () {
    fetch ('http://localhost:3001/tasks/14', {
        method: 'put',
        body: JSON.stringify({text:'lemon'}),//поле в котором отправляется информация на сервер,если значение ключа и значение называются одинаково можно указать {text} и оно преобразуется в {text:text}
    headers: {
        'Content-Type': 'application/json'}
    })
}
upDate();
ul.addEventListener('click', deleteLi);
window.addEventListener('DOMContentLoaded', loadTasks);
form.addEventListener('submit', postTask);