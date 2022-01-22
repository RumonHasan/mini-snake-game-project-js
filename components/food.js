// imports
import { GAME_BOARD } from "../game.js";
import { increaseSnakeParts, checkFoodCollision } from "./snake.js";

// variables
const SNAKE_INCREASE_RATE = 1;
let food = { // main food object
    x: 10,
    y: 10
}

// update food
export const updateFood = ()=>{
    if(checkFoodCollision(food)){
        increaseSnakeParts(SNAKE_INCREASE_RATE)
        food = randomFoodPositions();
    }
}

// draw food
export const drawFood = (gameBoardElem)=>{
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    gameBoardElem.appendChild(foodElement);
}

// get random positions
const randomFoodPositions = () =>{
    let newFoodPositions;
    return {
        x: Math.floor(Math.random() * GAME_BOARD) + 1,
        y: Math.floor(Math.random() * GAME_BOARD) + 1
    }
}