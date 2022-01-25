import { score } from "./score.js";
let GAME_SPEED = 3;


export function gameSpeed (){
    if(score === 6){
        return GAME_SPEED = 6
    }
    if(score === 12){
        return GAME_SPEED = 9
    }
    if(score === 15){
        return GAME_SPEED = 12
    }
    if(score === 18){
        return GAME_SPEED = 15
    }
    return GAME_SPEED;
}