'use strict';
let circle = document.querySelector('.redSquare'),
    play = document.querySelector('.play'),
    reset = document.querySelector('.reset'),
    count = 0,
    animate = true,
    move;
let moveCircle = function() {
    move = requestAnimationFrame(moveCircle);
    count++;
    if (count < 500) {
        circle.style.left = count + 'px';
        circle.style.top = count/2 + 'px';
    } else {
        cancelAnimationFrame(move);
    }
};

play.addEventListener('click', () =>{
    if (animate){
        requestAnimationFrame(moveCircle);
        animate = false;
    } else {
        animate = true;
       cancelAnimationFrame(move);
    }
});

reset.addEventListener('click', function(){
    circle.style.left = 0;
    circle.style.top = 0;
    count = 0;
});