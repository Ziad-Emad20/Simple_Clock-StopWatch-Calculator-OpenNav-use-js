// Nav Open 
let openNav = document.querySelector('.fa-bars');
let navValue = document.querySelector('nav');
let closeNav = document.querySelector('.fa-xmark');
let closeAndGoHome = document.querySelector('.toHome');
let closeAndGoClock = document.querySelector('.toClock');
let closeAndGoCalculator = document.querySelector('.toCalculator');
let closeAndGotoStopWatch = document.querySelector('.toStopWatch');
openNav.onclick = function () {
    navValue.classList.add('open');
}
closeNav.onclick = function () {
    navValue.classList.remove('open');
}
closeAndGoHome.onclick = function () {
    navValue.classList.remove('open');
}
closeAndGoClock.onclick = function () {
    navValue.classList.remove('open');
}
closeAndGoCalculator.onclick = function () {
    navValue.classList.remove('open');
}
closeAndGotoStopWatch.onclick = function () {
    navValue.classList.remove('open');
}
// Create a Clock 
function time() {
    const timeClock = new Date();
    let hours = timeClock.getHours();
    let minutes = timeClock.getMinutes();
    let seconds = timeClock.getSeconds();
    // Condation 
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    hours = (hours > 12 ? hours = hours - 12 : hours);
    const timeOfDay = (hours < 12 ? "AM" : "PM");
    const allTime = hours + " : " + minutes + " : " + seconds + " " + timeOfDay;
    // Update the current time
    setInterval(time, 1000);
    document.getElementById("clock").innerHTML = allTime;
}
time();
// Create the simple Calculator
let viewValue = '0';
function appValue(value) {
    if (viewValue === '0') {
        viewValue = value;
    } else {
        viewValue += value;
    }
    updateValue();
}
function clearValue() {
    viewValue = '0';
    updateValue();
}
function updateValue() {
    document.getElementById('result').textContent = viewValue;
}
function Calculator() {
    viewValue = eval(viewValue);
    updateValue();
}
updateValue();
// Create a Stopwatch
let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timeRefresh = document.querySelector(".timerDisplay");
let int = null;

document.querySelector('#start').addEventListener('click',
    () => {
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    });
document.querySelector('#stop').addEventListener('click',
    () => {
        clearInterval(int);
    });
document.querySelector('#reset').addEventListener('click',
    () => {
        clearInterval(int);
        [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
        timeRefresh.innerHTML = "00 : 00 : 00 : 000";
    });
function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let mS = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timeRefresh.innerHTML = `${h} : ${m} : ${s} : ${mS}`;
}