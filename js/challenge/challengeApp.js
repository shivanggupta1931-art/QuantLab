document.addEventListener("DOMContentLoaded", async () => {

    await loadQuestions();

    const question=startDailyChallenge();

    renderQuestion(question);
    document.getElementById("nextBtn").disabled = true;

    setupOptionButtons();
    setupSubmitButton();
    setupHintButton();
    setupNextButton();

});