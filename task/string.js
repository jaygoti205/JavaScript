function analyzeText() {
  let text = document.getElementById('textInput').value.trim();
  let total_char = text.length;
  let total_word = words(text);
  let wordFrequency = frequency(text);
  console.log("Analysis Results:");
  console.log("Total Character:", total_char);
  console.log("TotalWord:", total_word);
  console.log("Word Frequency:");
  Object.keys(wordFrequency).forEach(function (word) {
    console.log(`${word}: ${wordFrequency[word]}`);
  });
}

//count total words in string
function words(text) {
  return text.split("").length;
}

function frequency(text) {
  const wordFrequency = {};
  const words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (wordFrequency[word]) {
      wordFrequency[word]++;
    } else {
      wordFrequency[word] = 1;
    }
  }
  return wordFrequency;
}