let username=document.getElementById("username");
let email=document.getElementById("email");
let address=document.getElementById("address");
let logout=document.getElementById("logout");
let pureVedaLoginUser = JSON.parse(localStorage.getItem("pureVedaLoginUser"));

username.innerText=`Name : ${pureVedaLoginUser[0].userName}`;
email.textContent=`Email : ${pureVedaLoginUser[0].email}`;
address.textContent=`Address : ${pureVedaLoginUser[0].address}`;

function logoutUser(){
    loginDetail=null;
    localStorage.setItem("pureVedaLoginUser", JSON.stringify(loginDetail));
    pureVedaCart =[];
    localStorage.setItem("pureVedaCart", JSON.stringify(pureVedaCart));
}
logout.addEventListener("click",logoutUser);