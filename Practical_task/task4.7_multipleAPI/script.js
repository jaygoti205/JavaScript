let urlUser = "https://dummyjson.com/users/15";
let urlCart = "https://dummyjson.com/carts/user/15";
let urlProduct = "https://dummyjson.com/products?limit=10&skip=10";

let display = document.getElementById("displayProduct");
let allProductBtn = document.getElementById("allProduct");
let cartProductBtn = document.getElementById("cartProduct");

const p1 = fetch(urlUser).then(response => response.json());
const p2 = fetch(urlCart).then(response => response.json());
const p3 = fetch(urlProduct).then(response => response.json());

function getData() {
    Promise.all([p1, p2, p3])
        .then(([data1, data2, data3]) => {
            localStorage.setItem("user", JSON.stringify(data1));
            localStorage.setItem("cart", JSON.stringify(data2));
            localStorage.setItem("product", JSON.stringify(data3));
        })
        .catch(error => {
            console.error(error);
        });
}


function setUser() {
    let user = JSON.parse(localStorage.getItem("user"));
    let userImage = document.getElementById("userImage");

    document.getElementById("userName").innerText = user.username;
    document.getElementById("fullName").innerText = user.firstName + " " + user.lastName;
    userImage.setAttribute("src", user.image)
    document.getElementById("address").innerText = user.address.address + " , " + user.address.city + " , " + user.address.state + " , " + user.address.postalCode;
}

function allProductList() {
    display.innerHTML = "";
    let products = JSON.parse(localStorage.getItem("product"));
    products = products.products;

    products.forEach(product => {
        const div = document.createElement("div");
        div.setAttribute("class", "singleProduct");
        div.innerHTML = `<img src="${product.images[0]}" alt="product" class="productImage">
                        <label for=product>${product.title}</label>
                        <h3 class="price">Price:${product.price}</h3>
                        <p id="description">${product.description}</p>`;
        display.appendChild(div);
    });
}

function cartProductsList() {
    display.innerHTML = "";
    let carts = JSON.parse(localStorage.getItem("cart"));
    carts = carts.carts[0].products;

    carts.forEach(cart => {
        const div = document.createElement("div");
        div.setAttribute("class", "singleProduct");
        div.innerHTML = `<img src="${cart.thumbnail}" alt="product" class="productImage"><br>
                        <label for=product>${cart.title}</label>
                        <h4 class="price">Price:${cart.price}</h4>
                       <p class="quantity">Quantity:${cart.quantity}</p>
                       <b>Discount Rate:${cart.discountPercentage}%<b>
                       <h3 class="totalAmount">TotalAmount:${cart.discountedTotal}</h3>`;
        display.appendChild(div);
    });
}


getData();
setUser();
allProductList();
allProductBtn.addEventListener("click", allProductList);
cartProductBtn.addEventListener("click", cartProductsList);
