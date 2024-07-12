let url = "https://jsonplaceholder.typicode.com/users";
let tblBody = document.getElementById("tblBody");
let btnSearch = document.getElementById("btnSearch")

const getData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    tblBody.innerHTML = "";

    for (i = 0; i < data.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].address.street + " , " + data[i].address.suite + " , " + data[i].address.city}</td>`
        tblBody.appendChild(tr);
    }
}

const search = async () => {
    let uName = document.getElementById("txt").value;
    let response = await fetch(url);
    let data = await response.json();
    tblBody.innerHTML = "";

    for (i = 0; i < data.length; i++) {
        if (data[i].name.includes(uName)) {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${data[i].id}</td>
                            <td>${data[i].name}</td>
                            <td>${data[i].email}</td>
                            <td>${data[i].address.street + " , " + data[i].address.suite + " , " + data[i].address.city}</td>`
            tblBody.appendChild(tr);
        }
    }

}


btnSearch.addEventListener("click", search);
getData();




