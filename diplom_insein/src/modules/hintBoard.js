'use strict';

const hintBoard = () => {
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon'),
    formulaItem = document.querySelectorAll('.formula-item'),
    formulaItemPopup = document.querySelectorAll('.formula-item-popup'),
    formulaItemIconInner = document.querySelectorAll('.formula-item__icon-inner'),
    formulaSlider = document.querySelector('.formula-slider'),
    formulaSliderWrap = document.querySelector('.formula-slider-wrap'),
    formulaSliderSlide = document.querySelectorAll('.formula-slider__slide'),
    sliderArrow = formulaSliderWrap.querySelectorAll('.slider-arrow'),
    body = document.querySelector('body');

    let formulaItemSlider = formulaSlider.querySelectorAll('.formula-item'), count = 0;
    console.log(formulaItemIcon);
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
                console.log(formulaItemSlider[2]);
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
        body.addEventListener('mouseover', event => {
            let target = event.target;
            target = target.closest('.formula-item__icon');
            formulaItemIcon.forEach((elem, i) => {
                if (target === elem) {
                    let div = document.createElement('div');
                    if (i < 6){
                        formulaItemPopup[i].parentNode.parentNode.parentNode.style.zIndex = 100;
                    }
                    formulaItemIconInner[i].style.opacity = 1;
                    formulaItemPopup[i].style.visibility = 'visible';
                    formulaItemPopup[i].style.opacity = 1;
                    formulaItemPopup[i].style.top = '';
                    div.textContent = formulaItemPopup[i].textContent;
                    formulaItemPopup[i].textContent = '';
                    formulaItemPopup[i].appendChild(div); 
                    formulaItemPopup[i].style.transform = 'rotateX(0deg)';
                    div.style.transform = 'rotateX(0deg)';
                    if (formulaItemPopup[i].getBoundingClientRect().top < 0){
                        formulaItemPopup[i].style.top = '90px';
                        formulaItemPopup[i].style.transform = 'rotateX(180deg)';
                        formulaItemPopup[i].appendChild(div);
                        div.style.transform = 'rotateX(180deg)';
                    }
                } else {
                    if (i < 6){
                    formulaItemPopup[i].style.visibility = 'hidden';
                    formulaItemIconInner[i].style.opacity = 0;
                    formulaItemPopup[i+1].parentNode.parentNode.parentNode.style.zIndex = '';
                    }
                }
                
        });            
    });
};

export default hintBoard;