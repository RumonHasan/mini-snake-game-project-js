// imports
import { GAME_BOARD } from "../game.js";

// variables
const food = { // main food object
    x: 10,
    y: 10
}

// update food
export const updateFood = ()=>{
    
}

// draw food
export const drawFood = (gameBoardElem)=>{
    const foodElement = document.createElement('div');
    foodElement.classList.add('food');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    gameBoardElem.appendChild(foodElement);
}