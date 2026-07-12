

const skillsData = {

    probability:{

        icon:"🎲",

        badge:"Core Skill",

        title:"Probability",

        description:"Learn to reason under uncertainty using probability, statistics and expected value.",

        progress:78,

        problems:120,

        hours:"18 Hours",

        difficulty:"Beginner → Advanced"

    },

    logic:{

        icon:"🧩",

        badge:"Core Skill",

        title:"Logic & Reasoning",

        description:"Develop structured thinking, pattern recognition and analytical reasoning.",

        progress:64,

        problems:95,

        hours:"16 Hours",

        difficulty:"Beginner → Advanced"

    },

    math:{

        icon:"⚡",

        badge:"Core Skill",

        title:"Mental Math",

        description:"Increase calculation speed, estimation and numerical confidence.",

        progress:52,

        problems:110,

        hours:"14 Hours",

        difficulty:"Intermediate"

    },

    finance:{

        icon:"📈",

        badge:"Core Skill",

        title:"Finance & Markets",

        description:"Build intuition for investing, trading and market behaviour.",

        progress:40,

        problems:85,

        hours:"20 Hours",

        difficulty:"Intermediate"

    }

};



const moduleIcon=document.getElementById("moduleIcon");

const moduleBadge=document.getElementById("moduleBadge");

const moduleTitle=document.getElementById("moduleTitle");

const moduleDescription=document.getElementById("moduleDescription");

const progressValue=document.getElementById("progressValue");

const progressFill=document.getElementById("progressFill");

const moduleProblems=document.getElementById("moduleProblems");

const moduleHours=document.getElementById("moduleHours");

const moduleDifficulty=document.getElementById("moduleDifficulty");

const skillButtons=document.querySelectorAll(".skill-item");



function updateSkill(skill){

    const data=skillsData[skill];

    moduleIcon.textContent=data.icon;

    moduleBadge.textContent=data.badge;

    moduleTitle.textContent=data.title;

    moduleDescription.textContent=data.description;

    progressValue.textContent=data.progress+"%";

    progressFill.style.width=data.progress+"%";

    moduleProblems.textContent=data.problems;

    moduleHours.textContent=data.hours;

    moduleDifficulty.textContent=data.difficulty;

}



skillButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        skillButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        updateSkill(button.dataset.skill);

    });

});



updateSkill("probability");


const thinkingData = {
    observe: {
        title: "Observe",
        description: "Before touching any calculation, identify what information matters. Great problem solvers spend more time understanding the question than rushing toward an answer.",
        points: [
            "Identify known information",
            "Spot unknown variables",
            "Recognize constraints",
            "Avoid assumptions"
        ]
    },

    reason: {
        title: "Reason",
        description: "Connect the available information logically before choosing a solution. Ask yourself why each step makes sense.",
        points: [
            "Break the problem into smaller parts",
            "Look for patterns",
            "Question assumptions",
            "Compare possible approaches"
        ]
    },

    solve: {
        title: "Solve",
        description: "Execute your plan carefully. Accuracy matters more than speed when learning.",
        points: [
            "Perform calculations systematically",
            "Double-check intermediate results",
            "Avoid rushing",
            "Keep your work organized"
        ]
    },

    reflect: {
        title: "Reflect",
        description: "Review your thinking after solving. Improvement comes from understanding both successes and mistakes.",
        points: [
            "Analyze mistakes",
            "Look for faster methods",
            "Identify key insights",
            "Apply lessons to future problems"
        ]
    }
};

const thinkingTitle = document.getElementById("thinkingTitle");
const thinkingDescription = document.getElementById("thinkingDescription");
const thinkingList = document.getElementById("thinkingList");

function updateThinking(step){

    const data = thinkingData[step];

    thinkingTitle.textContent = data.title;

    thinkingDescription.textContent = data.description;

    thinkingList.innerHTML = "";

    data.points.forEach(point => {

        const li = document.createElement("li");

        li.textContent = point;

        thinkingList.appendChild(li);

    });

}
const thinkingSteps = document.querySelectorAll(".thinking-step");

thinkingSteps.forEach(step => {

    step.addEventListener("click", () => {

        thinkingSteps.forEach(s =>
            s.classList.remove("active")
        );

        step.classList.add("active");

        updateThinking(step.dataset.step);

    });

});