function answerSelected(index: number){
    if(currentQuestion.answers[index] === currentQuestion.correctAnswer){
        correctAnswer();
        const score = Math.floor(timeRemaining / 1000);
        for(let i = 0; i < score; i++){
            setTimeout(() => {
                scores[currentTeam] += 1;
                teamsScoreElements[currentTeam].innerText = scores[currentTeam] + "";
            }, i * 30);
        }
    }
    else{
        wrongAnswer();
    }
    endQuestion();
}