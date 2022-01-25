import {randomGridPositions} from './grid.js';

// variables
export let foodAppearance = false;
let specialFood = {
    x: 14,
    y: 15
}

//update 
export const updateSpecialFood = ()=>{

}

// draw food 
export const drawSpecialFood = (gameBoardElem) =>{
    const foodSp = document.createElement('div');
    foodSp.classList.add('special-food');
    foodSp.style.gridColumnStart = specialFood.x;
    foodSp.style.gridRowStart = specialFood.y;
    gameBoardElem.appendChild(foodSp);
}

