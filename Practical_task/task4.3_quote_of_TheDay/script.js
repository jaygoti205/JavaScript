

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let addNew = document.getElementById("addNew");

async function newQuote() {
    try {

        let responce = await fetch('https://dummyjson.com/quotes');
        let data = await responce.json();
        data = data.quotes;

        let num = Math.round(Math.random() * (30 - 1) + 1);
        quote.innerHTML = `<span>"</span>`+data[num].quote+`<span>"</span>`;
        author.innerHTML = `<span>-</span>`+data[num].author;
    }
    catch (error) {
        console.log('Error fetching data:', error);
    }

}
newQuote();

addNew.addEventListener("click", newQuote);