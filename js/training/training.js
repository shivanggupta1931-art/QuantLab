
// console.log("training.js loaded");


let selectedAnswer = null;

let score=0;
const TOTAL_QUESTIONS = 30;

let progress = JSON.parse(localStorage.getItem("skillProgress")) || {
    probability: 0,
    logic: 0,
    mentalmath: 0,
    finance: 0
};





function saveProgress() {
    localStorage.setItem(
        "skillProgress",
        JSON.stringify(progress)
    );
}



function showResults() {

    const totalQuestions = skillQuestions.length;
    const wrongAnswers = totalQuestions - score;
    const accuracy = ((score / totalQuestions) * 100).toFixed(1);

    trainingSession.innerHTML = `

        <div class="result-card">

            <h1>🎉 Training Complete</h1>

            <div class="result-grid">

                <div class="result-box">
                    <span>Score</span>
                    <h2>${score}/${totalQuestions}</h2>
                </div>

                <div class="result-box">
                    <span>Accuracy</span>
                    <h2>${accuracy}%</h2>
                </div>

                <div class="result-box">
                    <span>Correct</span>
                    <h2>${score}</h2>
                </div>

                <div class="result-box">
                    <span>Wrong</span>
                    <h2>${wrongAnswers}</h2>
                </div>

            </div>

            <div class="result-buttons">

                <button
                    id="retryBtn"
                    class="btn btn-primary">

                    Retry Training

                </button>

                <button
                    id="backBtn"
                    class="btn">

                    Back to Skills

                </button>

            </div>

        </div>

    `;

    document.getElementById("retryBtn").onclick = () => {

        progress[skill.id] = 0;
        saveProgress();

        currentQuestionIndex = 0;
        score = 0;
        selectedAnswer = null;
        renderQuestion();

    };

    document.getElementById("backBtn").onclick = () => {

        window.location.href = "index.html";

    };

}




function checkAnswer() {

    const question = skillQuestions[currentQuestionIndex];

    const optionButtons = document.querySelectorAll(".option-btn");
    const submitBtn = document.getElementById("submitAnswerBtn");

    optionButtons.forEach(button => {
        button.disabled = true;
    });

    optionButtons.forEach(button => {

        const index = Number(button.dataset.index);

        if (index === question.correctAnswer) {
            button.classList.add("correct");
        }

        if (
            index === selectedAnswer &&
            selectedAnswer !== question.correctAnswer
        ) {
            button.classList.add("wrong");
        }

    });

    if (selectedAnswer === question.correctAnswer) {
        score++;
    }

    const explanation = document.createElement("div");

    explanation.className = "explanation-box";

    explanation.innerHTML = `
        <h3>
            ${selectedAnswer === question.correctAnswer ? "✅ Correct!" : "❌ Incorrect"}
        </h3>

        <p>
            <strong>Explanation:</strong><br>
            ${question.explanation}
        </p>
    `;

    trainingSession.appendChild(explanation);

    submitBtn.textContent = "Next Question";

    submitBtn.onclick = nextQuestion;
}


function nextQuestion() {

    currentQuestionIndex++;



    progress[skill.id] = currentQuestionIndex;
    saveProgress();

    skill.progress = Math.round(
    (currentQuestionIndex / skillQuestions.length) * 100
    );

    trainingProgressValue.textContent = skill.progress + "%";
    trainingProgressFill.style.width = skill.progress + "%";



    selectedAnswer = null;

    if (currentQuestionIndex >= skillQuestions.length) {

        showResults();

        return;
    }


    skill.progress = Math.round(
    (currentQuestionIndex / skillQuestions.length) * 100
    );

    trainingProgressValue.textContent = skill.progress + "%";
    trainingProgressFill.style.width = skill.progress + "%";

    renderQuestion();

}



// 
// Get Selected Skill
// 

const params = new URLSearchParams(window.location.search);
const skillId = (params.get("skill") || "probability").toLowerCase();

const skill = getSkill(skillId);

// ==============================
// DOM Elements
// ==============================

const trainingIcon = document.getElementById("trainingIcon");
const trainingBadge = document.getElementById("trainingBadge");
const trainingTitle = document.getElementById("trainingTitle");
const trainingDescription = document.getElementById("trainingDescription");

const trainingProgressValue = document.getElementById("trainingProgressValue");
const trainingProgressFill = document.getElementById("trainingProgressFill");

const trainingQuestions = document.getElementById("trainingQuestions");
const trainingDuration = document.getElementById("trainingDuration");
const trainingDifficulty = document.getElementById("trainingDifficulty");

const startTrainingBtn = document.getElementById("startTrainingBtn");
const trainingSession = document.getElementById("trainingSession");

// ==============================
// Load Skill
// ==============================

function loadTrainingSkill() {

    if (!skill) {
        alert("Skill not found!");
        return;
    }

    trainingIcon.textContent = skill.icon;
    trainingBadge.textContent = skill.badge;
    trainingTitle.textContent = skill.title;
    trainingDescription.textContent = skill.description;

    // trainingProgressValue.textContent = skill.progress + "%";
    // trainingProgressFill.style.width = skill.progress + "%";


    const completed = progress[skill.id];

    const percentage = Math.round(
        (completed / TOTAL_QUESTIONS) * 100
    );

    trainingProgressValue.textContent = percentage + "%";
    trainingProgressFill.style.width = percentage + "%";


    trainingQuestions.textContent = skill.totalQuestions;
    trainingDuration.textContent = skill.duration;
    trainingDifficulty.textContent = skill.difficulty;
}





// ==============================
// Start Training
// ==============================
function renderQuestion() {

    const question = skillQuestions[currentQuestionIndex];

    trainingSession.innerHTML = `
        <div class="question-card">

            <h2>
                Question ${currentQuestionIndex + 1} / ${skillQuestions.length}
            </h2>

            <p class="question-text">
                ${question.question}
            </p>

            <div class="options">

                ${question.options.map((option, index) => `
                    <button
                        class="option-btn"
                        data-index="${index}">
                        ${option}
                    </button>
                `).join("")}

            </div>

            <button
                id="submitAnswerBtn"
                class="btn btn-primary"
                disabled>

                Submit Answer

            </button>

        </div>
    `;

    const optionButtons = document.querySelectorAll(".option-btn");
    const submitBtn = document.getElementById("submitAnswerBtn");

    submitBtn.onclick = checkAnswer;

    optionButtons.forEach(button => {

        button.onclick = () => {

            optionButtons.forEach(btn =>
                btn.classList.remove("selected")
            );

            button.classList.add("selected");

            selectedAnswer = Number(button.dataset.index);

            submitBtn.disabled = false;
        };

    });

}

function startTraining() {
    if (progress[skill.id] > 0) {
    startTrainingBtn.style.display = "none";
}

    renderQuestion();

}

// ==============================
// Events
// ==============================

startTrainingBtn.addEventListener("click", startTraining);

// ==============================
// Initialize
// ==============================

loadTrainingSkill();

let skillQuestions = [];

let currentQuestionIndex=0;

async function loadQuestions() {

    const response = await fetch("data/questions.json");

    const questions = await response.json();
    skillQuestions = questions.filter(question =>
        question.category
            .toLowerCase()
            .replace(/\s+/g, "") === skillId
    );
    console.log(skillQuestions);
    if (skillQuestions.length === 0) {
    alert("No questions found for this skill.");
}

}
async function init() {

    loadTrainingSkill();

    await loadQuestions();

    currentQuestionIndex = progress[skill.id];


    if (currentQuestionIndex >= skillQuestions.length) {
        showResults();
    } else {
        renderQuestion();
    }

    if (currentQuestionIndex < skillQuestions.length) {
        renderQuestion();
    }

}

init();