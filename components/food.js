// imports
import { GAME_BOARD } from "../game.js";
import { increaseSnakeParts, checkFoodCollision } from "./snake.js";
import { randomGridPositions } from "./grid.js";
import { increaseScore } from "./score.js";

// variables
const SNAKE_INCREASE_RATE = 1;
let food = {
    x: 10,
    y: 20
};

// update food
export const updateFood = ()=>{
    if(checkFoodCollision(food)){
        increaseSnakeParts(SNAKE_INCREASE_RATE)
        food = randomFoodPositions();
        increaseScore();
    }
}

export const foodElement = ()=>{
    return food;
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
    // checking whether food position is null or is it placed anywhere on the snake
    while(newFoodPositions == null || checkFoodCollision(newFoodPositions)){
        newFoodPositions = randomGridPositions();
    }
    return newFoodPositions;
}