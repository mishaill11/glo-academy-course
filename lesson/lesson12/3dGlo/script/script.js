window.addEventListener('DOMContentLoaded', () => {
'use strict';

    function countTimer() {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
        let dateStop = new Date('12 september 2019 11:45:00'),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            second = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, second};
        }
        
        function updateClock(){
            let timer = getTimeRemaining();
            if (timer.timeRemaining > 0) {
                    timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
                    timerMinutes.textContent = timer.minutes < 10 ? '0'+ timer.minutes : timer.minutes;
                    timerSeconds.textContent = timer.second < 10 ? '0'+ timer.second : timer.second;
            } if (timer.timeRemaining < 0) {
                timerHours.nextElementSibling.style.color = 'red';
                timerMinutes.nextElementSibling.style.color = 'red';
                timerHours.style.color = 'red';
                timerMinutes.style.color = 'red';
                timerSeconds.style.color = 'red';
                clearInterval(2);
            }
        }
        setInterval(updateClock, 1000);   
    }
    countTimer();
});