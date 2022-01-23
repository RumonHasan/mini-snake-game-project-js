// variables
export let score = 0;
const SCORE_INCREASE_RATE = 1;

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

export const increaseScore = ()=>{
    score += SCORE_INCREASE_RATE;
}
