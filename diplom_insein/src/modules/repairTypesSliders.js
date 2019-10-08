'use strict';

const repairTypesSliders = () => {
    const repairTypesSlider = document.querySelector('.repair-types-slider'),
    sliderWrap = document.querySelector('.repair-types-slider-wrap'),
    sliderSlides = document.querySelectorAll('.repair-types-slider__slide'),
    arrowLeft = document.querySelector('#repair-types-arrow_left'),
    arrowRight = document.querySelector('#repair-types-arrow_right'),
    contentTotal = document.querySelector('.slider-counter-content__total'),
    contentCurrent = document.querySelector('.slider-counter-content__current'),
    slider = document.querySelector('.add'),
    sliders = document.querySelectorAll('.types-repair1, .types-repair2, .types-repair3, .types-repair4, .types-repair5');
    let count = 0;
    let current = 1;
    sliders.forEach(elem => {
        console.log(elem);
    });
    // for (let key of repairTypesSlider.children) {
    //     if (key.classList.contains('add')) {
    //         key.style.display = 'block';
    //         for (let item of key.children){
    //             item.style.display = 'block';
    //         } 
    //     } else {
    //         key.style.display = 'none';
    //         for (let item of key.children){
    //             item.style.display = 'none';
    //         }
    //     }
    // }
    // console.log(repairTypesSlider.children);
    // contentTotal.textContent = slider.children.length;
    // const changeSlide = () => {
    //     for (let key of slider.children){
    //         key.style.display = 'none';
    //     }
    //     slider.children[count].style.display = 'block';
    // };

    // sliderWrap.addEventListener('click', event => {
    //     event.preventDefault();
    //     let target = event.target;
    //     // if (!target.matches('#repair-types-arrow_left, #repair-types-arrow_right')){
    //     //     return;
    //     // }
        
    //     changeSlide();
    //     if (target.closest('#repair-types-arrow_right')){
    //         count++;
            
    //         contentCurrent.textContent = count;
    //     } else if (target.closest('#repair-types-arrow_left')){
    //         count--;
    //     }
        
    //     if (count >= slider.children.length) {
    //         count = 0;
    //     } else if (count < 0) {
    //         count = slider.children.length -1;
    //     }
    //     changeSlide();
        
    // });
    


};

export default repairTypesSliders;