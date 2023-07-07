const questions = [ 
    {
        question: 'Кто из них самый старый?',
        answers: [
            {text: 'Рома', correct: false},
            {text: 'Муе', correct: false},
            {text: 'Виктор', correct: false},
            {text: 'Бирбо', correct: true}
        ]
    },

    {
        question: 'Кто из них самый высокий?',
        answers: [
            {text: 'Виктор', correct: false},
            {text: 'Муе', correct: false},
            {text: 'Бирбо', correct: false},
            {text: 'Рома', correct: true},
        ]
    },

    {
        question: 'Кто из них самый адекватный?',
        answers: [
            {text: 'Бирбо', correct: false},
            {text: 'Рома', correct: false},
            {text: 'Муе', correct: false},
            {text: 'Виктор', correct: true},
        ]
    },

    {
        question: 'Кто из них самый Добрый?',
        answers: [
            {text: 'Бирбо', correct: false},
            {text: 'Рома', correct: true},
            {text: 'Муе', correct: false},
            {text: 'Виктор', correct: false},
        ]
    },

    {
        question: 'Кто из них самый душный?',
        answers: [
            {text: 'Бирбо', correct: true},
            {text: 'Рома', correct: false},
            {text: 'Муе', correct: false},
            {text: 'Виктор', correct: false},
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Далее";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });

}

function resetState() {
    nextButton.style.display = 'none';
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true
    });

    nextButton.style.display = 'block'

}

function showScore() {
    resetState();
    questionElement.innerHTML = `Ты ответил на ${score} из ${questions.length} вопросов!`;
    nextButton.innerHTML = 'Попробуем ещё раз?';
    nextButton.style.display = 'block'
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

