
let ampm = document.getElementById('ampm');

function displayTime() {
    let dateTime = new Date();
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let dayName = dayNames[dateTime.getDay()];
    let month = monthNames[dateTime.getMonth()];
    let dayNum = dateTime.getDate();
    let year = dateTime.getFullYear();
    let hr = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());

    if (hr > 12) {
        hr = hr - 12;
        ampm.innerHTML = 'PM';
    } else {
        ampm.innerHTML = 'AM';
    }

    document.getElementById('dayname').innerHTML = dayName;
    document.getElementById('month').innerHTML = month;
    document.getElementById('daynum').innerHTML = padZero(dayNum);
    document.getElementById('year').innerHTML = year;
    document.getElementById('hour').innerHTML = padZero(hr);
    document.getElementById('minute').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(displayTime, 1000);
