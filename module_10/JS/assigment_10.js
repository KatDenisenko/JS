                            //ASSIGMENT 1

const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

function fetchCountryData() {
    
    event.preventDefault();
    result.innerHTML='';
    fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
    .then(feedback=>feedback.json())
    .then(res=>getResalt(res))
    .catch(mis=>console.log(mis));
    }

    function getResalt (arr) {
       for (let el of arr) {
        let name = document.createElement('p');
        name.textContent=`Country name: ${el.name};`;
        let capital = document.createElement('p');
        capital.textContent= `Capital: ${el.capital};`; 
        let cur = document.createElement('p');
        cur.textContent = `Main currency: ${el.currencies[0].name};`
        
        let img = document.createElement('img');
        img.setAttribute('src',el.flag);
        img.setAttribute('width','300px');
        img.setAttribute('height','auto');
        result.append(name,capital,cur,img);
       }
        
    }
    submitBtn.addEventListener('click', fetchCountryData);

    /*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/
                            //ASSIGMENT 2

// const input = document.querySelector('input');
// const submitBtn = document.querySelector('#js-submit');
// const result = document.querySelector('.result');


// function fetchUserData() {

//     event.preventDefault();
//      result.innerHTML='';
//    fetch(`https://api.github.com/users/${input.value}`)
//     .then(feedback=>feedback.json())
//     .then(res=>getResalt(res))
//     .catch(mis=>console.log(mis));
//     }
//     function getResalt (obj) {
               
//                 let avatar = document.createElement('img');
//                 avatar.setAttribute('src',obj.avatar_url);
//                 avatar.setAttribute('width','300px');
//                 avatar.setAttribute('height','auto');

//                 let username = document.createElement('p');
//                 username.textContent=`Username: ${obj.name};`;

//                 let bio = document.createElement('p');
//                 bio.textContent= `Bio: ${obj.bio};`; 

//                 let repo = document.createElement('p');
//                 repo.textContent = `Public repos: ${obj.public_repos};`
//                 result.append(avatar,username,bio,repo);
//           }

//     submitBtn.addEventListener('click', fetchUserData);


                            //ASSIGMENT 3
/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию fetchUsers, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
    ID | NAME | AGE
    id | name | age  
    id | name | age  
*/

// const getBtn = document.querySelector('.js-get');
// const result = document.querySelector('.result');


// /*
//   @param {FormEvent} evt
// */
// function fetchUsers() {
   
//     event.preventDefault();
//     //      result.innerHTML='';
//        fetch('https://test-users-api.herokuapp.com/users/')
//         .then(feedback=>feedback.json())
//         .then(res=>getResult (res.data))
//         //.catch(mis=>console.log(mis));
//         }
        
//         function getResult (arr) {
//             let tdHead = document.createElement('tr');
//                 let id = document.createElement ('th');
//                     id.textContent = 'ID';
                
//                 let name = document.createElement('th');
//                     name.textContent = 'NAME';

//                 let age = document.createElement('th');
//                     age.textContent = 'AGE';
        
//                     tdHead.append(id,name,age);
//         result.append(tdHead);
//                 for (let el of arr) {
//                     let tr = document.createElement('tr');
//                 let idTd = document.createElement ('td');
//                     idTd.textContent = el.id;
                
//                 let nameTd = document.createElement('td');
//                     nameTd.textContent = el.name;

//                 let ageTd = document.createElement('td');
//                     ageTd.textContent = el.age;
        
//         tr.append(idTd,nameTd,ageTd);
//         result.append(tr);
//                 }

//         }

//         getBtn.addEventListener("click", fetchUsers);

                              //ASSIGMENT 4  
     
        /*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию getUserByName, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает запрос с name введенным в input.
 
  Результатом fetch будет ответ от сервера, 
  вывести содержимое всего ответа (id, name, age) 
  или 'Такого пользователя в списке нет!'.
*/

// const input = document.querySelector('input');
// const postBtn = document.querySelector('.js-post');
// const result = document.querySelector('.result');
// // 5be72c64cbaab000144570d0  //5be72c7bcbaab000144570d3 //5be72dc7cbaab000144570dd
// function getUserByName() {
//         event.preventDefault();
//     //      result.innerHTML='';
//        fetch(`https://test-users-api.herokuapp.com/users/${input.value}`)
//         .then(feedback=>feedback.json())
//         .then(res=>getResult(res));
//         //.catch(mis=>console.log(mis));
//         }
//         function getResult (obj) {
//             result.textContent = `${obj.data.id} ${obj.data.name} ${obj.data.age}`;
//         }
// postBtn.addEventListener("click", getUserByName);


  // ...


//function fetchUserData() {
    
    //     event.preventDefault();
    //      result.innerHTML='';
    //    fetch(`https://api.github.com/users/${input.value}`)
    //     .then(feedback=>feedback.json())
    //     .then(res=>getResalt(res))
    //     .catch(mis=>console.log(mis));
    //     }
    //     function getResalt (obj) {
                   
    //                 let avatar = document.createElement('img');
    //                 avatar.setAttribute('src',obj.avatar_url);
    //                 avatar.setAttribute('width','300px');
    //                 avatar.setAttribute('height','auto');
    
    //                 let username = document.createElement('p');
    //                 username.textContent=`Username: ${obj.name};`;
    
    //                 let bio = document.createElement('p');
    //                 bio.textContent= `Bio: ${obj.bio};`; 
    
    //                 let repo = document.createElement('p');
    //                 repo.textContent = `Public repos: ${obj.public_repos};`
    //                 result.append(avatar,username,bio,repo);
    //           }
    
    //     submitBtn.addEventListener('click', fetchUserData);
    