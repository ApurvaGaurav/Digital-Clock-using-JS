let reload_time = setInterval(function () {

    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;

}, 1000)

