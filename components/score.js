// variables
export let score = 0;

// update score
export const updateScoreBoard = ()=>{
}   

// draw score
export const drawScoreBoard = (gameBoardElem)=>{
    const scoreBoardElement = document.createElement('div');
    scoreBoardElement.classList.add('score-board');
    scoreBoardElement.textContent = `Score: ${score}`;
    gameBoardElem.appendChild(scoreBoardElement);
}

export const increaseScore = (SCORE_INCREASE_RATE)=>{
    score += SCORE_INCREASE_RATE;
}
