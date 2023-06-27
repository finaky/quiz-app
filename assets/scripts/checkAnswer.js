const questions = {
    "To jest przykładowy tekst, który się pojawi!!!": [
        "Zgadza się",
        "Nie zgadza się",
        "Nie wiadomo, czy się zgadza"
    ],
    "To jest przykładowy tekst, który się pojawi!": [
        "Odpowiedź 1",
        "Odpowiedź 2",
        "Odpowiedź 3"
    ],

    "test": [
        "test"
    ]
};

const questionTitle = document.querySelector(".question-title");
const questionBox = document.querySelector(".quiz-box__questions");

let currentQuestion = 0;

const start = () => {
    setQuestion(currentQuestion);
}

const setQuestion = (questionIndex) => {
    const questionKey = Object.keys(questions);
    const question = questionKey[questionIndex];
    const answers = questions[question];

    if(question === null || answers === null) 
        return;

    questionTitle.innerHTML = question;

    answers.forEach((element, index) => {
        questionBox.innerHTML += `
        <article>
            <input type="checkbox" id="answer-${index}">
            <label for="answer-1">${element} ${index}</label>
        </article>
        `;
    });
}

start();