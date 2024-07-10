document.querySelector("#heading").style.backgroundColor = "lightgray";

let p2 = document.getElementById("p2");
let btn = document.getElementById("btn");

var limit = 0;

btn.addEventListener("click", () => {
    console.log(limit + " - log1");
    limit++;
    btn.innerText = "Clicked (" + limit + ") time";

    if (limit == 5) {
        btn.removeEventListener("click", fun_callback);
        p2.innerText = 'btn.removeEventListener("click",fun_callback);';
    }
});

btn.addEventListener("click", () => {
    console.log("log2");
});

const fun_callback = () => {
    console.log("log3");
}

btn.addEventListener("click", fun_callback);

