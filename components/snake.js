import { GAME_BOARD } from "../game.js";
import { getKeyboardControls } from "./controls.js";

// variables
const snakeBody = [{ // primary snake body array object
    x: 20,
    y: 10
}];
let snakeParts = 1; // initial snake segments

// update snake
export const updateSnake = () => {
    updateSnakeSegments();
    const keyboardInput = getKeyboardControls();

    // moving the snake forward by switching the last and second last element back and forth
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    //adding 1 block in either x or y direction
    snakeBody[0].x += keyboardInput.x;
    snakeBody[0].y += keyboardInput.y;
}

// draw snake 
export const drawSnake = (gameBoardElem)=>{
    snakeBody.forEach((snakeSections)=>{
        const snakeSegment = document.createElement('div');
        snakeSegment.classList.add('snake');
        snakeSegment.style.gridColumnStart = snakeSections.x;
        snakeSegment.style.gridRowStart = snakeSections.y;
        gameBoardElem.appendChild(snakeSegment);
    })
}

// snake head boundary check
export const snakeHeadRect = ()=>{
    return snakeBody[0];
}

const updateSnakeSegments = ()=>{
    for(let i = 0; i < snakeParts; i++){
        snakeBody.push(snakeBody[length - 1]);
    }
}

