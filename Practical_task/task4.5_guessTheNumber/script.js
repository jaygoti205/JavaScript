let guess = document.getElementById("guess");
let check = document.getElementById("check");
let hint = document.getElementById("hint");
let replay = document.getElementById("reset");
let count = document.getElementById("count");
let r_num;

let attempt = 0;

function play() {
    hint.innerText="Please guess a number and press Guess";
    guess.value = "";
    attempt=0;
    replay.style.display = "none";
    r_num = Math.floor(Math.random() * 100) + 1;
    count.innerText = "Number of Attempt: " + attempt;
}
function checkNumber() {
    if (r_num > guess.value) {
        hint.innerText = "My number is greater than " + guess.value;
        attempt++;
        count.innerText = "Number of Attempt: " + attempt;
    }
    else if (r_num < guess.value) {
        hint.innerText = "My number is less than " + guess.value;
        attempt++;
        count.innerText = "Number of Attempt: " + attempt;
        console.log(attempt);
    }
    else {
        attempt++;
        hint.innerText = "Well Done! You guess correct number in " + attempt + " attempt";
        count.innerText = "Number of Attempt: " + attempt;
        replay.style.display = "block";
    }
}

play();
check.addEventListener("click", checkNumber);
replay.addEventListener("click", play) 