
 let arr=[2,3,5,9,4,6];
function sumArray(arr) {
	sum = 0;
	let resArr = arr.flat(10);
	resArr.forEach(function(cur) {
		sum +=cur; 
	});
	return sum;
}
console.log(sumArray(arr));