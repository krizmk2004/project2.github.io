const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "valentines day?",
        answers: [
            { text: "feb 1", correct: false },
            { text: "feb 11", correct: false },
            { text: "feb 10", correct: true },
            { text: "feb 14", correct: false }
        ]
    },
    
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    questionElement.innerText = question.question;
    answersElement.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resultElement = document.getElementById('result');
    resultElement.innerText = `You scored ${score} out of ${questions.length}`;
}

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
});

document.getElementById('restart-btn').addEventListener('click', startQuiz);

// Initialize quiz
startQuiz();