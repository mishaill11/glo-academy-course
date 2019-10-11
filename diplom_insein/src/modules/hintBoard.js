'use strict';
import hints from './hints';
const hintBoard = () => {
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon'),
    formulaItemPopup = document.querySelectorAll('.formula-item-popup'),
    formulaItemIconInner = document.querySelectorAll('.formula-item__icon-inner'),
    formulaSlider = document.querySelector('.formula-slider'),
    formulaSliderWrap = document.querySelector('.formula-slider-wrap'),
    formulaSliderSlide = document.querySelectorAll('.formula-slider__slide'),
    sliderArrow = formulaSliderWrap.querySelectorAll('.slider-arrow'),
    body = document.querySelector('body'),
    formula = document.querySelector('.formula');

    let formulaItemSlider = formulaSlider.querySelectorAll('.formula-item');
    
    if (document.documentElement.clientWidth <= 1024) {
        formulaSlider.style.position = 'relative';
        formulaSlider.style.display = 'flex';
        formulaSlider.style.overflow = 'hidden';
        formulaSliderWrap.style.display = 'flex';
        formulaSliderWrap.style.height = '800px';
        formulaSliderWrap.style.justifyContent = 'center';
        sliderArrow[0].style.top = '40%';
        sliderArrow[1].style.top = '40%';
        formulaItemSlider.forEach(elem =>{
            elem.style.width = '300px';
        });
        formulaSliderSlide.forEach(elem =>{
            elem.style.height = '200px';
            elem.style.width = '300';
            elem.style.opacity = '1';
        });
        
        formulaItemSlider[1].children[0].children[0].style.visibility = 'visible';
        formulaItemSlider[1].children[0].children[0].style.opacity = 1;
        body.addEventListener('click', event => {
            formulaItemSlider = formulaSlider.querySelectorAll('.formula-item');
            let target = event.target;
            
            if (target.closest('#formula-arrow_left')){
                formulaItemSlider[formulaItemSlider.length-1].after(formulaItemSlider[0]);
                
                formulaItemSlider[2].children[0].children[0].style.visibility = 'visible';
                formulaItemSlider[2].children[0].children[0].style.opacity = 1;
                formulaItemSlider[1].children[0].children[0].style.visibility = 'hidden';
            }
            if (target.closest('#formula-arrow_right')){
                formulaItemSlider[0].before(formulaItemSlider[formulaItemSlider.length-1]);
                formulaItemSlider[0].children[0].children[0].style.visibility = 'visible';
                formulaItemSlider[0].children[0].children[0].style.opacity = 1;
                formulaItemSlider[1].children[0].children[0].style.visibility = 'hidden';
            }
        });
    }
    let divHint, divHintCount;
    formulaItemPopup.forEach((elem, i) => {
        if (i < 6) {
            let inner;
            divHint = document.createElement('div');
            divHint.style.position = 'absolute';
            inner = elem.innerHTML;
            elem.innerHTML = '';
            elem.appendChild(divHint);
            divHint.innerHTML = inner;
            divHint.classList.add('rotate');
        }
    });

    divHintCount = formula.querySelectorAll('.rotate');
        body.addEventListener('mouseover', event => {
            let target = event.target;
            target = target.closest('.formula-item__icon');
            hints(formulaItemIcon, formulaItemPopup, formulaItemIconInner, divHintCount, 6, target);
    });
};

export default hintBoard;