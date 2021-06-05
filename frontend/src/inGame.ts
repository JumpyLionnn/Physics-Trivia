
const teamsNumberInput = document.getElementById("teamsNumberInput") as HTMLInputElement;

const questionDiv = document.getElementById("question-div") as HTMLDivElement;

const timer = document.querySelector("#timer div") as HTMLDivElement;

const answersElements = [
    (document.querySelector("#answer-1 #answer") as HTMLSpanElement),
    (document.querySelector("#answer-2 #answer") as HTMLSpanElement),
    (document.querySelector("#answer-3 #answer") as HTMLSpanElement),
    (document.querySelector("#answer-4 #answer") as HTMLSpanElement),
];

const turnDisplay = document.getElementById("turn-display") as HTMLDivElement;

for (let i = 0; i < answersElements.length; i++) {
    (document.querySelector(`#answer-${i +1}`) as HTMLDivElement).addEventListener("click", () => answerSelected(i));
}

const correctSoundEffect = new Audio("assets/correctAnswer.wav");
const wrongSoundEffect = new Audio("assets/wrongAnswer.wav");

let questionNumber: number;
async function load() {
    questionNumber = await (await fetch("/questions")).json();
}

load()


const correctAnswerEmoji = new Image();
correctAnswerEmoji.src = "assets/happy.gif";

const wrongAnswerEmoji = new Image();
wrongAnswerEmoji.src = "assets/sad.gif"

const emojiDiv = document.getElementById("modal-emoji-div") as HTMLDivElement;

const answerModal = new bootstrap.Modal(document.getElementById("answer-modal") as HTMLDivElement);

const teamsScoreElements = [
    (document.querySelector("#team-1 p") as HTMLDivElement),
    (document.querySelector("#team-2 p") as HTMLDivElement),
];

let currentQuestion: Question;

let currentQuestionIndex = 0;
let currentQuestionInterval: number;

let timeRemaining = 60000;

const scores: number[] = [0,0,0,0,0];

let currentTeam = 0;
let questionsPerTeam: number;
let teamsNumber: number;


interface Question{
    question: string;
    answers: string[];
    correctAnswer: string;
}