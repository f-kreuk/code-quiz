

const startbtn = document.getElementById('start-btn')
const questionsEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerbtnEl = document.getElementById('answer-buttons')


//Using let, so these variables can be reassigned later
let randomQuestions, currentQuestion


// When you click the start button, the startQuiz function runs
startbtn.addEventListener('click',startQuiz)



function startQuiz() {
//console.log('Started')
//hides the start button after it is selected
startbtn.classList.add('hide')
//this sorts the questions in the array randomly
randomQuestions = questions.sort(() => Math.random() - .5)
currentQuestion = 0
//calls the nextQuestion function
nextQuestion()
}

function nextQuestion() {
    showQuestion(randomQuestions[currentQuestion])
}

function showQuestion(question) {
    questionEl.innerText = question.question
}

function answerQuestion() {

}

const questions = [
    {
        question: 'What language best describes Javascript?',
        answers: [
            { text: 'Scripting language', correct: true},
            { text: 'Assembly language', correct: true},
            { text: 'Compiled language', correct: true},
            { text: 'None of the above', correct: true},
        ]
    },

]