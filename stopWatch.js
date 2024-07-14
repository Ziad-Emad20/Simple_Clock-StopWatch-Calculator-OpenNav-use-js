// Create a Stopwatch
let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timeRefresh = document.querySelector(".timerDisplay");
let int = null;

document.getElementById('start').addEventListener('click',
    () => {
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    });
document.getElementById('stop').addEventListener('click',
    () => {
        clearInterval(int);
    });
document.getElementById('reset').addEventListener('click',
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