console.log("String Method:");

let str = "Hello! Good Morning!";

console.log("Original String: " + str);

console.log("String Length: " + str.length);

console.log("Character at index 6: " + str.charAt(6));

console.log("Last character: " + str.charAt(str.length - 1));

console.log("Uppercase: " + str.toUpperCase());

console.log("Lowercase: " + str.toLowerCase());

console.log("Replace 'Good Morning!' with 'Good Evening!': " + str.replace("Good Morning!", "Good Evening!"));

console.log("Split string by space: " + str.split(" "));

console.log("Substring from index 6 to 11: " + str.substring(6, 11));

console.log("Substr from index 6 to 11: " + str.substr(6, 11));

console.log("Slice from index 6 to 11: " + str.slice(6, 11));

console.log("indexOf 'Good': " + str.indexOf("Good"));

console.log("lastIndexOf 'Good': " + str.lastIndexOf("Good"));

console.log("Search for 'Good' in the string: " + str.search("Good"));

console.log("includes 'Good': " + str.includes("Good"));

console.log("endsWith 'ing!': " + str.endsWith("ing!"));

console.log("startsWith 'Hello': " + str.startsWith("Hello"));

console.log("Trim leading and trailing spaces: " + str.trim());

console.log("Repeat the string 3 times: " + str.repeat(3));

console.log("Value of  string:" + str.valueOf()); // Returns a string representation of the object



