/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const ul = document.querySelector("#users"),
    submitFind = document.querySelector("#submitFind"),
    inputFind = document.querySelector("#inputFind"),
    formFind = document.querySelector("#formFind");

const skip = document.querySelector("#skip");


const inputDel = document.querySelector('#del'),
      formDel = document.querySelector('#delete');

const inputUp = document.querySelector('#update'),
      formUp = document.querySelector('#updateForm');


const addName = document.querySelector("#inputName"),
      addAge = document.querySelector("#inputAge"),
      addForm = document.querySelector("#add_form"),
      inputAdd = document.querySelector("#inputAdd");




function creatLi (arr) {
    for (let el of arr) {
        let li = document.createElement('li');
        li.setAttribute('data-id',el.id);
        li.textContent = `ID:${el.id}     User name: ${el.name};   Age: ${el.age};`;
        ul.append(li);
    }
}

function getAllUsers() {
     fetch(`https://test-users-api.herokuapp.com/users/`)
    .then(feedback=>feedback.json())
    .then(res=>creatLi(res.data))
    .catch(err=>console.log(err));
    }

function creatOneLi (obj) {
    ul.innerHTML = '';
    let li = document.createElement('li');
    li.setAttribute('data-id',obj.id);
            li.textContent = `ID:${obj.id}     User name: ${obj.name};   Age: ${obj.age};`;
            ul.append(li);
        }

        function addLi (obj) {//создаём лишку записанную на сервер
            let li = document.createElement('li');
            //li.setAttribute('data-id',obj.id);
            li.textContent = `ID:${obj._id}     User name: ${obj.name};   Age: ${obj.age};`;
            ul.append(li);
        }

function delLi () {
    ul.children[0].remove(); 
    getAllUsers()
}
    
function getUserById(evt) {
    
    evt.preventDefault();
    let id = inputFind.value;
        fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(feedback=>feedback.json())
        .then(user=>creatOneLi(user.data))
        .catch(err=>console.log(err));
        formFind.reset();
        }

function addUser(e) {
e.preventDefault();
 let name = addName.value;
 let age = addAge.value;
    fetch(`https://test-users-api.herokuapp.com/users/`,{
    method: 'post',
    body: JSON.stringify({name:name, age:age}),//поле в котором отправляется информация на сервер,если значение ключа и значение называются одинаково можно указать {text} и оно преобразуется в {text:text}
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }//поле хедер, которое необходимо передавать при методе post для этого сервера
})
.then(res=>res.json())//проверяем, что пришло с сервера в результате нашей отправки - пришел объект
.then(obj=>addLi(obj.data))// 
.catch(err=>console.log(err));
addForm.reset();
}


function removeUser() {
   let idNumber = inputDel.value;
   let arr = Array.from(ul.children);
   let index;
       for (let el of arr) {
           if (el.dataset.id===idNumber)
           index = arr.indexOf(el);
        }
//delete - удалить инфу
 fetch(`https://test-users-api.herokuapp.com/users/${idNumber}`,{
    method: 'delete',
 })
 .then(res=>res.json())
 .then(obj=>console.log(obj))
 .catch(err=>console.log(err));
 ul.children[index].remove();
 formDel.reset();
 getAllUsers()
}

function updateUser() {
    let id = inputUp.value;
    let user = {
        name:null,
         age:null
    };
    let name = prompt('Enter user name');
    if (name!==null) {
        user.name = name;
    }
    let age = prompt('Enter user age');
    if (name!==null) {
        user.age = age;
    }
        
//put-обновить
    fetch (`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'put',
        body: JSON.stringify({name: user.name, age:user.age}),//поле в котором отправляется информация на сервер,если значение ключа и значение называются одинаково можно указать {text} и оно преобразуется в {text:text}
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    formUp.reset();

}


window.addEventListener('DOMContentLoaded',getAllUsers);
submitFind.addEventListener('click',getUserById);
skip.addEventListener('click',delLi);
addForm.addEventListener('submit',addUser);
formDel.addEventListener('submit',removeUser);
formUp.addEventListener('submit',updateUser);
