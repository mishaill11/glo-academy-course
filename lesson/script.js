'use strict';

let date = new Date(),
week = ['понедельник', 'вторник', 
'среда', 'четверг', 'пятница', 
'суббота', 'воскресенье'];

week.forEach(function(item, index) {
    if ((index === 5 || index === 6) && index === date.getDay() - 1) {
        document.write(item.bold().italics() + '<br>');
    }else if (index === (date.getDay() - 1)){
        document.write(item.bold() + '<br>');
    } else if (index === 5 || index === 6) {
        document.write(item.italics() + '<br>');
    } else {
        document.write(item + '<br>');
    }
});


