'use strict';

const carousel = () => {
    const partners = document.querySelector('.partners'),
        sliderWrapper = partners.querySelector('.wrapper'),
        partnersSlider = partners.querySelector('.partners-slider');
        let partnersSliderSlides = partners.querySelectorAll('.partners-slider__slide');

        sliderWrapper.style.display = 'flex';
        sliderWrapper.style.justifyContent = 'center';
        partnersSlider.style.display = 'flex';
        partnersSlider.style.justifyContent = 'center';
        partnersSlider.style.width = '750px';
        partnersSlider.style.overflow = 'hidden';
        partnersSlider.style.position = 'relative';
        partnersSlider.style.width = partnersSliderSlides[0].clientWidth * 3 + 'px';
            
        if (document.documentElement.clientWidth <= 575) {
            partnersSlider.style.width = partnersSliderSlides[0].clientWidth + 'px';
        }
        partners.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('#partners-arrow_left')){
                partnersSliderSlides = partners.querySelectorAll('.partners-slider__slide');
                partnersSliderSlides[partnersSliderSlides.length-1].after(partnersSliderSlides[0]);
            }
            if (target.closest('#partners-arrow_right')){
                partnersSliderSlides = partners.querySelectorAll('.partners-slider__slide');
                partnersSliderSlides[0].before(partnersSliderSlides[partnersSliderSlides.length-1]);
            }
        });
};

export default carousel;