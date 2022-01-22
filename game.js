// imports
import { updateSnake, drawSnake, snakeHeadRect } from "./components/snake.js";
import { updateFood, drawFood } from "./components/food.js";

// selectors 
const gameBoardElem = document.querySelector('[data-board]');

// main variables
let previousAnimationTime;
let deltaTime;
const ANIMATION_CONTROL = 1000;
const GAME_SPEED = 3; // snake movement speed;
export const GAME_BOARD = 30;

// listeners


// main update game loop
const updateGameLoop = time =>{

    window.requestAnimationFrame(updateGameLoop);
    deltaTime = (time - previousAnimationTime) / ANIMATION_CONTROL;
    if(deltaTime < 1 / GAME_SPEED ) return; // dropping delta speed 
    previousAnimationTime = time;

    // update the game contents
    updateGameContents();

    // draw the game contents
    drawGameContents();
}
// main update contents
const updateGameContents = ()=>{
    // updating snake
    updateSnake();
    // food
    updateFood();
}

// game characters
const drawGameContents = ()=>{
    gameBoardElem.innerHTML = ''; // initializing empty contents
    drawSnake(gameBoardElem);
    drawFood(gameBoardElem);
}

//check boundary collision
const checkBoundaryCollision = ()=>{
    const snakeHead = snakeHeadRect();
    return snakeHead.x > GAME_BOARD || snakeHead.y > GAME_BOARD 
    || snakeHead.x <= 1 || snakeHead.y <= 1;
}


//main animation loop
window.requestAnimationFrame(updateGameLoop);