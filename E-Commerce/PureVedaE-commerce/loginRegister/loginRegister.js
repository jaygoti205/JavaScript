let myForm = document.getElementById("myForm");
let register = document.getElementById("register");
let login = document.getElementById("login");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let address = document.getElementById("address");
let securityKey = document.getElementById("securityKey");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let oldPassword = document.getElementById("oldPassword");
let msg = document.getElementById("errorMsg");
let loginDetail = [];

function passwordMatch() {
    if (password.value != confirmPassword.value) {
        msg.textContent = "Password not Match.";
        submit.disabled = true;
    }
    else {
        msg.textContent = "";
        submit.disabled = false;
    }
}

function registerUser() {
    let users = JSON.parse(localStorage.getItem("pureVedaUsers")) || [];
    users.push({
        id: (Math.floor(Math.random() * 1000)),
        userName: userName.value,
        email: email.value,
        address: address.value,
        securityKey: securityKey.value,
        password: password.value,
    });
    localStorage.setItem("pureVedaUsers", JSON.stringify(users));
    myForm.setAttribute("action", "./login.html")
}

function loginUser() {
    pureVedaUsers = JSON.parse(localStorage.getItem("pureVedaUsers"));
    email = email.value;
    password = password.value;

    let indexUser = pureVedaUsers.findIndex(user => user.email === email);
    if (indexUser >= 0) {
        if (pureVedaUsers[indexUser].password === password) {
            loginDetail.push({
                id: pureVedaUsers[indexUser].id,
                userName: pureVedaUsers[indexUser].userName,
                email: pureVedaUsers[indexUser].email,
                address: pureVedaUsers[indexUser].address,
                password: pureVedaUsers[indexUser].password
            });
            localStorage.setItem("pureVedaLoginUser", JSON.stringify(loginDetail));
            myForm.setAttribute("action", "../index.html");
        }
        else {
            alert("Username and password Are Not matched.");
            myForm.setAttribute("action", "./login.html");
        }
    }
    else {
        alert("User not found..");
        myForm.setAttribute("action", "./login.html");
    }
}

function forgotPasswordUser() {
    pureVedaUsers = JSON.parse(localStorage.getItem("pureVedaUsers"));
    email = email.value;
    securityKey = securityKey.value;
    password = password.value;
    confirmPassword = confirmPassword.value

    let indexUser = pureVedaUsers.findIndex(user => user.email === email);
    if (indexUser >= 0) {
        if (pureVedaUsers[indexUser].securityKey === securityKey) {
            if (password === confirmPassword) {
                pureVedaUsers[indexUser].password = password;
                localStorage.setItem("pureVedaUsers", JSON.stringify(pureVedaUsers));
                myForm.setAttribute("action", "./login.html");
            }
            else {
                myForm.setAttribute("action", "./forgotPassword.html");
                alert("Username and Security Key Are Not matched.");

            }
        }
    }
    else {
        myForm.setAttribute("action", "./forgotPassword.html");
        alert("User not found.");

    }
}

function resetPasswordUser() {
    pureVedaUsers = JSON.parse(localStorage.getItem("pureVedaUsers"));
    email = email.value;
    oldPassword = oldPassword.value;
    password = password.value;
    confirmPassword = confirmPassword.value;

    let indexUser = pureVedaUsers.findIndex(user => user.email === email);
    if (indexUser >= 0) {
        if (pureVedaUsers[indexUser].password === oldPassword) {
            if (password === confirmPassword) {
                pureVedaUsers[indexUser].password = password;
                localStorage.setItem("pureVedaUsers", JSON.stringify(pureVedaUsers));
                myForm.setAttribute("action", "./login.html");
            }
            else {
                alert("Username and password Are Not matched.");
                myForm.setAttribute("action", "./forgotPassword.html");
            }
        }
    }
    else {
        alert("User not found.");
        myForm.setAttribute("action", "./forgotPassword.html");
    }
}