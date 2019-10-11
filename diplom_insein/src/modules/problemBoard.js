'use strict';
import hints from './hints';
const problemBoard = () => {
    const problemsItemIcon = document.querySelectorAll('.problems-item__icon'),
        problems = document.querySelector('.problems'),
        problemsItemPopup = document.querySelectorAll('.problems-item-popup'),
        problemsItemIconInner = document.querySelectorAll('.problems-item__icon-inner'),
        problemsSlider = document.querySelector('.problems-slider'),
        body = document.querySelector('body');
        let count = 0,
            div,
            problemsSliderSlide = problemsSlider.querySelectorAll('.problems-slider__slide'),
            divCount;

        if (document.documentElement.clientWidth <= 1024){
            problemsSliderSlide.forEach(elem => {
                elem.style.display = 'none';
            });
            problemsSliderSlide[0].style.display = 'flex';
            body.addEventListener('click', event => {
                let target = event.target;
                if (target.closest('#problems-arrow_left')) {
                    count--;
                    problemsSliderSlide.forEach(elem => {
                        elem.style.display = 'none';
                    });
                    if (count < 0) {
                        count = problemsSliderSlide.length-1;
                    }
                    problemsSliderSlide[count].style.display = 'flex';
                    problemsSliderSlide[count].classList.add('active-item');
                    
                }
                if (target.closest('#problems-arrow_right')) {
                    
                    problemsSliderSlide.forEach(elem => {
                        elem.style.display = 'none';
                    });
                    count++;
                    if (count >= problemsSliderSlide.length) {
                        count = 0;
                    }
                    problemsSliderSlide[count].style.display = 'flex';
                    problemsSliderSlide[count].classList.add('active-item');
                    
                }
            });
        }

        problemsItemPopup.forEach((elem, i) => {
            if (i<=3) {
                div = document.createElement('div');
                div.style.position = 'absolute';
                elem.appendChild(div);                
                div.appendChild(elem.children[0]);  
                div.appendChild(elem.children[2]);
                div.appendChild(elem.children[1]);
                div.appendChild(elem.children[0]);
                div.classList.add('rotate');
            }
        });
        divCount = problems.querySelectorAll('.rotate');    
        body.addEventListener('mouseover', event => {
            let target = event.target;
            target = target.closest('.problems-item__icon');
            hints(problemsItemIcon, problemsItemPopup, problemsItemIconInner, divCount, 4, target);
        });           

};

export default problemBoard;