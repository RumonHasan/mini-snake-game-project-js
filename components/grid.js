import { GAME_BOARD } from "../game.js"
export const randomGridPositions = ()=>{
    return {
        x: Math.floor(Math.random() * GAME_BOARD) + 1,
        y: Math.floor(Math.random() * GAME_BOARD) + 1
    }
}