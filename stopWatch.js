let displayTime = document.getElementById('displayTime');
let start = document.getElementById('start');
let posh = document.getElementById('push');
let reset = document.getElementById('reset');
let [hours,minutes,seconds] = [0,0,0];
let chackTimer = false;

function stopWatch () {
    seconds++;
    if (seconds === 60){
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++
        }
    }
    let h = hours < 10 ? '0'+hours : hours;
    let m = minutes < 10 ? '0'+minutes : minutes;
    let s = seconds < 10 ? '0'+seconds : seconds
    displayTime.innerText = `${h} : ${m} : ${s}`
}

start.addEventListener ('click', function () {
    if (!false) {
        clearInterval(chackTimer)
    }
    chackTimer = setInterval(stopWatch,1000);
})

posh.addEventListener('click',function () {
    clearInterval(chackTimer)
});

reset.addEventListener ('click', function () {
    clearInterval (chackTimer);
    [hours,minutes,seconds] = [0,0,0];
    displayTime.innerText = '00 : 00 : 00';
})