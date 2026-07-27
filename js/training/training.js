const params=new URLSearchParams(window.location.search);
const skillId=params.get("skill") || "probability";

const skill=getSkill(skillId);

function getSkill(id){
    return skills.find(skill=>skill.id===id);
}

const trainingIcon=document.getElementById("trainingIcon");

const trainingBadge=document.getElementById("trainingBadge");
const trainingTitle=document.getElementById("trainingTitle");

const trainingDescription=document.getElementById("trainingDescription");
const trainingProgressValue = document.getElementById("trainingProgressValue");
const trainingProgressFill = document.getElementById("trainingProgressFill");

const trainingQuestions = document.getElementById("trainingQuestions");
const trainingDuration = document.getElementById("trainingDuration");
const trainingDifficulty = document.getElementById("trainingDifficulty");

function loadTrainingSkill(){
    if(!skill){
        alert("Skill not found");
        return;
    }
    trainingIcon.textContent = skill.icon;
    trainingBadge.textContent = skill.badge;
    trainingTitle.textContent = skill.title;
    trainingDescription.textContent = skill.description;

    trainingProgressValue.textContent = skill.progress + "%";
    trainingProgressFill.style.width = skill.progress + "%";

    trainingQuestions.textContent = skill.totalQuestions;
    trainingDuration.textContent = skill.duration;
    trainingDifficulty.textContent = skill.difficulty;
}
loadTrainingSkill();