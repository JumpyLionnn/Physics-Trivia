function answerSelected(index: number){
    if(currentQuestion.answers[index] === currentQuestion.correctAnswer){
        correctAnswer();
        const score = Math.floor(timeRemaining / 1000);
        console.log( currentTeam);
        console.log(teamsNumber);
        for(let i = 0; i < score; i++){
            setTimeout(() => {
                //console.log( teamsScoreElements[currentTeam]);
                scores[currentTeam] += 1;
                //console.log(teamsScoreElements[currentTeam]);
                teamsScoreElements[currentTeam].innerText = scores[currentTeam] + "";
            }, i * 30);
        }
    }
    else{
        wrongAnswer();
    }
    endQuestion();
}