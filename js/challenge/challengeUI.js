function renderQuestion(question){
    if(!question) return;

    // CATEGORY
    document.getElementById("category").textContent=question.category;

      // Difficulty
    document.getElementById("difficulty").textContent=question.difficulty;


    // Question Number
    document.getElementById("questionNumber").textContent=question.id;


     // Question Text
    document.getElementById("questionText").textContent=question.question;


    // OPTIONS
    const optionButtons=document.querySelectorAll(".option-btn");

    optionButtons.forEach((button,index) => {
        button.textContent=question.options[index];
        button.classList.remove("selected");

    });

     // Clear old result
    document.getElementById("resultMessage").textContent="";
    document.getElementById("explanationText").textContent="";
    document.getElementById("hintText").textContent = "";
    resetSelectedAnswer();
    hasSubmitted = false;

    document.getElementById("submitBtn").disabled = false;
    document.getElementById("nextBtn").disabled = true;



}

function setupOptionButtons(){
    const optionButtons=document.querySelectorAll(".option-btn");
    optionButtons.forEach((button,index)=>{
        button.addEventListener("click",()=>{
            if(hasSubmitted){
                return;
            }



            optionButtons.forEach(btn=>
                btn.classList.remove("selected") 
        );
        button.classList.add("selected");
        setSelectedAnswer(index);
        })

    })
}



function showResult(isCorrect){
    console.log("showResult() called");
    const resultMessage=document.getElementById("resultMessage");
    const explanation=document.getElementById("explanationText");
    const question =getCurrentQuestion();

    if(isCorrect){
        resultMessage.textContent="✅Correct";
        resultMessage.className="correct";
    }else{
        resultMessage.textContent="❌Incorrect"
        resultMessage.className="wrong";
    }
    explanation.textContent=question.explanation;

}

function setupNextButton() {

    const nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", () => {

       const question=nextQuestion();

       if(question){

    renderQuestion(question);

}

    });

}


function setupSubmitButton(){

    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click",()=>{

        if(hasSubmitted){
            return;
        }

        const selectedAnswer=getSelectedAnswer();

        if(selectedAnswer===null){
            alert("Please select an option");
            return;
        }

        const isCorrect=checkAnswer(selectedAnswer);

        showResult(isCorrect);

        updateProgress(isCorrect);

        hasSubmitted=true;

        submitBtn.disabled=true;

        document.getElementById("nextBtn").disabled=false;

    });

}
function setupHintButton() {

    console.log("setupHintButton initialized");

    // const hintBtn = document.getElementById("hintBtn");
    const hintBtn = document.getElementById("hintBtn");
    const hintText = document.getElementById("hintText");

    hintBtn.addEventListener("click", () => {

        console.log("Hint button clicked");

        const question = getCurrentQuestion();

        console.log(question);
        console.log(question.hint);

        if (hintText.textContent === "") {
            hintText.textContent = question.hint;
            hintBtn.textContent = "Hide Hint";
        } else {
            hintText.textContent = "";
            hintBtn.textContent = "Show Hint";
        }

    });

}