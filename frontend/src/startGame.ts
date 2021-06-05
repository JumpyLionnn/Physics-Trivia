function startGame() {
    teamsNumber = parseInt(teamsNumberInput.value);
    for (let i = 2; i < teamsNumber; i++) {
        const paragraph = document.querySelector(`#team-${i} p`) as HTMLParagraphElement;
        teamsScoreElements.push(paragraph);
        const div = document.querySelector(`#team-${i}`) as HTMLDivElement;
        div.classList.remove("d-none");
    }
    questionsPerTeam = Math.floor(questionNumber / teamsNumber);
    nextQuestion();
}