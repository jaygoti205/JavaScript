let person = { name: "jay", age: 22 };
console.log(person);
person.age = 21;
person.name = "raj";
console.log(person);
person = { name: "raj", age: 30 };
console.log(person);


const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

console.log(txt);


function myFunction(value) {
    txt += value;
}