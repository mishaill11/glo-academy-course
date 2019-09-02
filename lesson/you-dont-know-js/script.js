'use strict';

let bookArr = document.querySelector('.books'),
    body = document.querySelector('body'),
    book = document.querySelectorAll('.book'),
    book2 = book[0].querySelector('ul'),
    book5 = book[5].querySelector('ul'),
    book6 = book[2].querySelector('ul'),
    cloneLi = book6.children[0].cloneNode(),
    ad = body.querySelector('.adv');

bookArr.insertBefore(bookArr.children[1], bookArr.children[0]);
bookArr.insertBefore(bookArr.children[4], bookArr.children[2]);
bookArr.insertBefore(bookArr.children[4], bookArr.children[3]);
bookArr.insertBefore(bookArr.children[5], bookArr.children[4]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

bookArr.children[2].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

body.removeChild(ad);

book2.insertBefore(book2.children[6], book2.children[4]);
book2.insertBefore(book2.children[8], book2.children[5]);

book5.insertBefore(book5.children[9], book5.children[3]);
book5.insertBefore(book5.children[2], book5.children[6]);
book5.insertBefore(book5.children[6], book5.children[9]);

cloneLi.textContent = 'Глава 8: За пределами ES6';
book6.insertBefore(cloneLi, book6.children[9]);
