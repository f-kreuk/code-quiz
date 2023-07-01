const startbtn = document.getElementById('start-btn');
const nextbtn = document.getElementById('next-btn');
const questionsEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerbtnEl = document.getElementById('answer-buttons');
const landingEl = document.getElementById('landing-page');
const helptextEl = document.getElementById('help-text');

//Using let, so these variables can be reassigned later
let randomQuestions, currentQuestion
let score = 0


// When you click the start button, the startQuiz function runs
startbtn.addEventListener('click',startQuiz)


//---------------------------------------------------------------------//
function startQuiz() {
//console.log('Started')
//hides the start button after it is selected
startbtn.classList.add('hide')
//hides the landing-page after the start button selected
landingEl.classList.add('hide')
//this sorts the questions in the array randomly
randomQuestions = questions.sort(() => Math.random() - .5)
//sets the question to first in array
currentQuestion = 0
//removes the hide class from the questions
questionsEl.classList.remove('hide')
//calls the nextQuestion function
nextQuestion()
}
//---------------------------------------------------------------------//
//calls reset function and show question function
function nextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestion])
}

function showQuestion(question) {
    //changes question text to the question in our array
    questionEl.innerText = question.question
    //changes helptext text to the helptext in our array
    helptextEl.innerText = question.helptext
    //below creates a button for each answer within the current question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        //adds button class to created elements
        button.classList.add('button')
       //adds data attribute onto button element for correct answers
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        //launches the answerQuestion function when the newly created button is clicked
        button.addEventListener('click', answerQuestion)
        answerbtnEl.appendChild(button)
    })
}
//hides the next button and removes the answer buttons from screen
function resetState () {
    nextbtn.classList.add('hide')
    while (answerbtnEl.firstChild) {
        answerbtnEl.removeChild 
        (answerbtnEl.firstChild)
    }
}
//---------------------------------------------------------------------//
//Below function checks if the answer selection is correct and assigns 10 points for a correct value
function answerQuestion(e) {
    const answerSelection = e.target;
    const correct = answerSelection.dataset.correct;
    if (correct) {
        var total = score;
        var points = 10;
        console.log(points);
        var text = document.createTextNode('Correct!');
        var child = document.getElementById("help-text");
        child.parentNode.insertBefore(text,child);
            } else {
        score + 0,
        console.log("Incorrect")
        };
        //this makes the next button appear after the selection
        nextbtn.classList.remove('hide')
        //this makes the helptext appear after the selection
        helptextEl.classList.remove('hide');

    }

function setStatusClass(element, correct) {
    clearStatus
}


const questions = [
    {
        question: 'What language best describes Javascript?',
        answers: [
            { text: 'Scripting language', correct: true},
            { text: 'Assembly language', correct: false},
            { text: 'Compiled language', correct: false},
            { text: 'None of the above', correct: false},
        ],
        helptext: 'JavaScript is a client-side and server-side scripting language utilized in conjunction with CSS and HTML to make websites interactive.'
    },

]