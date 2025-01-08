const quizData = [
    {
        "question": "Which language runs in a web browser?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "JavaScript",
        "correct": "d",
    },
    {
        "question": "What does CSS stand for?",
        "a": "Central Style Sheets",
        "b": "Cascading Style Sheets",
        "c": "Cascading Simple Sheets",
        "d": "Cars SUVs Sailboats",
        "correct": "b",
    },
    {
        "question": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Hypertext Markdown Language",
        "c": "Hyperloop Machine Language",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "a",
    },
    {
        "question": "What year was JavaScript launched?",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "none of the above",
        "correct": "b",
    },
];

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('option-container');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartBtn = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(){
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    ['a','b','c','d'].forEach((key)=>{
       const optionButton = document.createElement('button');
       optionButton.textContent = currentQuestion[key];
       optionButton.onclick = () =>
         selectAnswer(key,currentQuestion.correct);
         optionsContainer.appendChild(optionButton);
       });

       feedback.textContent = "";
       nextBtn.style.display = "none";
    }
    function selectAnswer(selectAnswer,correctOption){
        if( selectAnswer === correctOption){
            score++;
            feedback.textContent = 'correct'
            feedback.style.color = "green";
        }
        else{
            feedback.textContent = "incorrect"
            feedback.style.color = "red";
        }
        const buttons = optionsContainer.querySelectorAll("button");
        buttons.forEach((button)=>(
            button.disabled = true
        ));
        nextBtn.style.display = "inline-block";
    }
    nextBtn.onclick = function (){
        currentQuestionIndex++;
        if(currentQuestionIndex < quizData.length){
            loadQuestion();
        }
        else{
            showResult();
        }
    };
    function showResult(){
        document.getElementById('quiz-container').style.display = "none";
        resultContainer.style.display ="block";
        scoreElement.textContent = `your score: ${score}/${quizData.length}`;
    }
    restartBtn.onclick = function () {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.style.display = "none";
        document.getElementById('quiz-container').style.display = "block";
        loadQuestion();
    }
    loadQuestion();

