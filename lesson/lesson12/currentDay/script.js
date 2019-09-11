'use strict';

let date = new Date(),
    newYear = new Date('December 31 2019'),
    dateNow = new Date().getTime(),
    arrDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    day = Math.floor(((newYear - dateNow) / 1000) / 60 / 60 / 24),
    hello = document.querySelector('.hello'),
    toDay = document.querySelector('.toDay'),
    currentTime = document.querySelector('.currentTime'),
    year = document.querySelector('.newYear');

function currentDay() {
    let hi;
    if (date.getHours() >= 6 && date.getHours() < 12) {
        hi = 'Доброе утро';
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        hi = 'Добрый день';
    } else if (date.getHours() >= 18 && date.getHours() < 23) {
        hi = 'Добрый вечер';
    } else if (date.getHours() >= 0 && date.getHours() < 6) {
        hi = 'Доброй ночи';
    }
    hello.textContent = hi; 
    toDay.textContent = `Сегодня: ${arrDay[date.getDay()-1]}`;
    currentTime.textContent = `Текущее время: ${((date.getHours() % 12) < 12 ? '0'+(date.getHours() % 12) : date.getHours() % 12) + 
    ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + (date.getHours() >= 12 ? 'PM' : 'AM')}`;
    year.textContent = `До нового года осталось ${day} дней`;
}
currentDay();