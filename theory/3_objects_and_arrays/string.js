var str = prompt("Enter the string which end with script:");

let len = str.length;
if(len>=6){
    if(str.substring(len-6)=="script"){
        console.log(str);
    }
}

