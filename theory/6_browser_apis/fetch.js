let url = "https://jsonplaceholder.org/comments";
let para = document.getElementById("para");
let btn = document.getElementById("get");

// using async/await

const getdata = async () => {
    
    console.log("getting data....");
    let responce = await fetch(url);
    console.log(responce);

    let data = await responce.json();
    para.innerText = "comment 2 :" + data[1].comment;
    console.log(data);
}
btn.addEventListener("click", getdata);




//Promise chain

// function get() {
//     fetch(url).then((response) => {
//         console.log("getting data....");
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         para.innerText = "comment 2 :" + data[1].comment;
//     })

// }
// btn.addEventListener("click", get);