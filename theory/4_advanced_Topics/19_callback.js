console.log('Example of Callback');
function callback(num, func) {
    for (var i = 0; i < num; i++) {
        func();
    }
}
callback(4, function () { console.log("Hello"); });
