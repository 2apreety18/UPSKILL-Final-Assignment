let question_count = 0;
let score = 0;
let username;
let seconds = 0;
let minutes = 0;
let mytime;

/*new*/
let myArray = []; //stroes the random number
let array = [];
let count = 0;
let question_index;

const questionSpan = document.querySelector(".question-span");
const quesionNoSpan = document.querySelector(".question-no-span");
const optionList = document.querySelector(".option_group").children;
const welcomeContainer = document.querySelector(".welcome_text");
const quizContainer = document.querySelector(".quiz");
const resultContainer = document.querySelector(".result");
const name = document.querySelectorAll(".name");
const spanScore = document.querySelector(".score");
const bigScore = document.querySelector(".bigScore");

const timeSpan = document.querySelector(".total-time");
const totalQuestionSpan = document.querySelector(".total-question");
let questions = [
    {
        question: "This is the default selection setting on the toolbar. With this you can make a selection of any rectangular size and shape",
        options: [
            "Rectangular marquee tool",
            "Elliptical marquee tool",
            "Single row"
        ],
        answer: 1,
        type: "text"
    },
    {
        question: "Which one is Lasso Tool",
        options: [
            "image 1",
            "image 2",
            "image 3"
        ],
        answer: 2,
        type: "image"
    },
    {
        question: "Why would you get this pop up?",
        options: [
            "The layer you are trying to work on is locked",
            "Doesn't matter just close it and try again",
            "Because photoshop is broken"
        ],
        answer: 0,
        type: "textimg"
    },
    {
        question: "This is the default selection setting on the toolbar. With this you can make a selection of any rectangular size and shape",
        options: [
            "Rectangular marquee tool",
            "Elliptical marquee tool",
            "Single row"
        ],
        answer: 1,
        type: "text"
    },
    {
        question: "Which one is Lasso Tool",
        options: [
            "image 1",
            "image 2",
            "image 3"
        ],
        answer: 2,
        type: "img"
    },
    {
        question: "Why would you get this pop up?",
        options: [
            "The layer you are trying to work on is locked",
            "Doesn't matter just close it and try again",
            "Because photoshop is broken"
        ],
        answer: 0,
        type: "textimg"
    },
    {
        question: "This is the default selection setting on the toolbar. With this you can make a selection of any rectangular size and shape",
        options: [
            "Rectangular marquee tool",
            "Elliptical marquee tool",
            "Single row"
        ],
        answer: 1,
        type: "text"
    },
    {
        question: "This is the default selection setting on the toolbar. With this you can make a selection of any rectangular size and shape",
        options: [
            "Rectangular marquee tool",
            "Elliptical marquee tool",
            "Single row"
        ],
        answer: 1,
        type: "text"
    },
    {
        question: "This is the default selection setting on the toolbar. With this you can make a selection of any rectangular size and shape",
        options: [
            "Rectangular marquee tool",
            "Elliptical marquee tool",
            "Single row"
        ],
        answer: 1,
        type: "text"
    },
    {
        question: "This is the default selection setting on the toolbar. With this you can make a selection of any rectangular size and shape",
        options: [
            "Rectangular marquee tool",
            "Elliptical marquee tool",
            "Single row"
        ],
        answer: 1,
        type: "text"
    }
];

function timer() {
    let dt = new Date(new Date().setTime(0)); //setting to time zero
    let time = dt.getTime();
    seconds = Math.floor((time % (100 * 60)) / 1000);
    minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    mytime = setInterval(function () {
        if (seconds < 59) {
            seconds++;
        }
        else {
            seconds = 0;
            minutes++;
        }
        //console.log(seconds,minutes);
        let formatted_sec = seconds < 10 ? '0' + seconds : seconds;
        let formatted_minute = minutes < 10 ? '0' + minutes : minutes;

        document.querySelector(".time").innerHTML = formatted_minute + ':' + formatted_sec;
    }, 1000);
}





welcomeContainer.style.display = "none";
quizContainer.style.display = "grid";
randomQuestion();

function submitbtn() {
        timeSpan.innerHTML = minutes + ' minutes and ' + seconds + ' seconds';
        clearInterval(mytime);
        quizOver();
}


function next() {
    if (question_count == questions.length - 1) {
        timeSpan.innerHTML = minutes + ' minutes and ' + seconds + ' seconds';
        clearInterval(mytime);
        quizOver();
    } else {
        question_count++;
        clearOptionClass();
        randomQuestion();
    }
}

function show() {
    quesionNoSpan.innerHTML = count + 1;
    questionSpan.innerHTML = questions[question_index]['question'];

    for (let i = 0; i < optionList.length; i++) {
        optionList[i].innerHTML = questions[question_index]['options'][i];
    }
    count++;
}
function randomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length); //generates random number
    hitDuplicate = 0;

    if (myArray.length > 0) {
        /*for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] == randomNumber) //generated new random number compares with the stored random nummber array
            {

                hitDuplicate = 1;
                break;
            }
        }*/
        if (myArray.includes(randomNumber)) {
            randomQuestion();
        }
        else {
            question_index = randomNumber;
            show();
            myArray.push(question_index);
        }

    }
    if (myArray.length == 0)//first random number
    {
        question_index = randomNumber;
        show();
        myArray.push(question_index);
    }
}
function clearOptionClass() {
    for (let i = 0; i < optionList.length; i++) {
        optionList[i].classList.remove("active");
    }
}

for (let i = 0; i < optionList.length; i++) {
    optionList[i].addEventListener("click", function () {

        let id = this.getAttribute("data-id");

        for (let k = 0; k < optionList.length; k++) {
            if (optionList[k].classList.contains("active")) {
                optionList[k].classList.remove("active");
            }
        }
        this.classList.add("active");
        if (id == questions[question_index].answer) {
            score++;
            console.log(score);
        }

    });
}

function quizOver() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    bigScore.innerHTML = score*10;
    spanScore.innerHTML = score;
    totalQuestionSpan.innerHTML = questions.length;
}

function tryAgain() {
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', (e) => {
    checkLsContent()
});
