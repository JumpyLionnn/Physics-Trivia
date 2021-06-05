function startGame() {
    teamsNumber = parseInt(teamsNumberInput.value);
    for (let i = 1; i < teamsNumber; i++) {
        const paragraph = document.querySelector(`#team-${i+1} p`) as HTMLParagraphElement;
        teamsScoreElements.push(paragraph);
        const div = document.querySelector(`#team-${i+1}`) as HTMLDivElement;
        div.classList.remove("d-none");
    }
    questionsPerTeam = Math.floor(questionNumber / teamsNumber);
    nextQuestion();
}