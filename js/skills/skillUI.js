

// // =============================
// // Current Selected Skill
// // =============================

// let currentSkill = getSkill("probability");

// // =============================
// // Render Selected Skill
// // =============================

// function renderSkill(skill) {

//     if (!skill) return;

//     currentSkill = skill;

//     document.getElementById("moduleIcon").textContent = skill.icon;
//     document.getElementById("moduleBadge").textContent = skill.badge;
//     document.getElementById("moduleTitle").textContent = skill.title;
//     document.getElementById("moduleDescription").textContent = skill.description;

//     document.getElementById("progressFill").style.width = skill.progress + "%";
//     document.getElementById("progressValue").textContent = skill.progress + "%";

//     document.getElementById("moduleProblems").textContent = skill.totalQuestions;
//     document.getElementById("moduleHours").textContent = skill.duration;
//     document.getElementById("moduleDifficulty").textContent = skill.difficulty;

// }

// // =============================
// // Skill Cards
// // =============================

// function setupSkillCards() {

//     const cards = document.querySelectorAll(".skill-item");

//     cards.forEach(card => {

//         card.addEventListener("click", () => {

//             const id = card.dataset.skill;

//             const skill = getSkill(id);

//             renderSkill(skill);

//             cards.forEach(c => c.classList.remove("active"));

//             card.classList.add("active");

//         });

//     });

// }


// // const startTrainingBtn = document.getElementById("startTrainingBtn");

// // console.log(startTrainingBtn);

// // startTrainingBtn.addEventListener("click", () => {
// //     console.log("Button clicked!");
// // });




// document.querySelectorAll(".skill-item").forEach(button => {

//     button.addEventListener("click", () => {

//         const skill = button.dataset.skill;

//         window.location.href = `training.html?skill=${skill}`;

//     });

// });



// const openTrainingBtn = document.getElementById("openTrainingBtn");

// openTrainingBtn.addEventListener("click", () => {
//     window.location.href = `training.html?skill=${currentSkill.id}`;
// });
// // =============================
// // Initialize
// // =============================

// renderSkill(currentSkill);
// setupSkillCards();











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
const openTrainingBtn = document.getElementById("openTrainingBtn");

if (openTrainingBtn) {
    openTrainingBtn.addEventListener("click", () => {
        window.location.href = `training.html?skill=${currentSkill.id}`;
    });
}

// =============================
// Initialize
// =============================

renderSkill(currentSkill);
setupSkillCards();