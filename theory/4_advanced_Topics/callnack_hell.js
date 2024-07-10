function callback(data, GetNext) {
    setTimeout(() => {
        console.log("data", data);
        if (GetNext) {
            GetNext();
        }
    }, 2000);
}

console.log("call 1--------");
callback(10, () => {
    console.log("call 2-------");
    callback(20, () => {
        console.log("call 3------");
        callback(30, () => {
            console.log("call 4-------");
            callback(40);
        });
    });
});