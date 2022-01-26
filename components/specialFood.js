import {randomGridPositions} from './grid.js';
import { checkFoodCollision, increaseSnakeParts } from './snake.js';
import { foodElement } from './food.js';
import { increaseScore } from './score.js';

// variables
let nextSpecialAppearance = 0; 
const SPECIAL_APPEARANCE_INTERVAL = 1.5; // seconds

let specialFood = {
    x: 14,
    y: 15
}
// special rate of increase
const SNAKE_INCREASE_SPECIAL = 3;

//update 
export const updateSpecialFood = ()=>{
    if(checkFoodCollision(specialFood)){
        increaseSnakeParts(SNAKE_INCREASE_SPECIAL);
        increaseScore(3);
        // switchin to a random location 
        specialFood = getSpecialFoodPositions();
    }
}

// draw food 
export const drawSpecialFood = (gameBoardElem, deltaTime) =>{
    if(nextSpecialAppearance <= 0){
        drawFoodElement(gameBoardElem);
        nextSpecialAppearance = SPECIAL_APPEARANCE_INTERVAL;
    }
    console.log(nextSpecialAppearance);
    // keeps adding the delta time in order to make special appearance
    nextSpecialAppearance -= deltaTime;

}

const drawFoodElement = (gameBoardElem)=>{
    const foodSp = document.createElement('div');
    foodSp.classList.add('special-food');
    foodSp.style.gridColumnStart = specialFood.x;
    foodSp.style.gridRowStart = specialFood.y;
    gameBoardElem.appendChild(foodSp);
}

// switching sp food position
export const getSpecialFoodPositions = ()=>{
    let newFoodPosition;
    // randomizing positions till you get a new one
    while(newFoodPosition == null 
    || checkFoodCollision(newFoodPosition) || newFoodPosition == foodElement){
        newFoodPosition = randomGridPositions();
    }
    return newFoodPosition;
}

