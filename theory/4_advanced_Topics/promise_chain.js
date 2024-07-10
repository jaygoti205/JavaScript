console.log("Promise chain:");
function demo(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data:",data);
            resolve("Done");
        }, 2000);
    });
}

demo(1).then((res) => {
    console.log(res);
    demo(2).then((res)=>{
        console.log(res);
        demo(3).then((res)=>{
            console.log(res);
        });
    });
});