

const dailyChallenges = [

    {
        category: "Probability",
        title: "Probability Fundamentals",
        difficulty: 3,
        time: "8 Minutes",
        questions: 12,
        reward: "+100 XP",

        question:
            "A trader has a strategy that succeeds 60% of the time. If it is executed five independent times, what is the probability that it succeeds at least three times?",

        options: [
            "0.317",
            "0.683",
            "0.528",
            "0.742"
        ],

        answer: 1,

        explanation:
            "Using the binomial distribution, calculate the probabilities for exactly 3, 4 and 5 successful trades, then add them together."
    },

    {
        category: "Mental Math",
        title: "Compound Growth",
        difficulty: 2,
        time: "5 Minutes",
        questions: 8,
        reward: "+80 XP",

        question:
            "₹1000 grows by 10% every year for 2 years. What is the final value?",

        options: [
            "₹1210",
            "₹1200",
            "₹1221",
            "₹1100"
        ],

        answer: 0,

        explanation:
            "1000 × 1.10 × 1.10 = ₹1210."
    },

    {
        category: "Logic",
        title: "Pattern Recognition",
        difficulty: 4,
        time: "6 Minutes",
        questions: 10,
        reward: "+150 XP",

        question:
            "Find the next number in the sequence: 2, 6, 12, 20, 30, ?",

        options: [
            "40",
            "42",
            "44",
            "46"
        ],

        answer: 1,

        explanation:
            "The differences are 4, 6, 8, 10, so the next difference is 12. Therefore 30 + 12 = 42."
    }

];

// let currentChallenge = null;
// let answered = false;

// function loadChallenge(){

//     // document.getElementById("challengeCategory").textContent=challenge.category;
//     currentChallenge=dailyChallenges[Math.floor(Math.random()*dailyChallenges.length)];
//     document.getElementById("challengeCategory").textContent=currentChallenge.category;
//     document.getElementById("challengeTitle").textContent =currentChallenge.title;

//     optionButtons.forEach((button,index)=>{
//         button.textContent=String.fromCharCode(65+index)+" "+currentChallenge.options[index];
//     });

// }
// loadChallenge();
// const challengeCategory = document.getElementById("challengeCategory");

// if (challengeCategory) {

//     const challenge =
//         dailyChallenges[
//             Math.floor(Math.random() * dailyChallenges.length)
//         ];

//     document.getElementById("challengeCategory").textContent = challenge.category;
//     document.getElementById("challengeTitle").textContent = challenge.title;
//     document.getElementById("challengeTime").textContent = challenge.time;
//     document.getElementById("challengeQuestions").textContent = challenge.questions;
//     document.getElementById("challengeReward").textContent = challenge.reward;
//     document.getElementById("challengeQuestion").textContent = challenge.question;

//     // ...rest of the Daily Challenge JS...

// }

