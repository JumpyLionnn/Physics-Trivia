
async function nextQuestion(){
    if(currentQuestionIndex >= questionNumber) return;
    let response = await (await fetch(`/question/${currentQuestionIndex}`)).json() as Question;
    currentQuestionIndex++;
    timeRemaining = 60000;
    questionDiv.innerText = response.question;
    for (let i = 0; i < answersElements.length; i++) {
        const element = answersElements[i];
        element.innerText = response.answers[i];
    }
    currentQuestion = response;

    currentQuestionInterval = setInterval(() => {
        timeRemaining -= 30;
        timer.style.width = (timeRemaining / 60000) * 100 + "%";
        if(timeRemaining <= 0){
            wrongAnswer();
            endQuestion();
        }
    }, 30) as unknown as number;
}
