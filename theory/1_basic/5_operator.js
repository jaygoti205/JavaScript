console.log("Operators:1.Arithmetic 2.Assignment 3.Comparison 4.Logical 5.BItwise 6.Special");
console.log("======================================");
let x = 10;
let y = 5;
console.log("x =", x, " y =", y);
console.log("==============");

console.log("Arithmetic Operators: + - * / % ++ -- **");
console.log("Addition(x + y): ", x + y);
console.log("Subtraction(x -y): ", x - y);
console.log("Multiplication(x * y): ", x * y);
console.log("Division(x / y): ", x / y);
console.log("Modulus(x % y): ", x % y);
console.log("Increment(++x): ", ++x);
console.log("Decrement(--x): ", --x);
console.log("Exponentiation(x ** y): ", x ** y);

console.log("==================================================");

console.log("Assignment Operators: = += -= *= /= %= **=");
let a = 5;
let b = 2;
let ans;
console.log("A = ", a, "  B = ", b);
console.log("===============");
a += b;
console.log("value of A after(A += B) :", a);
a -= b;
console.log("value of A after(A -= B) :", a);
a *= b;
console.log("value of A after(A *= B) :", a);
a /= b;
console.log("value of A after(A /= B) :", a);
a %= b;
console.log("value of A after(A %= B) :", a);

console.log("==================================================");

console.log("Comparison Operators: == != > < >= <=");
console.log("X =", x, " Y =", y);
console.log("===================");
console.log("X == Y: ", x == y);
console.log("X === Y: ", x === y);
console.log("X!= Y: ", x != y);
console.log("Y > Y: ", x > y);
console.log("X < Y: ", x < y);
console.log("X >= Y: ", x >= y);
console.log("X <= Y: ", x <= y);
console.log("==================================================");

console.log("Logical Operators: && ||! (NOT)");
console.log("X =", x, " Y =", y);
console.log("===================");
console.log("X == Y && X > Y : ", x == y && x > y);
console.log("X == Y || X > Y : ",  x == y || x > y);
console.log("!(X==Y): ",!(x==y));
console.log("==================================================");

console.log("Bitwise Operators: & | ^ ~ << >>");
console.log("X =", x, " Y =", y);
console.log("===================");
console.log("X & Y: ", x & y);
console.log("X | Y: ", x | y);
console.log("X ^ Y: ", x ^ y);
console.log("~X: ", ~x);
console.log("X << 1: ", x << 1);
console.log("X >> 1: ", x >> 1);

console.log("==================================================");

console.log("Special Operators: ? : ");
let boolResult = (x > y)? true : false;
let result = (x > y) ? x : y;
console.log("Condition (x > y) Result:", boolResult);
console.log("(x > y) ? x : y =", result);