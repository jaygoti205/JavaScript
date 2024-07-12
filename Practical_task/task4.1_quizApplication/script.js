

// let url = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy";

let next = document.getElementById("next");
let submit = document.getElementById("submit");
let questionBox = document.getElementById("questionBox");
let i = 0;
let score = 0;

function que() {
    let option = [];
    option.push(questions[i].incorrect_answers[0], questions[i].correct_answer, questions[i].incorrect_answers[1], questions[i].incorrect_answers[2]);
    option = option.sort();

    questionBox.innerHTML = `<p id="question">${i + 1}) ${questions[i].question}</p><br>
    <input type="radio" class="answer" name="answer" value="${option[0]}">
    <label for="${option[0]}">${option[0]}</label> <br>
    <input type="radio" class="answer" name="answer" value="${option[1]}">
    <label for="${option[1]}">${option[1]}</label><br>
    <input type="radio" class="answer" name="answer" value="${option[2]}">
    <label for="${option[2]}">${option[2]}</label><br>
    <input type="radio" class="answer" name="answer" value="${option[3]}">
    <label for="${option[3]}">${option[3]}</label><br>`
}

function nextQuestion() {
    let k = document.querySelector("input[name = answer]:checked");
    if (k) {
        verification(k.value);
        i++;
        if (i < 10) {
            que();
            if (i == 9) {
                next.disabled = true;
                submit.disabled = false;
            }
        }
    }
}

function finalSubmit() {
    nextQuestion();
    document.getElementById("score").innerText = "";
    submit.disabled = true;
    
    questionBox.innerHTML = ` <div id="result">
                                <h1>Result</h1>
                                <p>${score} /${i}<p>
                            </div>`;

    

}

function verification(test) {
    if (test === questions[i].correct_answer) {
        score++;
    }
    document.getElementById("score").innerHTML = "score:<span>" + score + "/" + (i + 1) + "</span>";
}

next.addEventListener("click", nextQuestion);
submit.addEventListener("click", finalSubmit)

que();


