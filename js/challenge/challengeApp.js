document.addEventListener("DOMContentLoaded", async () => {

    await loadQuestions();

    const question = getRandomQuestions();

    renderQuestion(question);

    setupOptionButtons();

    setupSubmitButton();
    setupHintButton();
    setupNextButton();

});