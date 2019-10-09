'use strict';

const tabs = () => {
    const scheme = document.querySelector('.scheme'),
    schemeNavList = document.querySelectorAll('.scheme-nav__item'),
    schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide'),
    schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block'),
    schemeList = document.querySelector('#scheme-list');
    let left = 0;
    scheme.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.scheme-nav__item')) {
            schemeNavList.forEach((elem, i) => {
                if (target === elem) {
                    elem.classList.add('active');
                    for (let key of schemeSliderSlide) {
                        key.style.display = 'none';
                    }
                    schemeSliderSlide[i].style.display = 'block';
                    schemeDescriptionBlock[i].classList.add('visible-content-block');
                } else {
                    elem.classList.remove('active');
                    schemeDescriptionBlock[i].classList.remove('visible-content-block');
                }
            });
        }
        if (target.closest('#nav-arrow-scheme_left')){
            if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 575){
                left-=100;
                schemeList.style.position = 'relative';
                schemeList.style.left = left+'px';
                if (left <= -308) {
                    left = 100;
                }
            } else if (document.documentElement.clientWidth <= 575){
                if (left <= -900) {
                    left = 100;
                }
                left-=100;
                schemeList.style.position = 'relative';
                schemeList.style.left = left+'px';
                
            }
        } else if (target.closest('#nav-arrow-scheme_right')){
            
            if (document.documentElement.clientWidth <= 1024){
                schemeList.style.position = 'relative';
                schemeList.style.left = 0 +'px';
            }
        }
    });

};

export default tabs;