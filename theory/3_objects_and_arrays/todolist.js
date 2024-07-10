let list = [
    { Id: 1, Task: "abcdef", Status: 0 }, //status=0 for task incomplete
    { Id: 2, Task: "bcdge", Status: 1 }, //status=1 for task complete
    { Id: 3, Task: "xyzas", Status: 0 }
];
console.log("Original list:",list);
//Add in list
let id = 4;
let tsk = "bhxacvsdv";
let stus = 0;
list.push({ Id: id, Task: tsk, Status: stus });
console.log("After Insert task:",list);

//Delete list item
// let dindex = list.findIndex(x => x.Id == 3);
list.splice(list.findIndex(x => x.Id == 3),1);
console.log("After delete task:",list);

//Edit list item
list.splice(list.findIndex(x => x.Id == 2),1,{Id:2,Task:"task",Status:1});
console.log("After editing a task:",list);

//Display condition of task status 
console.log("Incomplete Task:",list.filter(x => x.Status == 0));
console.log("Complete Task:",list.filter(x => x.Status == 1));