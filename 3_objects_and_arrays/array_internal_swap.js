//array =[1,2,3,4]
//Output=[2,1,4,3]

function swaparr(a){
    let ar=[];
    for(let i=2; i<=(a.length);i+=2){
        ar.push(a[i-1],a[i-2]);
    }
    return ar;
}
let arr=[1,2,3,4,5,6,7,8];
console.log(swaparr(arr));
