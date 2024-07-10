
console.log("Array and String Methods");
console.log("============");
console.log("Array Method:")

let arr = [1, 2, 3];

console.log("Original Array: ", arr);
console.log("Length of Array: ", arr.length);

// push() method 

arr.push(4, 5);
console.log("Array after push(): ", arr);

// pop() method 

let pop_arr = arr.pop();
console.log("Popped Element: ", pop_arr);
console.log("Array after pop(): ", arr);

// unshift() method 

let unshift_arr = arr.unshift(-1, 0);
console.log("Unshift Array length: ", unshift_arr);
console.log("Array after unshift(): ", arr);

// shift() method 

let shiftedElement = arr.shift();
console.log("Shifted Element: ", shiftedElement);
console.log("Array after shift(): ", arr);

// at() method 

console.log("Element at index 2: ", arr.at(2));

// indexOf() method 

console.log("Index of 3: ", arr.indexOf(3));

// includes() method 

console.log("Array includes 3: ", arr.includes(3));

//reverse() method 

arr.reverse();
console.log("Array after reversing: ", arr);

//sort() method
let sort_arr = arr.sort();
console.log("Array after sorting in ascending order: ", sort_arr);


//join() method 

let str_arr = arr.join();
console.log("Array joining like string: ", str_arr);


//flat() method 

let flat_arr = arr.flat();
console.log("Array after flattening: ", flat_arr);



//concat() method 

let arr2 = ["a", "b", "c"];
let merged_arr = arr.concat(arr2);

console.log("Merged Array = arr1.concat(arr2): ", merged_arr);


console.log("arr is Array:", Array.isArray(arr)); // true

console.log("Array value:", Array.from(arr)); // 1,2,3,4


//map() method 
let doubled_arr = arr.map(doubled);// Function to double the value

function doubled(num) {
    return num * 2;
}
console.log("Array after (map)doubling: ", doubled_arr);

// filter() method 
function arr_filter(num) {
    return num > 2;
}
let filtered_arr = arr.filter(arr_filter); // Function to filter out numbers less than 5

console.log("Array after filtering: ", filtered_arr)

//   every() method 

console.log("Array every element is greater than 3: ", arr.every(a => a > 3));

//   some() method on

console.log("Array some element is equal to 3: ", arr.some(a => a == 3));


//find() and findIndex() method 
function check(value) {
    return value > 2;
}
let find = arr.find(check);
let findIndex = arr.findIndex(check);

console.log("First index of element greater than 2: ", findIndex);
console.log("First element greater than 2 is: ", find);

//slice() method 

let slice_arr = arr.slice(1, 3);
console.log("Array after slicing: ", slice_arr);

// splice() method 

arr.splice(1, 0, 7, 8);
console.log("Array after splice: ", arr);

//reduce() method 
let arr_reduce = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("Array reduce:",arr_reduce);

//reduceRight() method
let arr_reduce_right = arr.reduceRight(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("Array Reduce Right:", arr_reduce_right);


//fill() method 
arr.fill(0);
console.log("Array after filling with 0: ", arr);