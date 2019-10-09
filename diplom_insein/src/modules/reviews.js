'use strict';

const reviews = () => {

    const reviewsSliderSlide = document.querySelectorAll('.reviews-slider__slide'),
        reviews = document.querySelector('.reviews'),
        dotReviews = document.querySelectorAll('.dot-reviews'),
        sliderDotsBase = document.querySelector('.slider-dots-base');
        let count = 0;
        sliderDotsBase.style.display = 'flex';
        reviews.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('#reviews-arrow_right')) {
                for (let key of reviewsSliderSlide) {
                    key.style.display = 'none';
                }
                for (let key of dotReviews) {
                    key.classList.remove('dot_active');
                }
                count++;
                if (count >= reviewsSliderSlide.length){
                    count = 0;
                }
                reviewsSliderSlide[count].style.display = 'flex';
                dotReviews[count].classList.add('dot_active');
            }
            if (target.closest('#reviews-arrow_left')) {
                for (let key of reviewsSliderSlide) {
                    key.style.display = 'none';
                }
                for (let key of dotReviews) {
                    key.classList.remove('dot_active');
                }
                if (count <= 0) {
                    count = reviewsSliderSlide.length;
                }count--;
                reviewsSliderSlide[count].style.display = 'flex';
                dotReviews[count].classList.add('dot_active');
            }
        });

};

export default reviews;