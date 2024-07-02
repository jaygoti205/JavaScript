let btn = document.getElementById("btn");
let txtbox = document.getElementById("name");
let submit = document.getElementById("submit");
let btn2 = document.getElementById("btn2");

btn.onclick = () => {
    console.log("Click");
}

btn2.ondblclick = () => {
    console.log("2 Click");
}

txtbox.onkeyup = () => {
    txtbox.value = txtbox.value.toUpperCase();
}

txtbox.onkeypress = () => {
    txtbox.style = "background-color:lightgray";
}

submit.onmouseover = () => {
    submit.style = "background-color:red";
    console.log("dark theam");
}

submit.onmouseout = () => {
    submit.style = "background-color:";
}


