const quizData = [
    {
        question: 'What did the foreign exchange student take from Michael back to what was formerly Yugoslavia?',
        a: 'All of his shoes',
        b: 'All of his blue jeans',
        c: 'All of his shorts',
        d: 'All of his toys',
        correct: 'b'
    }, {
        question: 'What does Michael ask Pam to spread on his foot that he burned on a George Foreman grill?',
        a: 'Mayonnaise',
        b: 'Mustard',
        c: 'Butter',
        d: 'Lotion',
        correct: 'c'
    }, {
        question: 'What does Kevin suggest Dwight put in his gun holster?',
        a: 'A cell phone',
        b: 'A banana',
        c: 'A toy gun',
        d: 'A twinkie',
        correct: 'b'
    }, {
        question: 'What did Kevin buy for himself when he got himself for Secret Santa?',
        a: 'A foot bath',
        b: 'A foot massager',
        c: 'American Pie 2 movie',
        d: 'M&Ms',
        correct: 'b'
    }, {
        question: 'Aside from Jim, who in the office has an obvious crush on Pam throughout the show?',
        a: 'Ryan',
        b: 'Toby',
        c: 'Dwight',
        d: 'Andy',
        correct: 'b'
    },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuizData();

function loadQuizData() {
    deselectCheckbox();
    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function  getSelElement() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
       if(answerEl.checked){
        answer =answerEl.id;
       }
    });
    return answer;
}

function deselectCheckbox() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelElement();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuizData();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
