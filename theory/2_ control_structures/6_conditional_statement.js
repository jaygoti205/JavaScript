console.log("conditional statements");
console.log("==========================");
console.log("Grading process based on student Percentage.");

console.log("======Using if-else statement============");

let percentage = 75;
console.log("Percentage:", percentage);

if (percentage >= 90) {
    console.log("Grade: A+");
}
else if (percentage >= 80) {
    console.log("Grade: A");
}
else if (percentage >= 70) {
    console.log("Grade: B");
} 
else if (percentage >= 60) {
    console.log("Grade: C");
} 
else if (percentage >= 50) {
    console.log("Grade: D");
}
else {
    console.log("Grade: E");
}

console.log("======Using switch-case statement============");
console.log("Percentage:", percentage);
switch (Math.floor(percentage / 10)) {
   
    case 9:
        console.log("Grade: A+");
        break;
    case 8:
        console.log("Grade: A");
        break;
    case 7:
        console.log("Grade: B");
        break;
    case 6:
        console.log("Grade: C");
        break;
    case 5:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: E");
        break;
}
