let banner = document.getElementById("banner");
let profile = document.getElementById("profile");
let personIcon = document.getElementById("personIcon");
let latestProduct = document.getElementById("latestProduct");
let allProduct = document.getElementById("allProduct");
let index = 1;
let banners = ["./image/banner.jpeg",
    "./image/banner3.jpeg",
    "./image/banner5.jpeg"
]
latestProduct.innerHTML = "";
allProduct.innerHTML = "";

for (let i = data.length - 1; i >= data.length - 6; i--) {
    let div = document.createElement("div");
    div.setAttribute("class", "singleProduct");
    div.innerHTML = `   <img src="${data[i].image}" alt="product image">
                            <p>${data[i].title.substring(0, 75)}...</p>
                            <h3>Price:${data[i].price}</h3>
                            <button class="addCart" onclick=addCartProduct(${data[i].id})>Add cart</button>`;
    latestProduct.appendChild(div);
}

for (i = 0; i < 6; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "singleProduct");
    div.innerHTML = `   <img src="${data[i].image}" alt="product image">
            <p>${data[i].title.substring(0, 75)}...</p>
            <h3>Price:${data[i].price}</h3>
            <button class="addCart" onclick=addCartProduct(${data[i].id})>Add cart</button>`;
    allProduct.appendChild(div);
}

function addCartProduct(id) {
    let pureVedaCart = [];
    let pureVedaLoginUser = JSON.parse(localStorage.getItem("pureVedaLoginUser"));
    if (pureVedaLoginUser === null) {
        let login = document.createElement("a");
        login.href = "./loginRegister/login.html";
        login.click();
    }
    else {
        let c = data.findIndex(x => x.id == id);
        pureVedaCart = JSON.parse(localStorage.getItem("pureVedaCart"))||[];
        let exist = pureVedaCart.find(obj => obj.id === data[c].id);
        if (exist === undefined) {
            pureVedaCart.push({
                id: data[c].id,
                title: data[c].title,
                image: data[c].image,
                price: data[c].price,
                quantity: 1
            });
            localStorage.setItem("pureVedaCart", JSON.stringify(pureVedaCart));
        }
    }
}

function bannerSlide() {
    if (index === banners.length) { index = 0; }
    banner.src = banners[index];
    index++;
}

let pureVedaLoginUser = JSON.parse(localStorage.getItem("pureVedaLoginUser"));

if (pureVedaLoginUser != undefined) {
    personIcon.innerText = "person";
    profile.href = "./userProfile/userProfile.html";
}
else {
    personIcon.innerText = "person_add";
    profile.href = "./loginRegister/login.html";
}

setInterval(bannerSlide, 3000);
