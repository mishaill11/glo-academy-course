'use strict';
let hexString, num,
    btn = document.querySelector('button'),
    text = document.querySelector('span');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

btn.addEventListener('click', () => {
    hexString  = getRandomIntInclusive(0, 9999999).toString(16);
    num = '#' + ('00000' + hexString).slice(-6);
    text.textContent = num;
    document.querySelector('body').style.backgroundColor = num;
});
