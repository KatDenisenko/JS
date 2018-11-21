
'use strict'
class Timer {
  constructor (parentNode) {

    this.parentNode = parentNode;
    this.time =  this.creatElement ('p','js-time','time','00:00.0');
    this.startBtn =  this.creatElement ('button','btn','js-start','Start');
    this.lapBtn =  this.creatElement ('button','btn','js-take-lap','Lap');
    this.reset =  this.creatElement ('button','btn','js-reset','Reset');
    this.ulLap =  this.creatElement ('ul','laps','js-laps');
   
    this.timer = {
      startTime: null,
      deltaTime: null,
      isActive: false,
      id: null,
      lapArr: []
    }
   
    this.delta = this.delta.bind(this);
    this.updateClockface = this.updateClockface.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
    this.creatElement = this.creatElement.bind(this);
    this.event = this.event.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.start = this.start.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.lapTimer = this.lapTimer.bind(this);
  
  }

  creatElement (tag,class1,class2,text) {//ФУНКЦИЯ КОТОРАЯ СОЗДАЁТ ЭЛЕМЕНТЫ
    let tagName = document.createElement(tag);
    tagName.classList.add(`${class1}`);
    tagName.classList.add(`${class2}`);
    tagName.textContent = text;
        this.parentNode.append(tagName);
      return tagName;}
    
   
  startTimer () {
    
    if (this.timer.isActive===false && this.timer.id===null) {
      this.timer.startTime = Date.now();// присваиваем значению  timer.startTime текущий момент клика
      this.timer.id = setInterval(this.delta,100);
      this.startBtn.textContent = 'Pause';
      this.timer.isActive=true;
      this.reset.disabled = false;
    }
  
    else if  (this.timer.isActive===true) {
      this.startBtn.textContent = 'Continue';
      clearInterval(this.timer.id);
      this.timer.isActive=false;
      this.reset.disabled = true;
  
    }
    else if (this.timer.isActive===false && this.timer.id!==null) {
      this.timer.startTime = Date.now() - this.timer.deltaTime;
      this.startBtn.textContent = 'Pause';
      this.timer.id = setInterval(this.delta,100);
      this.timer.isActive=true;
      this.reset.disabled = false;  
    }
  }
   delta () {
    this.timer.deltaTime = Date.now() - this.timer.startTime;
    this.updateClockface(this.time, this.timer.deltaTime)
}

   updateClockface(elem, time) {
  elem.textContent = this.getFormattedTime(time)}

   getFormattedTime(time) {
    let miliSec = Math.floor(time/100 %10);
    let sec = Math.floor(time/1000%60);
    let min = Math.floor(time/1000/60%60);
   
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return `${min}:${sec}.${miliSec}`;
  }

 resetTimer () {
    clearInterval(this.timer.id);
    this.timer.startTime = null;
    this.timer.deltaTime = null;
    this.timer.isActive = false;
    this.timer.id = null;
    this.time.textContent = '00:00.0';
    this.startBtn.textContent = 'Start';
    this.ulLap.innerHTML = "";
  
  }
  
   lapTimer () {
    //this.ulLap.innerHTML = "";
    let lapTime = this.timer.deltaTime;
    let li = document.createElement('li');
    this.updateClockface(li, lapTime);
    this.ulLap.append(li);
}
   event () {
  this.startBtn.addEventListener('click', this.startTimer);
  this.reset.addEventListener('click',this.resetTimer);
  this.lapBtn.addEventListener('click',this.lapTimer);
}

start () {
 
 this.startTimer ();
 this.resetTimer();
 this.lapTimer ();
 this.event();
}
}

let stopwatch = document.querySelector('.stopwatch');
let timer1 = new Timer(stopwatch);
timer1.start();

let stopwatch1 = document.querySelector('.stopwatch1');
let timer2 = new Timer(stopwatch1);
timer2.start();

let stopwatch2 = document.querySelector('.stopwatch2');
let timer3 = new Timer(stopwatch2);
timer3.start();

// const startBtn = document.querySelector('.js-start');
// const time = document.querySelector('.js-time');
// const reset = document.querySelector('.js-reset');
// const pauseBtn = null;
// const lapBtn = document.querySelector('.js-take-lap');
// const ulLap = document.querySelector('.js-laps');

// reset.disabled = true;
// const timer = {
//   startTime: null,
//   deltaTime: null,
//   isActive: false,
//   id: null,
//   lapArr: []

// }

// function startTimer () {
//   if (timer.isActive===false&&timer.id===null) {
//   timer.startTime = Date.now();// присваиваем значению  timer.startTime текущий момент клика
//   timer.id = setInterval(delta,100);
//   startBtn.textContent = 'Pause';
//   timer.isActive=true;
//   reset.disabled = false;
//   }
  
//   else if  (timer.isActive===true) {
//     startBtn.textContent = 'Continue';
//     clearInterval(timer.id);
//     timer.isActive=false;
//     reset.disabled = true;

//   }
//   else if (timer.isActive===false && timer.id!==null) {
//     timer.startTime = Date.now() - timer.deltaTime;
//     startBtn.textContent = 'Pause';
//     timer.id = setInterval(delta,100);
//     timer.isActive=true;
//     reset.disabled = false;  
//   }
// }

// function delta () {
//     timer.deltaTime = Date.now() - timer.startTime;
//     updateClockface(time, timer.deltaTime)
// }

//  function updateClockface(elem, time) {
//    elem.textContent = getFormattedTime(time)}

// function getFormattedTime(time) {
//     let miliSec = Math.floor(time/100 %10);
//     let sec = Math.floor(time/1000%60);
//     let min = Math.floor(time/1000/60%60);
   
//     min = min < 10 ? `0${min}` : min;
//     sec = sec < 10 ? `0${sec}` : sec;

//     return `${min}:${sec}.${miliSec}`;
//   }

//   function resetTimer () {
//     clearInterval(timer.id);
//     timer.startTime = null;
//     timer.deltaTime = null;
//     timer.isActive = false;
//     timer.id = null;
//     time.textContent = '00:00.0';
//     startBtn.textContent = 'Start';
//     ulLap.innerHTML = "";
  
//   }
  
//   function lapTimer () {
//     let lapTime = timer.deltaTime;
//     timer.lapArr.push(lapTime);
//     console.log(timer.lapArr);
//     let li = document.createElement('li');
//     updateClockface(li, lapTime);
//     ulLap.append(li);

// }

//   startBtn.addEventListener('click', startTimer);
//   reset.addEventListener('click',resetTimer);
//   lapBtn.addEventListener('click',lapTimer);

