window.addEventListener('DOMContentLoaded', () => {
'use strict';

    function countTimer(deadline) {
        let timerDays = document.querySelector('#timer-days'),
            timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            second = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60 / 60) % 24),
            days = Math.floor(timeRemaining / 60 / 60 / 24);
            return {timeRemaining, days, hours, minutes, second};
        }
        
        function updateClock(){
            let timer = getTimeRemaining();
            if (timer.timeRemaining > 0) {
                    timerDays.textContent = timer.days < 10 ? '0' + timer.days : timer.days;
                    timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
                    timerMinutes.textContent = timer.minutes < 10 ? '0'+ timer.minutes : timer.minutes;
                    timerSeconds.textContent = timer.second < 10 ? '0'+ timer.second : timer.second;
            } else if (timer.timeRemaining === 0) {
                clearInterval(1);
            }
        }
        setInterval(updateClock, 1000);   
        
    }
    countTimer('17 september 2019');    
});