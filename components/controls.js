// first positions
let initialPosition = {
    x:0,
    y:0
}
// used in order to limit directional control in one particular axis at a time
let oldPosition = {
    x: 0,
    y: 0,
}

// custom controls
const controls = {
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_LEFT: 'ArrowLeft'
}
// control listener 
window.addEventListener('keydown', (event)=>{
    switch(event.key){
        case controls.ARROW_DOWN:
            if(oldPosition.y !== 0) return;
            initialPosition = {x: 0, y: 1}
            break;
        case controls.ARROW_UP:
            if(oldPosition.y !== 0) return;
            initialPosition = {x: 0, y: -1}
            break;
        case controls.ARROW_LEFT:
            if(oldPosition.x !== 0) return;
            initialPosition = {x: -1, y: 0}
            break;
        case controls.ARROW_RIGHT:
            if(initialPosition.x !== 0) return;
            initialPosition = {x: 1, y: 0}
            break;
        default:
            initialPosition = {x: 0, y: 0}
            break;
    }
});

// main control function
export const getKeyboardControls = ()=>{
    oldPosition = initialPosition;
    return initialPosition;
}