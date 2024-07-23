
function headerPart() {
    let header = document.createElement("header");
    header.innerHTML = `
                <div id="logoContainer">
                    <a href="../index.html">
                        <img src="../image/pureVedaLogo.png" alt="PureVeda">
                    </a>
                </div>

                <ul id="navbar">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../product/product.html">Product</a></li>
                </ul>
                <div id="authContainer">
                    <ul id="authentication">
                       <li><a href="../loginRegister/login.html" id="profile">
                                <span class="material-symbols-outlined" id="personIcon">person_add</span>
                            </a></li>
                        <li><a href="../cart/cart.html">
                                <span class="material-symbols-outlined">shopping_cart</span></a>
                        </li>
                    </ul>
                </div>`;
    document.getElementById("upperPart").appendChild(header);
    setIcon();
}

function footerPart() {
    let footer = document.createElement("footer");
    footer.innerHTML = `<div id="menuContent">
                    <h2>Menu controls</h2>
                    <a href="../index.html">Home</a>
                    <a href="../product/product.html">Product</a>
                </div>
                <div id="help">
                    <h2>Need Help?</h2>
                    <a href="#">FAQs</a>
                </div>
                <div id="officeAddress">
                    <h2>Registered Office Address</h2>
                    <p>PureVeda Herbal Private Limited,<br> abc Buildings,Ring Road ,xyz Village,<br>Surat
                        3640015,<br>Gujarat India</p>
                    <p>Tal:044-44455566</p>
                </div>
                <div id="lastLine">
                    <p>&copy; 2024 PureVeda | All Right reserved</p>
                </div>`;
    document.getElementById("lowerPart").appendChild(footer);
}

function setIcon() {
    let pureVedaLoginUser = JSON.parse(localStorage.getItem("pureVedaLoginUser"));
    let profile = document.getElementById("profile");
    let personIcon = document.getElementById("personIcon");

    if (pureVedaLoginUser != null) {
        personIcon.innerText = "person";
        profile.href = "../userProfile/userProfile.html";
    }
    else {
        personIcon.innerText = "person_add";
        profile.href = "../loginRegister/login.html";
    }
}
