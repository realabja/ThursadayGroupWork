const startButton = document.getElementById('start-btn')
const controlButton = document.getElementById('control')
const nextButton = document.getElementById('next')
const questionContainerElement = document.getElementById('question-container')
const answerButtonsElement = document.getElementById('answer-buttons');

let questionArray = [{
    question:"Which of the following is not a Javascript datatype? ",
    answer1:"Integer",
    answer2:"string",
    answer3:"number",
    answer4:"all of the above",
    answer: '1D'
    }
,{question:"How many tags are in a regular element? ",
    answer1:"2",
    answer2:"4",
    answer3:"0",
    answer4:"1",
    answer: '3A'
    },
    {question:"Which of the following property is used to st the background image of an element?",
    answer1:"background-color",
    answer2:"background-image",
    answer3:"background-repeat",
    answer4:"background-position",
    answer: '4A'
   },
    {question:"What is the correct JavaScript syntax to change the content of the HTML P element with an id of demo?",
    answer1:"document.getElement('p').innerHTML='hello World'",
    answer2:"document.getElementByName('demo').innerHTML='hello world';",
    answer3:"document.getElementByName'p).innerHTML='hello World';",
    answer4:"#demo.innnerHTML='Hello World!?'",
    answer: '5B'
    },
    {question:" how do you select  elements in DOM? ",
    answer1:"document.getElementById(‘#id’)",
    answer2:"document.getElementsByClassName(‘.classname’)",
    answer3:"none of the above",
    answer4:"both of the above",
    answer: '2D'
    }];
const random = (low, high)=>{
    return Math.floor(Math.random()*(high-low)+low);
};

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }

const submit = ()=>{
    let randomQuestion = questionArray[random(0, questionArray.length)]
    document.querySelector("#question>h3").innerHTML = randomQuestion.question;
    document.querySelector("#A1").innerHTML = randomQuestion.answer1;
    document.querySelector("#A2").innerHTML = randomQuestion.answer2;
    document.querySelector("#A3").innerHTML = randomQuestion.answer3;
    document.querySelector("#A4").innerHTML = randomQuestion.answer4;
    const clicked = document.querySelectorAll('input[name="answer"]');
    for (let i in clicked){
        
        if (clicked[i].checked.id === ){
            alert("that was right")
        }
    }
       
}