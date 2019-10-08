'use strict';

const hintMobileSlider = (slides) => {
    const formulaSlider = document.querySelector('.formula-slider'),
    formulaSliderSlide = document.querySelectorAll('.formula-slider__slide'),
    formulaSliderWrap = document.querySelector('.formula-slider-wrap'),
    next = document.querySelector('#formula-arrow_right'),
    prev = document.querySelector('#formula-arrow_left'),
    slidesToShow = slides;

    formulaSlider.style.display = 'flex';
    formulaSliderWrap.style.overflow = 'hidden';

    formulaSliderSlide.forEach(elem =>{
        
        elem.addEventListener('mouseover', event => {
            let target = event.target;
            if (target.closest('.formula-slider__slide')) {
                elem.style.opacity = '1';
            } else {
                elem.style.opacity = '0';
            }
    });
    });
};



export default hintMobileSlider;