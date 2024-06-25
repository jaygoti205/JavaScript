setTimeout(() => {
    console.log("settime");
}, 0);

console.log("log");


let p1 = new Promise((resolve, reject) => {
        resolve('Promise 1 resolved');
});

p1.then((response)=> console.log(response));