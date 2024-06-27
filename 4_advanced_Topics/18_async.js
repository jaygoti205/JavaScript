console.log("Example Async/Await:");
function demo(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", data);
            resolve("done");
        }, 2000);
    });
}

function demo2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", data);
            resolve("done");
        }, 2000);
    });
}
// async function abc(){
//     await demo(1);
//     await demo(2);
// }
// abc();


//Self Invoking / Using IIFE(Immediately Invoked Function Expression)
(async function () {
    await demo(1)
        .then((res) => {
            console.log(res);
        });
    await demo2(2)
        .then((res) => {
            console.log(res);
        });;
    await demo(3)
    
    
    
    ;
})();