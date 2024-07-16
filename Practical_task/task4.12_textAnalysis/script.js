let totalWord = document.getElementById('totalWord');
let avgLength = document.getElementById('averageLength');
let repeatHeading=document.getElementById('repeatHeading');
let commonWords = document.getElementById('repeatedWord');


function analyzeText() {

    let str = document.getElementById('textInput').value.trim();
    let words = str.toLowerCase().match(/\b\w+\b/g);

    let totalWords = words ? words.length : 0;
    totalWord.textContent = `Total Words: ${totalWords}`;

    let length = words ? words.reduce((acc, word) => acc + word.length, 0) : 0;
    let averageLength = totalWords > 0 ? (length / totalWords).toFixed(2) : 0;
    avgLength.textContent = `Average Length of the words: ${Math.round(averageLength)}`;


    repeatedWord(words);
   
}


function repeatedWord(words){

    let wordFrequency = {};
    if (words) {
        words.forEach(word => {
            if (word in wordFrequency) {
                wordFrequency[word]++;
            } else {
                wordFrequency[word] = 1;
            }
        });
    }

    let sortedWords = [];
    for (let word in wordFrequency) {
        sortedWords.push([word, wordFrequency[word]]);
    }

    sortedWords.sort((a, b) => b[1] - a[1]);
    repeatHeading.textContent='Repeated Words:';
    
    sortedWords.forEach(item => {
        if (item[1] != 1) {
            let p = document.createElement('p');
            p.textContent = `${item[0]} (${item[1]})`;
            commonWords.appendChild(p);
        }
    });
}










