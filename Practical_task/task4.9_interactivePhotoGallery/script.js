let images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJq_jPcWuPsp1GKxSZI4xoXrqViu9R41iw-9iMVmiWTqEAeKY2mk_FSsxfh3WrEAaiMo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtD7UVzkVKWX6qotFwJP6AqsxMJHjvDEmVn_4qB_IpZHqEOM-hn5q5JiZvy1pA8OY2r2k&usqp=CAU",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-photo.jpg?w=600&quality=80",
    "https://images.unsplash.com/photo-1617635277889-df22350f81a0?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    "https://static.vecteezy.com/system/resources/previews/013/626/933/non_2x/mountain-valley-during-sunrise-natural-summer-landscape-free-photo.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
    "https://images.squarespace-cdn.com/content/v1/61242b9f66d9d2549f3b642e/d09969c6-c343-4112-8af0-277370329f7a/Therapy+Alberta%3B+Online+Therapy+British+Columbia.jpg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/pure-nature-landscape-single-tree-in-green-field-free-photo.jpg?w=600&quality=80"
]
let imgContainer = document.getElementById("imageContainer");
let urlText = document.getElementById("urlText");
let addBtn = document.getElementById("addBtn");
let deleteBtn = document.getElementsByClassName("delete")[0];
let fullScreen = document.getElementById("fullScreen");
let fullImage = document.getElementById("img");
let cancelBtn = document.getElementsByClassName("cancel")[0];


display();
function display() {
    for (let i = 0; i < images.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "singleImage")
        div.innerHTML = `<button class="delete" id="deleteBtn" onClick=deleteImage(this)>
                        <b class="material-icons">delete</b></button>
                        <img src=${images[i]} class="image" alt="Wrong URL" onClick=zoomImage(this)>`;
        imgContainer.appendChild(div);
    }
}

function addImage() {
    imgContainer.innerHTML = "";
    urlText = urlText.value;
    if (urlText == "" || urlText == " ") {
        display();
    }
    else {
        images.push(urlText);
        display();
    }

}

function deleteImage(n) {
    imgContainer.innerHTML = "";
    images.splice(n, 1);
    display();
}

function zoomImage(n) {
    fullScreen.style.display = "block";
    fullImage.src = n.src;
}

cancelBtn.onclick = function () {
    fullScreen.style.display = "none";
}

addBtn.addEventListener("click", addImage);