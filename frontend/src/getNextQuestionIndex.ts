const lastQuestionIndexes: number[] = [];

function getNextQuestionIndex() {
    let index = getRandomInt(0, questionNumber);
    while(lastQuestionIndexes.includes(index)){
        index = getRandomInt(0, questionNumber);
    }
    lastQuestionIndexes.push(index);
    return index;
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}