let count =0;
const time = document.getElementById('time');
function countTime(){
    let hours = Math.floor(count/3600);
    let min = Math.floor((count%3600)/60);
    let sec = Math.floor((count%60));

    let sethour = (hours<10)?('0'+hours):hours;
    let setMin = (min<10)?('0'+min):min;
    let setSec = (sec<10)?('0'+sec):sec;
    let complete = sethour+':'+setMin+':'+setSec;
    time.innerHTML = complete;
    count++;
}
let result;

function start(){
    result = setInterval(countTime,1000);
}
function stop(){
    clearInterval(result);
}
function reset(){
    count=0;
    countTime()
}


countTime();