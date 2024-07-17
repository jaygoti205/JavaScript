console.log("JSON (JavaScript Object Notation)");

// Creating a simple JSON object

let fruit={
    name: "Apple",
    color: "Red",
};

console.log("Show the  JSON string: ", JSON.stringify(fruit));
// Converting JSON object to string
let str = JSON.stringify(fruit);
console.log("Converted String: ", str);

console.log("=============================================================================");

console.log("Show the JSON object: ", JSON.parse(str));
// Converting JSON string to object
let object = JSON.parse(str);
console.log("Converted Object: ", object);
