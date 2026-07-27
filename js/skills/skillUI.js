// let currentSkill=getSkills("probability");

// /**
//  * Render the large skill card
//  */
// function renderSkill(skill){
//     if(!skill) return;
//     currentSkill=skill;
//     document.getElementById("moduleIcon").textContent=skill.icon;
//     document.getElementById("moduleBadge").textContent=skill.badge;
//     document.getElementById("moduleTitle").textContent=skill.title;
//     document.getElementById("moduleDescription").textContent=skill.description;
//     document.getElementById("progressFill").style.width= skill.progress + "%";
//     document.getElementById("progressValue").textContent =skill.progress + "%";
//     document.getElementById("moduleProblems").textContent =skill.totalQuestions;
//     document.getElementById("moduleHours").textContent =skill.duration;
//     document.getElementById("moduleDifficulty").textContent =skill.difficulty;
// }
// function setupSkillCards(){

//     const cards = document.querySelectorAll(".skill-item");

//     cards.forEach(card=>{

//         card.addEventListener("click",()=>{

//             const id = card.dataset.skill;

//             const skill = getSkills(id);

//             renderSkill(skill);

//             cards.forEach(c=>
//                 c.classList.remove("active")
//             );

//             card.classList.add("active");

//         });

//     });

// }

// =============================
// Current Selected Skill
// =============================

let currentSkill = getSkill("probability");

// =============================
// Render Selected Skill
// =============================

function renderSkill(skill) {

    if (!skill) return;

    currentSkill = skill;

    document.getElementById("moduleIcon").textContent = skill.icon;
    document.getElementById("moduleBadge").textContent = skill.badge;
    document.getElementById("moduleTitle").textContent = skill.title;
    document.getElementById("moduleDescription").textContent = skill.description;

    document.getElementById("progressFill").style.width = skill.progress + "%";
    document.getElementById("progressValue").textContent = skill.progress + "%";

    document.getElementById("moduleProblems").textContent = skill.totalQuestions;
    document.getElementById("moduleHours").textContent = skill.duration;
    document.getElementById("moduleDifficulty").textContent = skill.difficulty;

}

// =============================
// Skill Cards
// =============================

function setupSkillCards() {

    const cards = document.querySelectorAll(".skill-item");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const id = card.dataset.skill;

            const skill = getSkill(id);

            renderSkill(skill);

            cards.forEach(c => c.classList.remove("active"));

            card.classList.add("active");

        });

    });

}

// =============================
// Start Training Button
// =============================

const startTrainingBtn = document.getElementById("startTrainingBtn");

if (startTrainingBtn) {

    startTrainingBtn.addEventListener("click", () => {

        if (!currentSkill) return;

        window.location.href = `training.html?skill=${currentSkill.id}`;

    });

}

// =============================
// Initialize
// =============================

renderSkill(currentSkill);
setupSkillCards();