let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");

function add() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    document.getElementById("ans").innerText = (num1 + num2);
}

function sub() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    document.getElementById("ans").innerText = (num1 - num2);
}

function mul() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    document.getElementById("ans").innerText = (num1 * num2);
}

function div() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    document.getElementById("ans").innerText = (num1 / num2);
}

addition.addEventListener("click", add);
subtraction.addEventListener("click", sub);
multiplication.addEventListener("click", mul);
division.addEventListener("click", div);