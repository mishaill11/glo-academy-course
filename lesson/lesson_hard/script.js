'use strict';

let date = new Date(),
    time = document.querySelector('.time');

function formatDate() {
    let ourFormat = {
        yyyy: date.getFullYear(),
        mm: ('0' + (date.getMonth() + 1)).slice(-2),
        dd: ('0' + date.getDay()).slice(-2),
        hh: ('0' + date.getHours()).slice(-2),
        Mm: ('0' + date.getMinutes()).slice(-2),
        ss: ('0' + date.getSeconds()).slice(-2)
    };
    return ourFormat.hh + ':' + ourFormat.Mm + ':' + ourFormat.ss + ' ' + ourFormat.dd + ':' + ourFormat.mm + ':' + ourFormat.yyyy;
} 
time.textContent = formatDate();
