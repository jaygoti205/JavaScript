console.log("looping statements");
console.log("==========================");

console.log("Printing numbers from 1 to 5 using for loop");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("===============");

console.log("Printing pattern using while loop");
let row = 5;

while (row > 0) {
    let column = "";
    
    for (let i = 1; i <= row; i++) {
        column += "* ";
    }
    console.log(column);
    row--;
}
console.log("===============");

console.log("Printing numbers from 5 to 0 using do while loop");
let count = 0;

do {
    console.log(count);
    count++;
} while (count <= 5);
