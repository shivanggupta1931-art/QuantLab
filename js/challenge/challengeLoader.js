// fetching json and converting it into array \

let questions=[];


// loading all questions from question.json

async function loadQuestions(){
    try{
        const response=await fetch("data/questions.json")

        if(!response.ok){
            throw new Error("Failed to load questions");
        }
        questions=await response.json();
        console.log("Questions Loaded:",questions);
        return questions;
    }catch(error){
        console.log("Error Loading questions",error);
        return [];
    }
}

function getQuestions() {
    return questions;
}