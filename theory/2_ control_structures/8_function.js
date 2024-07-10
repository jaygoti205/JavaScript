console.log('Functions');
console.log('==========================');
console.log('Simple Function example:');
function demo() {
    console.log('Hello,this is my demo function.');
};
demo();          //calling the demo function

//Function Expression
console.log('==========================');
console.log('Function Expression example:');
var fun_expression = function () {
    console.log('Hello, this is function expression.');
};
fun_expression();  // calling the function expression

//Arrow Function
console.log('==========================');
console.log('Arrow Function example:');
var arrow_function = () => {
    console.log('Hello, this is arrow function.');
};
arrow_function();    // calling the arrow function

//Function with Arguments
console.log('==========================');
console.log('Function with Arguments example:');

function sum(a, b) {
    return a + b;
}

console.log("Sum of 5 and 6 :", sum(5, 6)); // calling the function with arguments

