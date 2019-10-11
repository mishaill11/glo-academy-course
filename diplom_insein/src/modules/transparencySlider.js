'use strict';

const transparencySlider = () => {
    const slider = document.querySelector('.transparency-slider').children,
        sliderWrap = document.querySelector('.transparency-slider-wrap'),
        popupTransparency = document.querySelector('.popup-transparency'),
        transparencyItemImg = document.querySelectorAll('.transparency-item__img'),
        popupDialogTransparency = document.querySelector('.popup-dialog-transparency'),
        current = popupDialogTransparency.querySelector('.slider-counter-content__current'),
        total = popupDialogTransparency.querySelector('.slider-counter-content__total'),
        popupSliderSlide = document.querySelectorAll('.popup-transparency-slider__slide');
    let count = 1;
    total.textContent = popupSliderSlide.length;
    
    sliderWrap.addEventListener('click', event => {
        let target = event.target;
        let mount = 0;
        transparencyItemImg.forEach((elem, i)=> {
            if (target === elem) {
                for (let key of popupSliderSlide) {
                    key.style.display = 'none';
                }
                popupTransparency.style.visibility = 'visible';
                popupDialogTransparency.style.visibility = 'visible';
                popupSliderSlide[i].style.display = 'block';
                current.textContent = i + 1;
                mount = i;
            }
            
            
        });
        popupTransparency.addEventListener('click', event => {

                let target = event.target;
                
                if (target.closest('#transparency_left')){
                    for (let key of popupSliderSlide) {
                        key.style.display = 'none';
                    }
                    if (mount <= 0) {
                        mount = popupSliderSlide.length;
                    }
                    mount--;
                    popupSliderSlide[mount].style.display = 'block';
                    current.textContent = mount+1;
                }
                if (target.closest('#transparency_right')){
                    for (let key of popupSliderSlide) {
                        key.style.display = 'none';
                    }
                    
                    mount++;
                    if (mount >= popupSliderSlide.length) {
                        mount = 0;
                    }
                    popupSliderSlide[mount].style.display = 'block';
                    current.textContent = mount+1;
                }
                if (!target.closest('.popup-dialog-transparency') || target.matches('.close')){
                    popupTransparency.style.visibility = 'hidden';
                    popupDialogTransparency.style.visibility = 'hidden';
                }
            });
        
            
    });
    
    if (document.documentElement.clientWidth <= 1024) {
        for (let key of slider){
           key.style.display = 'none';
        }
        slider[count].style.display = 'flex';
        sliderWrap.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('#transparency-arrow_left')) {
                for (let key of slider){
                    key.style.display = 'none';
                }
                if (count <= 0) {
                    count = slider.length; 
                }
                count--;
                slider[count].style.display = 'flex';
            }
            if (target.closest('#transparency-arrow_right')) {
                for (let key of slider){
                    key.style.display = 'none';
                }
                count++;
                if (count >= slider.length) {
                    count = 0;
                }
                
                slider[count].style.display = 'flex'; 
            }
        });
        
    }

};

export default transparencySlider;