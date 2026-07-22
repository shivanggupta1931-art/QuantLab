let currentQuestion=null;
let currentQuestionIndex=-1;

let selectedAnswer=null;

/**
 * Returns a random question
 */
function getRandomQuestions(){
    const questions=getQuestions();
    if(questions.length==0){
        console.error("No questions available");
        return null;
    }

    currentQuestionIndex=Math.floor(Math.random()*questions.length);
    currentQuestion=questions[currentQuestionIndex];
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