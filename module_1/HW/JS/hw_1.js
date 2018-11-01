

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let cancel = "Cancel by user.";
let forbid = 'Forbidden!';
let well = 'You are wellcome!!!';
  
let login = prompt('Enter your login please');
if (login===null) {
    alert (cancel);
} else if (login!==adminLogin) {
    alert (forbid);
} else {
    let password = prompt('Enter your password please');
        if (password===null) {
            alert (cancel);
        }
        else if (password!==adminPassword) {
            alert (forbid);
        }
        else {
            alert (well);
        }
}

 

//   ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  

// const  sharm=15;
// const hurgada = 25;
// const taba = 6;
// let userNumber = prompt ("Please enter amount of numbers");
// let sharmTrip = 'Have a nice trip to Sharm';
// let hurgadaTrip = 'Have a nice trip to Hurghada';
// let tabTrip = 'Have a nice trip to Tab';
// let sorry = 'We are so sorry, come again';


// if (Number.isInteger(+userNumber)&& userNumber!==null) {
//     if (+userNumber<=taba) {
//        let  userChoice = prompt ('You can choose from 3 places.Sharm - 1, Hurghada - 2 and Tab - 3.Please make your choice, enter relevant number');
//         if (userChoice ==="1") {
//             alert (sharmTrip);
//         } else if (userChoice==="2") {
//             alert (hurgadaTrip);
//         } else if (userChoice==="3") {
//             alert (tabTrip);
//         } else {
//             alert (sorry);
//         }
//      } 
    
//      else if (+userNumber>taba && +userNumber<=sharm) {
//         userChoice = prompt ('You can choose from 2 places.Sharm - 1, Hurghada - 2.Please make your choice, enter relevant number')
//                 if (userChoice==='1') {
//                     alert (sharmTrip);
//                 } else if (userChoice==='2') {
//                     alert (hurgadaTrip);
//                 }
//                 else {
//                     alert (sorry);
//                 }
//     } 
//     else if (+userNumber>sharm&&+userNumber<=hurgada) {
//             userChoice = confirm ('We have numbers in Hurghada. Are yuo agree?') 
//             if (userChoice ===true)  {
//                 alert (hurgadaTrip);
//             } else {
//             alert (sorry);}
//     } else if (+userNumber>hurgada) {
//         alert (`We are sorry, but we don't have so many numbers.`);
//     }
// }
// else {
//     alert ('Error');
// }