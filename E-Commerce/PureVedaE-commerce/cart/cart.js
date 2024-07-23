let pureVedaCart;
let tbody = document.getElementById("tbody");
let checkOut = document.getElementById("checkOut");
let subTotal;

function displayCart() {
    tbody.innerHTML = "";
    pureVedaCart = JSON.parse(localStorage.getItem("pureVedaCart"));
    subTotal = 0;
    pureVedaCart.forEach(product => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td class="image" rowspan="2"><img src="${product.image}" alt="product"></td>
            <td class="title" colspan="3">${product.title}</td>
            <td class="columnBtn" rowspan="2"><button class=deleteCart onclick=deleteCartProduct(${product.id})>Delete</button></td>`;
        tbody.appendChild(tr);

        let tr2 = document.createElement("tr");
        tr2.innerHTML = `
                <td><b>Price: ${product.price}</td>
                <td><b>Quantity:${product.quantity}
                <button class="quantityBtn" onclick=removeProductQuantity(${product.id})>-<button>
                    <button class="quantityBtn" onclick=addProductQuantity(${product.id})>+<button></td>
                <td><b>Total: ${product.price * product.quantity}</td>`;
        tbody.appendChild(tr2);
        subTotal += product.price * product.quantity;

    });
    document.getElementById("subTotal").textContent = `Sub Total : MRP Rs. ${subTotal} (incl. of all taxes)`;
}


function addProductQuantity(i) {
    let index = pureVedaCart.findIndex(x => x.id == i);
    pureVedaCart[index].quantity += 1;
    localStorage.setItem("pureVedaCart", JSON.stringify(pureVedaCart));
    displayCart();
}

function removeProductQuantity(i) {
    let index = pureVedaCart.findIndex(x => x.id == i);
    if (pureVedaCart[index].quantity == 1) {
        pureVedaCart[index].quantity = 1;
    }
    else {
        pureVedaCart[index].quantity -= 1;
    }
    localStorage.setItem("pureVedaCart", JSON.stringify(pureVedaCart));
    displayCart();
}

function deleteCartProduct(i) {
    let index = pureVedaCart.findIndex(x => x.id == i);
    pureVedaCart.splice(index, 1);
    localStorage.setItem("pureVedaCart", JSON.stringify(pureVedaCart));
    displayCart();
}

function checkOutProduct() {
    if (subTotal === 0) {
        alert("please first add product in cart!!!");
        let login = document.createElement("a");
        login.href = "../product/product.html";
        login.click();
    }
    else {
        alert("your Order Are Placed");
        let pureVedaOrder = JSON.parse(localStorage.getItem("pureVedaOrder"))||[];
        pureVedaCart = JSON.parse(localStorage.getItem("pureVedaCart"));
        
        pureVedaOrder.push(pureVedaCart);
        localStorage.setItem("pureVedaOrder", JSON.stringify(pureVedaOrder));
        pureVedaCart =[];
        localStorage.setItem("pureVedaCart", JSON.stringify(pureVedaCart));
        let login = document.createElement("a");
        login.href = "../index.html";
        login.click();
    }
}

displayCart();
checkOut.addEventListener("click", checkOutProduct);    