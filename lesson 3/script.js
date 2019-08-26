'use strict';

let lang, lengArr, namePerson;
//a
lang = prompt('Введите en либо ru');

console.log('Через if:');
if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');	
} else if (lang === 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница,	Суббота, Воскресенье');
} else {
    console.log('неверно!');
}

//b
console.log('Через Switch:');
switch (lang) {
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница,	Суббота, Воскресенье');
    break;    
    default:
        console.log('неверно!');            
}

//c
console.log('Через многомерный массив массив:');

lengArr = [
    ['en', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ['ru', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
];
lengArr = lengArr.filter(item => item[0] === lang).forEach(item => console.log(item));

//Второе задание
namePerson = prompt('Введите имя');

console.log(namePerson === 'Артем' ? 'Директор' : namePerson === 'Максим' ? 'Преподаватель' : 'Студент');

