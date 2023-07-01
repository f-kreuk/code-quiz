const startbtn = document.getElementById('start-btn');
const nextbtn = document.getElementById('next-btn');
const questionsEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerbtnEl = document.getElementById('answer-buttons');
const landingEl = document.getElementById('landing-page');
const helptextEl = document.getElementById('help-text');

//Using let, so these variables can be reassigned later
let randomQuestions, currentQuestion;
let score = 0;
let alreadyAnswered = false;


// When you click the start button, the startQuiz function runs
startbtn.addEventListener('click',startQuiz)
nextbtn.addEventListener('click', () => {
    currentQuestion++
})


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
    nextbtn.classList.add('hide');
    while (answerbtnEl.firstChild) {
        answerbtnEl.removeChild 
        (answerbtnEl.firstChild)
    };
    alreadyAnswered = false;
}
//---------------------------------------------------------------------//
//Below function checks if the answer selection is correct and assigns 10 points for a correct value

function answerQuestion(e) {    
    const answerSelection = e.target;
    const correct = answerSelection.dataset.correct;
    alreadyAnswered = true;
    if (correct) {
        var total = score;
        var points = 10;
        console.log(points);
        //below adds Correct before the helptext html
        var text = document.createTextNode('Correct');
        var child = document.getElementById("help-text");
        child.parentNode.insertBefore(text,child);
            } else {
            var total = score;
            var points = 0;
            //below adds Incorrect before the helptext html
            var text = document.createTextNode('Incorrect');
            var child = document.getElementById("help-text");
            child.parentNode.insertBefore(text,child);
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
    {
        question: 'What property is triggered in response to JS errors?',
        answers: [
            { text: 'onclick', correct: false},
            { text: 'onmessage', correct: false},
            { text: 'onexception', correct: false},
            { text: 'onerror', correct: true},
        ],
        helptext: 'The onerror property is triggered when JavaScript errors occur.'
    },
    {
        question: 'What does A === B refer to?',
        answers: [
            { text: 'A and B are equal in value', correct: false},
            { text: 'A and B are equal in value and type', correct: true},
            { text: 'A and B are equal in value, type, and reference address', correct: false},
            { text: 'None of the above', correct: false},
        ],
        helptext: 'The "===" operator is a strict comparison operator, which is only true if the operands are the same type and the values are the same.'
    },
    {
        question: 'Which operator is used to test if a particular property exists or not?',
        answers: [
            { text: 'in', correct: true},
            { text: 'exist', correct: false},
            { text: 'within', correct: false},
            { text: 'exist', correct: false},
        ],
        helptext: 'Often utilized in looping statements to traverse objects or arrays, the "in" operator tests if an of-interest property exists.'
    },
    {
        question: 'What are the three manipulations performed in a for loop?',
        answers: [
            { text: 'Testing, Updating, Testing', correct: false},
            { text: 'Initialization, Incremtation, Updation', correct: false},
            { text: 'Initialization, Testing, Updation', correct: true},
            { text: 'Updation, Testing, Initialization', correct: false},
        ],
        helptext: 'In a for loop, the loop initiliazes the variable, tests the condition, and then increments its value through the update.'
    },
    {
        question: 'JavaScript uses what type of scoping?',
        answers: [
            { text: 'Sequential', correct: false},
            { text: 'Segmental', correct: false},
            { text: 'Lexical', correct: true},
            { text: 'Literal', correct: false},
        ],
        helptext: 'JavaScript utilizes lexical scoping, which means functions are executed with the variable scope in place when defined, rather than in effect when invoked.'
    },
    {
        question: 'Which of the following is not a closure?',
        answers: [
            { text: 'Objects', correct: false},
            { text: 'Variables', correct: false},
            { text: 'Graphs', correct: true},
            { text: 'Functions', correct: false},
        ],
        helptext: 'A closure is the combination of a function bundled togetherwith references to its surrounding state.'
    },
]