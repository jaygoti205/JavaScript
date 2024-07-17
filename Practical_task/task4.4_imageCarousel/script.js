let img = ["https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByZXNlbnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJlc2VudGF0aW9ufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1508995561846-e758be1cf510?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZXl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1514897575457-c4db467cf78e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vb258ZW58MHx8MHx8fDA%3D"
];

let imgShow = document.getElementById("img-container");
let previousBtn = document.getElementById("btnPrevious");
let nextBtn = document.getElementById("btnNext");
let image = document.getElementById("image");

let i = 0;

function nextImage() {
    if (i == img.length) {
        i = 0;
    }
    image.setAttribute("src", img[i]);
    i++;
}

function previousImage() {
    if (i < 0) {
        i = img.length - 1;
    }
    image.setAttribute("src", img[i]);
    i--;
}

function cycle() {
    setInterval(() => {
        nextImage();
    }, 3000);
}

nextImage();
cycle();
nextBtn.addEventListener("click", nextImage);
previousBtn.addEventListener("click", previousImage);





