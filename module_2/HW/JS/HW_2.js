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

// доп задание
// Напишите скрипт авторизации пользователя.
// Есть массив паролей зарегистрированных пользователей passwords. 
// При посещении страницы, необходимо попросить пользователя ввести свой пароль,
// после чего проверить содержит ли массив passwords пароль введенный пользователем.
// Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
// Подсказка: используйте цикл do...while.
// Если был введен пароль который есть в массиве passwords, вывести alert 
// с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.

// Если был введен не существующий пароль, отнять от лимита попыток единицу, 
// вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
// где n это оставшийся лимит. 

// После того как пользователь закрыл alert, запросить пароль снова. 
// Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
// существующий пароль, не кончатся попытки или пока пользователь 
// не нажмет Cancel в prompt.
// Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
// Если пользователь нажмет Cancel, прекратить выполнение цикла.
// */


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let countAttempts = 0;

do {let userPassword=prompt("Enter your password please");
   
    if (passwords.includes(userPassword)) {
        countAttempts++;
        alert("Добро пожаловать!");
        break;}
        else if (userPassword===null) {
            break;
        } else {
            countAttempts++;
            if (countAttempts===attempts) {
                alert('У вас закончились попытки, аккаунт заблокирован!');
            } else {
            console.log(countAttempts);
            alert (`Неверный пароль, у вас осталось ${attempts-countAttempts} попыток `);
           }
         
        }
    }
  
 while (countAttempts<attempts);