let a=[1, 2, 3, 4, 5];
console.log(a);

//add element at first position
a.unshift(9,8);//add at first position
console.log("After the unshift(9,8):",a);

//remove element at first position
let first_deleted=a.shift();
console.log("deleted element using shift",first_deleted);
console.log(a);


//add element at last position
a.push(6,7);
console.log("After the push(6,7)",a);

//remove element at last position

let last_deleted=a.pop();
console.log("deleted element using pop",last_deleted);
console.log(a);

//sort the array

a.sort();
console.log("Sorted array",a);

//Edit array

a.splice(6,0,7);
console.log("After Add 7 at position 6:",a);

//slice Array

let array_slice=a.slice(3,5);
console.log("slice of array(1,5):",array_slice);

