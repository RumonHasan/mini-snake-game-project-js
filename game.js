// imports
import { updateSnake, drawSnake, snakeHeadRect, snakeIntersection } from "./components/snake.js";
import { updateFood, drawFood } from "./components/food.js";
import { updateScoreBoard, drawScoreBoard, score } from "./components/score.js";
import { gameSpeed } from "./components/speedControl.js";
import { drawSpecialFood, updateSpecialFood, specialAppearance } from "./components/specialFood.js";
// selectors 
const gameBoardElem = document.querySelector('[data-board]');
const gameHeaderElem = document.querySelector('[data-header]');

// main variables
let previousAnimationTime;
let deltaTime;
const ANIMATION_CONTROL = 1000;
const GAME_SPEED = 3; // snake movement speed;
export const GAME_BOARD = 30;
let gameLost;

// listeners
document.addEventListener('keydown', handleStart, {once: true});

// main update game loop
const updateGameLoop = time =>{
    // checking collisions
    if(checkAllCollisions()){
        window.location = "/";
        return;
    }

    // animation frame control
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
    updateSpecialFood();
    // score 
    updateScoreBoard();
}

// game start
function handleStart(){
    gameHeaderElem.classList.add('hide');
    //main animation loop
    window.requestAnimationFrame(updateGameLoop);
}
// lose handling
function handleLose(){
    gameHeaderElem.classList.remove('hide');
};

// game characters
const drawGameContents = ()=>{
    gameBoardElem.innerHTML = ''; // initializing empty contents
    drawSnake(gameBoardElem);
    drawFood(gameBoardElem);
    drawScoreBoard(gameBoardElem);
    if(specialAppearance){
        drawSpecialFood(gameBoardElem, deltaTime);
    }
}

//check boundary collision
const checkBoundaryCollision = ()=>{
    const snakeHead = snakeHeadRect();
    return snakeHead.x > GAME_BOARD || snakeHead.y > GAME_BOARD 
    || snakeHead.x <= 1 || snakeHead.y <= 1;
}
// checking collisions for snake and boundary
function checkAllCollisions(){
    gameLost = checkBoundaryCollision() || snakeIntersection();
    return gameLost;
}