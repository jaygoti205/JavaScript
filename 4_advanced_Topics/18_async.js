async function demo(){
    let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p1 Done");
        },5000);
    });

    let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("p2 Done");
        },3000);
    });

    let wait1=await p1;
    console.log(wait1);
    let wait2= await p2;
    console.log(wait2);
}
demo();