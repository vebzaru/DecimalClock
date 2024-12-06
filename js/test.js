const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

setInterval(() => {
    const outputDiv = document.getElementById('output');
    Hour = new Date().getHours();
    Minute = new Date().getMinutes();
    Second = new Date().getSeconds();
    Millisecond = new Date().getMilliseconds();
    let totalMS = Millisecond + 1000*Second + 60*1000*Minute + 3600*1000*Hour;

    let decimalMSInDay = Math.floor((totalMS / 0.864) / 1);
    let decimalHour = Math.floor(decimalMSInDay / 10000000);
    let decimalMinute = Math.floor(decimalMSInDay / 100000) % 100;
    let decimalSecond = Math.floor(decimalMSInDay / 1000) % 100;
    let decimalMillisecond = decimalMSInDay % 1000

    if (decimalMinute < 10) {
        decimalMinute = "0" + decimalMinute;
    }
    if (decimalSecond < 10) {
        decimalSecond = "0" + decimalSecond;
    }
    if (decimalHour > 9) {
        decimalHour = 0;
    }

    let time = decimalHour + ":" + decimalMinute + ":" + decimalSecond;

    outputDiv.textContent = time;
});

