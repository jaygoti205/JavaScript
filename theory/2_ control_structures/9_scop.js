console.log("Scope");
console.log("===========================");
// Global scope
var globalVar = "Global variable";//Use in global context
function fun_global() {
    console.log(globalVar);
}
fun_global();

// Local scope
function fun_local() {
    var localVar = "Local variable";//Use in local context
    console.log(localVar);
}
fun_local();

//Block scope
if (true) {
    let blockVar = "Block variable";//Use in block context
    console.log(blockVar);
}

//function scope
function functionScope() {
    var functionVar = "Function variable";//Use in function context
    console.log(functionVar);
}
functionScope();

