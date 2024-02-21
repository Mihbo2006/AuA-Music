const clock = setInterval(function time() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();

    if(minute < 10 && hour < 10)
        document.querySelector('.clock').innerHTML = "0" + hour + "h" + "0" + minute;
    else if(hour < 10)
        document.querySelector('.clock').innerHTML = "0" + hour + "h" + minute;
    else if(minute < 10){
        document.querySelector('.clock').innerHTML = hour + "h" + "0" + minute;
    }
    else
        document.querySelector('.clock').innerHTML = hour + "h" + minute;

    let t = setTimeout(function(){ currentTime() }, 500);
}, 1000);

const time = new Date();
let year = time.getFullYear();

document.getElementById('copyright').innerHTML = "© AuA Inc. " + year;