let currentQuestion=null;
// let currentQuestionIndex=-1;
let sessionQuestions = [];
let currentQuestionIndex = 0;
const DAILY_LIMIT = 10;

let selectedAnswer=null;
let hasSubmitted = false;
/**
 * Returns a random question
 */
function startDailyChallenge(){

    const questions=[...getQuestions()];

    // Shuffle
    questions.sort(()=>Math.random()-0.5);

    // Pick only 10
    sessionQuestions=questions.slice(0,DAILY_LIMIT);

    currentQuestionIndex=0;

    currentQuestion=sessionQuestions[currentQuestionIndex];

    return currentQuestion;
}
/**
 * Returns the current question
 */
function getCurrentQuestion() {
    return currentQuestion;
}

/**
 * Checks whether the selected answer is correct
 */
function checkAnswer(selectedIndex) {

    if (!currentQuestion) {
        return false;
    }

    return selectedIndex === currentQuestion.correctAnswer;
}




/**
 * Save the selected answer
 */
function setSelectedAnswer(index){
    selectedAnswer=index;
}

/**
 * Return selected answer
 */
function getSelectedAnswer(){
    return selectedAnswer;
}

/**
 * Reset selected answer
 */
function resetSelectedAnswer(){
    selectedAnswer=null;
}


function nextQuestion(){

    if(currentQuestionIndex>=DAILY_LIMIT-1){

        completeDailyChallenge();

        return null;
    }

    currentQuestionIndex++;

    currentQuestion=sessionQuestions[currentQuestionIndex];

    return currentQuestion;

}


function completeDailyChallenge(){

    progress.streak++;

    localStorage.setItem("streak",progress.streak);

    updateProgressUI();

    alert("🎉 Daily Challenge Completed!");

}