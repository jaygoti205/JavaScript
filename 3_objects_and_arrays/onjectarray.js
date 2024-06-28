let arrobj = [
    { name: "jay", age: 21 },
    { name: "deep", age: 22 },
    { name: "raj", age: 25 },
    { name: "vijay", age: 22 }
];
// all person age in +1 ising map
console.log("arrobj.map(a=>a.age+1)", arrobj.map(a => a.age + 1));

console.log("arrobj.filter(arr=>arr.age==22):=", arrobj.filter(arr => arr.age == 22));

console.log("arrobj.findIndex(arr => arr.age == 22):=", arrobj.findIndex(arr => arr.age == 22));
// console.log("arrobj.indexOf(arr => arr.age == 22):", arrobj.indexOf(age(22)));
let edit = arrobj.map(a => a.age + 1);

arrobj[arrobj.findIndex(arr => arr.age == 22)].age = arrobj[arrobj.findIndex(arr => arr.age == 22)].age + 20;
console.log(arrobj);


let red = arrobj.reduce((arr, obj) => {
    return arr + obj.age;
},0);
console.log(red);

