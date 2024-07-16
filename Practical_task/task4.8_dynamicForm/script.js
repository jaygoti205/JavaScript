let myForm = document.getElementById("myForm");
let add = document.getElementById("add");
let final = document.getElementById("final");
let i = 0;

function addElementBtn() {
    let field = prompt("Enter Type of form elements:");
    let num = parseInt(prompt(`how many number of "${field}" field you went to add:`));
    field = field.toLowerCase();

    if (field == "checkbox" || field == "radio") {
        createRadioCheckbox(field, num);
    }
    else if (field == "button" || field == "submit") {
        createButton(field, num);
    }
    else if (field == "select") {
        createDropDown(field, num);
    }
    else if (field == "textarea") {
        createTextarea(field, num);
    }
    else {
        createInput(field, num);
    }
}

function createRadioCheckbox(type, n) {
    let h = document.createElement("h4");
    h.innerText = prompt(`Heading for ${type}`);
    myForm.appendChild(h)
    for (i = 0; i < n; i++) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = prompt(`Label for "${type}" field ${i + 1} :`);
        label.setAttribute("for", type + label.innerText);
        input.setAttribute("type", type);
        input.setAttribute("value", label.toLowerCase);
        input.setAttribute("name", type + label.innerText);
        myForm.appendChild(input);
        myForm.appendChild(label);
        if (type == "checkbox") {
            let br = document.createElement("br");
            myForm.appendChild(br);
        }
    }
}

function createButton(type, n) {
    let br = document.createElement("br");
    myForm.appendChild(br);
    for (i = 0; i < n; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("value", prompt(`value for ${type}`));
        myForm.appendChild(input);
    }
}

function createDropDown(type, n) {
    for (i = 0; i < n; i++) {
        let label = document.createElement("label");
        label.innerText = prompt(`Label for field "${type}/Drop Down":`);
        let select = document.createElement("select");
        select.setAttribute("name", type + label.innerText);
        let num = prompt(`How many Option You want to Add in Drop Down:`);
        for (let j = 0; j < num; j++) {
            let option = document.createElement("option");
            let text = prompt(`enter value for option ${i + 1}:`);
            option.innerText = text;
            option.setAttribute("value", text.toLowerCase);
            select.appendChild(option);
        }
        myForm.appendChild(label);
        myForm.appendChild(select);
        let br = document.createElement("br");
        myForm.appendChild(br);

    }
}

function createTextarea(type, n) {
    for (i = 0; i < n; i++) {
        let label = document.createElement("label");
        let textArea = document.createElement("textarea");
        let br = document.createElement("br");

        label.innerText = prompt(`Label for "${type}"field ${i + 1} :`);
        label.setAttribute("for", type + label.innerText);
        textArea.setAttribute("name", type + label.innerText);

        myForm.appendChild(label);
        myForm.appendChild(textArea);
        myForm.appendChild(br);
    }
}

function createInput(type, n) {
    for (i = 0; i < n; i++) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        let br = document.createElement("br");
        label.innerText = prompt(`Label for "${type}" field ${i + 1} :`);
        label.setAttribute("for", type + label.innerText);
        input.setAttribute("type", type);
        input.setAttribute("name", type + label.innerText);
        myForm.appendChild(label);
        myForm.appendChild(input);
        myForm.appendChild(br);
    }
}


function finalForm() {
    document.getElementById("editContainer").remove();
}

add.addEventListener("click", addElementBtn);
final.addEventListener("click", finalForm);

addElementBtn();