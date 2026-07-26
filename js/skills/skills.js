// const skills=[{
//     id:"probability",
//     title:"probability",
//     icon:"🎲",
//     badge:"Core Skills",
//     description:"Learn to reason under probability ,statistics and expected value.",
//     progress:0,
//     totalQuestions:20,
//     solvedQuestion:0,
//     duration:"2 hours",
//     difficulty:"Beginner -> Advance",
//     color:"#3b82f6"

// },
// {
//     id:"logic",
//     title:"Logic",
//     icon:"🧩",
//     badge:"Reasoning",
//     description:"Strengthen logical thinking through structured reasoning and deduction.",
//     progress: 0,
//     totalQuestions: 20,
//     solvedQuestions: 0,
//     duration: "2 Hours",
//     difficulty: "Beginner → Advanced",
//     color: "#10b981"

// },
// {
//     id: "mentalMath",

//         title: "Mental Math",

//         icon: "⚡",

//         badge: "Speed",

//         description: "Improve numerical speed and calculation accuracy.",

//         progress: 0,

//         totalQuestions: 20,

//         solvedQuestions: 0,

//         duration: "2 Hours",

//         difficulty: "Beginner → Advanced",

//         color: "#f59e0b"
// },
// {
//         id: "finance",

//         title: "Finance",

//         icon: "📈",

//         badge: "Market",

//         description: "Understand markets, risk and trading psychology.",

//         progress: 0,

//         totalQuestions: 20,

//         solvedQuestions: 0,

//         duration: "2 Hours",

//         difficulty: "Beginner → Advanced",

//         color: "#ef4444"
//     }
// ]

// function getSkills(){
//     return skills;

// }

// function getSkills(id){
//     return skills.find(skill=>skill.id===id);
// }


const skills = [

    {
        id: "probability",
        title: "Probability",
        icon: "🎲",
        badge: "Core Skill",
        description: "Learn to reason under uncertainty using probability, statistics and expected value.",
        progress: 0,
        totalQuestions: 20,
        solvedQuestions: 0,
        duration: "2 Hours",
        difficulty: "Beginner → Advanced",
        color: "#3b82f6"
    },

    {
        id: "logic",
        title: "Logic",
        icon: "🧩",
        badge: "Reasoning",
        description: "Strengthen logical thinking through structured reasoning and deduction.",
        progress: 0,
        totalQuestions: 20,
        solvedQuestions: 0,
        duration: "2 Hours",
        difficulty: "Beginner → Advanced",
        color: "#10b981"
    },

    {
        id: "mentalMath",
        title: "Mental Math",
        icon: "⚡",
        badge: "Speed",
        description: "Improve numerical speed and calculation accuracy.",
        progress: 0,
        totalQuestions: 20,
        solvedQuestions: 0,
        duration: "2 Hours",
        difficulty: "Beginner → Advanced",
        color: "#f59e0b"
    },

    {
        id: "finance",
        title: "Finance",
        icon: "📈",
        badge: "Market",
        description: "Understand markets, risk and trading psychology.",
        progress: 0,
        totalQuestions: 20,
        solvedQuestions: 0,
        duration: "2 Hours",
        difficulty: "Beginner → Advanced",
        color: "#ef4444"
    }

];

function getSkills() {
    return skills;
}

function getSkill(id) {
    return skills.find(skill => skill.id === id);
}