let age = [22, 88, 15];

let validation = checking(age, (a) => a >= 18);

function checking(num, callback) {
    let arr=[];
    for (let abc of num) {
        if (callback(abc)) {
            console.log("valid user",abc);
            arr.push(abc)
        }
    }
    return arr;
}
console.log(validation);