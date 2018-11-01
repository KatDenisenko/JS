
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function isLoginValid (login) {
   if (login.length>=4&&login.length<=14)
   { return true;}
  else {return false;}
}
  
function isLoginUnique (login) {
  if (logins.includes(login)) {
    return true;}
    else {return false;}
}
 
function addLogin(login) {
  if (!isLoginValid (login)) {
    console.log ('Ошибка! Логин должен быть от 4 до 16 символов');}
    
    else if (isLoginUnique (login)) {
      console.log ('Такой логин уже используется!');
   
    }
    else {
      logins.push(login);
      console.log ('Логин успешно добавлен!');
    };
  }

// Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

addLogin('Kate'); // 'Логин успешно добавлен!'
addLogin('Poly'); // 'Такой логин уже используется!'
addLogin('Lex'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('kjhlhfsafhfhjhgjnvjsdhushf'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);

