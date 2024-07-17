let array = [
    {
        id: 1,
        fname: "jay",
        city: "surat"
    },
    {
        id: 2,
        fname: "raj",
        city: "baroda"
    },
    {
        id: 3,
        fname: "deep",
        city: "Bombay"
    }
];

setdata.onclick = () => {
    localStorage.setItem("person", JSON.stringify(array));
    console.log("data stored");

}

getdata.onclick = () => {
    let data = JSON.parse(localStorage.getItem("person"));
    let table = document.getElementById("tbl");
    for(let i = 0; i < data.length; i++){
        let row = `<tr>
            <td>${data[i].id}</td>
            <td>${data[i].fname}</td>
            <td>${data[i].city}</td>
        </tr>`
        table.innerHTML += row;
    }
    console.log(data);
}