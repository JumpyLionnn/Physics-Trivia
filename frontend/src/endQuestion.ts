
function endQuestion(){
    timer.style.width = "100%";
    clearInterval(currentQuestionInterval);
    
    answerModal.show();
    setTimeout(() => {
        answerModal.hide();
        currentTeam++;
        //console.log(currentTeam)
        if(currentTeam >= teamsScoreElements.length){
            currentTeam = 0;
        }
        turnDisplay.classList.remove("bg-danger", "bg-warning", "bg-success", "bg-info", "bg-secondary");
        switch (currentTeam) {
            case 0:
                turnDisplay.classList.add("bg-danger");
                break;
            case 1:
                turnDisplay.classList.add("bg-warning");
                break;
            case 2:
                turnDisplay.classList.add("bg-success");
                break;
            case 3:
                turnDisplay.classList.add("bg-info");
                break;
            case 4:
                turnDisplay.classList.add("bg-secondary");
                break;
        }
        if(currentQuestionIndex < questionsPerTeam * teamsNumber){
            nextQuestion();
        }
        else{
            questionContainer.classList.add("d-none");
            scoreContainer.classList.remove("w-25");
            scoreContainer.classList.add("w-100");
        }
    }, 2000);
}

function correctAnswer(){
    correctAnswerEmoji.remove();
    wrongAnswerEmoji.remove();
    correctSoundEffect.play();
    emojiDiv.appendChild(correctAnswerEmoji);
}

function wrongAnswer(){
    correctAnswerEmoji.remove();
    wrongAnswerEmoji.remove();
    wrongSoundEffect.play();
    emojiDiv.appendChild(wrongAnswerEmoji);
}