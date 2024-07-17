var email = document.getElementById("email");
var fname = document.getElementById("name");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let form1 = document.getElementById("form1");


email.addEventListener("keyup", () => {
    email.value = email.value.toLowerCase();
});



const validation = () => {

    if (fname.value == "" || email.value == "") {
        document.getElementById("msg").innerText = "Please fill all detail...";
    }
    else {
        document.getElementById("msg").innerText = "Form Submitted...";
        fname.value = "";
        email.value = "";
    }
}

submit.addEventListener("click", validation);


