let second = document.getElementById("second");
let start = document.getElementById("start");
let show = document.getElementById("num");
let time;

function timer() {
    second=document.getElementById("second").value;
    time = setInterval(startCountdown, 1000);
}

function startCountdown() {
    if (second > 0) {
        show.innerText = second;
        second--;
    }
    else {
        show.innerText = "Done";
        document.getElementById("second").value=null;
        clearInterval(time);
    }
}

start.addEventListener("click", timer);