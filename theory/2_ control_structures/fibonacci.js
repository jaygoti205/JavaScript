
function fibo(n){
    if (n == 0) {
        return null;
    }
    if (n == 1) {
        return [0];
    }
    if (n == 2) {
        return [0, 1];
    }
    let arr = fibo(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

console.log(fibo(6));



