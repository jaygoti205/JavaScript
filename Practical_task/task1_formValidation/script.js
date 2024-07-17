let uname = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let myForm = document.getElementById("myForm");
let submit = document.getElementById("submitBtn");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

submit.disabled = true;

function nameValidation() {
    const regex = /^[a-zA-Z\s]+$/;
    if (uname.value.trim().length < 3) {
        nameError.innerText = "Name must be Grater Then 3 character";
    }
    else if (!regex.test(uname.value.trim())) {
        nameError.innerText = "Number is not valid for the name ";
    }
    else {
        document.getElementById("nameError").innerText = "";
    }
}

function emailValidation() {
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (!regex.test(email.value)) {
        emailError.innerText = "Enter Email id Proper Format";
    } else {
        emailError.innerText = "";

    }
}

function passwordValidation() {
    let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/
    if (!regex.test(password.value)) {
        passwordError.innerText = "password must be combination of uppercase and lowercase,spacial character and number";
    }
    else if (password.value.trim().length < 8) {
        passwordError.innerText = "minimum 8 characters password";
    }
    else {
        passwordError.innerText = "";
      

    }
}

function confirmPasswordValidation() {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.innerText = "Password are not match";
    } else {
        confirmPasswordError.innerText = "";
        btn();
    }
}

function btn() {
    if (nameError.innerText == "" && emailError.innerText == "" && 
        passwordError.innerText == "" && confirmPasswordError.innerText == "") {
        document.getElementById("submitBtn").disabled = false;
    }
    else {
        document.getElementById("submitBtn").disabled = true;
    }
}

function submitForm() {
    myForm.innerHTML = "";
    let h = document.createElement("h1");
    h.innerText = "Form Are Submit!!";
    myForm.appendChild(h);

}



uname.addEventListener("keyup", nameValidation);
email.addEventListener("keyup", emailValidation);
password.addEventListener("keyup", passwordValidation);
confirmPassword.addEventListener("keyup", confirmPasswordValidation);
myForm.addEventListener("change", btn);
email.addEventListener("keyup", emailValidation);
submit.addEventListener("click", submitForm);

