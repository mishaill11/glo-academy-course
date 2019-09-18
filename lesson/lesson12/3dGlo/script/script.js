window.addEventListener('DOMContentLoaded', () => {
'use strict';

    function countTimer() {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
        let data = new Date().setHours(24, 0, 0, 0), 
            dataNew = new Date().getTime();
            
            
            let timeRemaining = (data - dataNew) / 1000,
            second = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            return {data, timeRemaining, hours, minutes, second};
        }   

        // const getTimeRemaining = () =>{
        // let dateStop = new Date(`18 september 2019 15:12:23`),
        //     dateNow = new Date().getTime(),
        //     timeRemaining = (dateStop - dateNow) / 1000,
        //     second = Math.floor(timeRemaining % 60),
        //     minutes = Math.floor((timeRemaining / 60) % 60),
        //     hours = Math.floor(timeRemaining / 60 / 60);
        //     return {timeRemaining,dateStop, hours, minutes, second};
        // }
        
        function updateClock() {
            let timer = getTimeRemaining();
            //if (timer.timeRemaining >= 0) {
                console.log(timer.timeRemaining);
                (timer.hours >= 10) ? timerHours.textContent = timer.hours: timerHours.textContent = '0' + timer.hours;
                (timer.minutes >= 10) ? timerMinutes.textContent = timer.minutes: timerMinutes.textContent = '0' + timer.minutes;
                (timer.second >= 10) ? timerSeconds.textContent = timer.second: timerSeconds.textContent = '0' + timer.second;
                    // timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
                    // timerMinutes.textContent = timer.minutes < 10 ? '0'+ timer.minutes : timer.minutes;
                    // timerSeconds.textContent = timer.second < 10 ? '0'+ timer.second : timer.second;
            //}
            if (timer.timeRemaining <= 0) {
                
                //timer.data.setHours('23', '59', '59');
                console.log('timer.data: ', timer.data);
                
                // timerHours.nextElementSibling.style.color = 'red';
                // timerMinutes.nextElementSibling.style.color = 'red';
                // timerHours.style.color = 'red';
                // timerMinutes.style.color = 'red';
                // timerSeconds.style.color = 'red';
                timerHours.textContent = '24';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                
                //clearInterval(time);
            }
        }
        let time = setInterval(updateClock, 1000);   
    }
    countTimer();
});