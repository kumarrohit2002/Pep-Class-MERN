console.log('Start')
// const timeDelayInMS=1000;

// var a=0;
// const timer=document.getElementById('timer-text')
// const callbackFuns=()=>{
//     console.log('hello ---'+a)
//     timer.innerText=`Timer: ${a} sec`
//     a++;
// }

// // setTimeout(callbackFuns,timeDelayInMS)
// setInterval(callbackFuns,timeDelayInMS)

// -------------------------------------------------


var timer = 1;
var timeInSec = 1;
var timeInMin = 0;
var timeInhr = 0;
const timerText = document.getElementById('timer-text')

const timerFunc = () => {
    if (timeInSec > 60) {
        timeInSec = 1;
    } else {
        timeInSec = timer;
    }

    timeInMin = Math.floor(timeInSec / 60);
    timeInhr = Math.floor(timeInMin / 60);

    timerText.innerText = `Timer:- ${timeInhr < 10 ? '0' + timeInhr : timeInhr}:${timeInMin < 10 ? '0' + timeInMin : timeInMin}:${timeInSec < 10 ? '0' + timeInSec : timeInSec}`

    timer++;
}

var intervalId = setInterval(timerFunc, 1000)

const reset = () => {
    timer = 1;
}

const stopTimer = () => {
    clearInterval(intervalId);
}

const resume = () => {
    intervalId = setInterval(timerFunc, 1000)

}


console.log('End')