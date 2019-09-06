'use strict';
let body = document.querySelector('body');

const DomElement = function(){
    this.selector = ''; 
    this.height = 100; 
    this.width = 100;
    this.bg = ''; 
    this.fontSize = '';
};

DomElement.prototype.createElem = function(){
    let classAt, classB;
    this.selector = prompt('Введите строку со знака . или #');
    this.selector.split('');
    classB = this.selector.split('');
    classB.splice(0, 1);
    classB = classB.join('');
    if (this.selector[0] === '.') {
        let dot = document.createElement('div');
        dot.textContent = prompt('Введите текст');
        this.height = prompt('Введите стили высоты без "px"');
        this.width = prompt('Введите стили ширины без "px"');
        this.bg = prompt('Введите фон ');
        this.fontSize = prompt('Введите размер текста без "px"');
        dot.setAttribute('class', classB);
        dot.style.cssText = 'height: ' + this.height + 'px;' + 'width: ' + 
        this.width + 'px;' + 'background-color: ' + this.bg + ';' + 
        'font-size: ' + this.fontSize + 'px;';
        body.insertBefore(dot, body.children[0]);
    }else if (this.selector[0] === '#') {
        let resh = document.createElement('p');
        resh.textContent = prompt('Введите текст');
        this.height = prompt('Введите стили высоты без "px"');
        this.width = prompt('Введите стили ширины без "px"');
        this.bg = prompt('Введите фон');
        this.fontSize = prompt('Введите размер текста без "px"');
        resh.setAttribute('class', classB);
        resh.style.cssText = 'height: ' + this.height + 'px;' + 'width: ' + 
        this.width + 'px;' + 'background-color: ' + 
        this.bg + ';' + 'font-size: ' + this.fontSize + 'px;';
        body.insertBefore(resh, body.children[0]);
    }
};
DomElement.prototype.squareMove = function() {
    document.addEventListener('DOMContentLoaded', () => {
        let square = document.createElement('div');
        square.style.cssText = 'height: ' + this.height + 'px;' + 
        'width: ' + this.width + 'px;' + 'position: absolute;' + 'background-color: red;' + 'left: 500px';
        square.textContent = 'Передвинь меня';
        body.insertBefore(square, body.children[0]);
        let left = 500,
            top = 0;
        body.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowRight') {
                left += 10;
                square.style.left = left + 'px';
            }
            if (event.code === 'ArrowLeft'){
                left -= 10;
                square.style.left = left + 'px';
            }
            if (event.code === 'ArrowDown'){
                top += 10;
                square.style.top = top + 'px';
            }
            if (event.code === 'ArrowUp'){
                top -= 10;
                square.style.top = top + 'px';
            }
        });
    });
};

const domElement = new DomElement();

domElement.squareMove();
domElement.createElem();