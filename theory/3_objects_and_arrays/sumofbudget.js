let budget = [
    { name: "jay", bdg: 21000 },
    { name: "deep", bdg: 23000 },
    { name: "raj", bdg: 25000 },
    { name: "sujan", bdg: 22000 }
];

let sum_budget = budget.reduce((ans, obj) => {
    return ans + obj.bdg;
}, 0);

console.log("Sum of Budget:", sum_budget);
