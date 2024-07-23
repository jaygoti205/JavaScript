let rightPart = document.getElementById("rightPart");
let allProduct = document.getElementById("allProduct");
let category = document.getElementById("category");
let subCategory = document.getElementById("subCategory");
let budget = document.getElementById("budget");
let apply = document.getElementById("apply");


subCategory.value = "all";
category.value = "all";

let cat = [];
subCategory.disabled = true;
// set all product
data.forEach(product => {
    let div = document.createElement("div");
    div.setAttribute("class", "singleProduct");
    div.innerHTML = `<img src="${product.image}" alt="product image">
                    <p>${product.title.substring(0, 75)}...</p>
                    <h3>Rs.${product.price}</h3>
                    <button class="addCart" onclick=addCartProduct(${product.id})>Add cart</button>`;
    allProduct.appendChild(div);
    cat.push(product.category);
});

// set product category for filter
cat = cat.filter(function (c, pos) {
    return cat.indexOf(c) == pos;
})
category.innerHTML = "<option value='all'>All Product</option>"
cat.forEach(cat => {
    let option = document.createElement("option");
    option.setAttribute("value", cat);
    option.textContent = cat;
    category.appendChild(option);
})



function categoryProduct() {
    let subCat = [];
    // set product sub category for filter
    if (category.value === "all") {
        subCategory.disabled = true;
    }
    else {
        subCategory.disabled = false;

        data.forEach(product => {
            if (product.category === category.value) {
                subCat.push(product.subcategory);
            }
        });

        subCategory.innerHTML = "<option value='all' selected>All Product</option>";

        subCat = subCat.filter(function (cat, pos) {
            return subCat.indexOf(cat) == pos;
        });

        subCat.forEach(subCat => {
            let option = document.createElement("option");
            option.setAttribute("value", subCat);
            option.textContent = subCat;
            subCategory.appendChild(option);
        })
    }

}

function displayProduct(index) {
    let div = document.createElement("div");
    div.setAttribute("class", "singleProduct");
    div.innerHTML = `   <img src="${data[index].image}" alt="product image">
                        <p>${data[index].title.substring(0, 75)}...</p>
                        <h3>Price:${data[index].price}</h3>
                        <button class="addCart" onclick=addCartProduct(${data[index].id})>Add cart</button>`;
    allProduct.appendChild(div);
}

function filterProduct() {
    allProduct.innerHTML = "";
    if (category.value === "all") {
        if (budget.value === "") {
            data.map((product, i) => {
                displayProduct(i);
            });
        } else {
            data.map((product, i) => {
                if (budget.value >= product.price) {
                    displayProduct(i);
                }
            });
        }
    } else {
        data.map((product, i) => {
            if (category.value === product.category && product.subcategory === subCategory.value) {
                if (budget.value === "") {
                    displayProduct(i);
                } else {
                    if (budget.value >= product.price) {
                        displayProduct(i);
                    }
                }
            } else {
                if (category.value === product.category && subCategory.value === "all") {
                    if (budget.value === "") {
                        displayProduct(i);
                    } else {
                        if (budget.value >= product.price) {
                            displayProduct(i);
                        }
                    }
                }
            }
        });
    }
}

function addCartProduct(id) {
    let pureVedaCart = [];
    let pureVedaLoginUser = JSON.parse(localStorage.getItem("pureVedaLoginUser"));
    if (pureVedaLoginUser === null) {
        let login = document.createElement("a");
        login.href = "../loginRegister/login.html";
        login.click();
    }
    else {
        let c = data.findIndex(x => x.id == id);
        pureVedaCart = JSON.parse(localStorage.getItem("pureVedaCart"));
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

category.addEventListener("change", categoryProduct);
apply.addEventListener("click", filterProduct)
categoryProduct();