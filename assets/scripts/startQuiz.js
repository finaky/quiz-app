const startQuizButton = document.querySelector('.start-quiz');

const startQuiz = () => {
    window.location = "/assets/pages/quiz-page.html";
}

startQuizButton.onclick = startQuiz;