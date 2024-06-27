console.log("Example Promises");

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 2000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 1000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 rejected');
    }, 3000);
});

p1.then((Response) => console.log(Response)).catch((error) => console.log(error));
p2.then((response) => console.log(response)).catch((error) => console.log(error));
p3.then((resp) => console.log(resp)).catch((error) => console.log(error));

let p_all = Promise.all([p1, p2]);//if any one promise are reject then output is not show
p_all.then((response)=>{console.log("Promise 1 and promise 2 using Promise.all([p1, p2]):",response)}).catch((err)=>console.log(err));

