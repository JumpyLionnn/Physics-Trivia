

const startButton = document.getElementById("startButton") as HTMLButtonElement;



(document.querySelector("form")as HTMLFormElement).addEventListener("submit", (e) => {
    e.preventDefault();
    mainMenuWindow.hidden = true;
    inGameWindow.hidden = false;
    startGame();
})
