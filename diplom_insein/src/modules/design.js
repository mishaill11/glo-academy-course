'use strict';

const design = () => {
    const   designs = document.querySelector('.designs'), 
        designsNavItemBase = document.querySelectorAll('.designs-nav__item_base'),
        navListDesigns = document.querySelector('.nav-list-designs'),
        designsSlider = document.querySelector('.designs-slider'),
        previewBlock = document.querySelectorAll('.preview-block'),
        previewBlockItemInner = document.querySelectorAll('.preview-block__item-inner'),
        designSliderSlides = document.querySelectorAll('.designs-slider__style-slide'),
        popupDesign = document.querySelector('.popup-design'),
        linkListDesigns = document.querySelector('.link-list-designs'),
        navItemPopUp = document.querySelectorAll('.designs-nav__item_popup'),
        popupDesignSlider = document.querySelector('.popup-design-slider'),
        popupSliderSlide = document.querySelectorAll('.popup-design-slider__style-slide'),
        popupSliderWrap = document.querySelector('.popup-design-slider-wrap'),
        popupDesignText = document.querySelectorAll('.popup-design-text'),
        popupDesignsCounter = document.querySelector('#popup-designs-counter'),
        current = popupDesignsCounter.querySelector('.slider-counter-content__current'),
        total = popupDesignsCounter.querySelector('.slider-counter-content__total');

        
        designs.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('.designs-nav__item_base')) {
                designsNavItemBase.forEach((elem, i) => {
                    if (target === elem) {
                        elem.classList.add('active');
                        for(let key of designsSlider.children){
                            key.style.display = 'none';
                            console.log(key);
                        }
                        designsSlider.children[i].style.display = 'block';
                        console.log(previewBlock[i]);
                        previewBlock[i].classList.add('visible');
                        for (let key of designSliderSlides){
                            key.style.display = 'block';
                        }
                    }
                    else {
                        elem.classList.remove('active');
                        previewBlock[i].classList.remove('visible');
                    } 
                }); 
            } 
            if (target.closest('.preview-block__item-inner')) {
                previewBlockItemInner.forEach((elem, i) => {
                    if (target === elem) {
                        for (let key of designSliderSlides){
                            key.style.display = 'none';
                        }
                        designSliderSlides[i].style.display = 'block';
                    }
                });
            }
            if (target.closest('#design_right')) {
                
                
                    // if (){
                    //     count = 0;
                    // }count++;designSliderSlides[count].style.display = 'block';
                    // console.log(previewBlock[0].children.length);
                
                
            }
            if (target.closest('.link-list-designs')){
                popupDesign.style.visibility = 'visible';
            }
        });let count = 0;
        popupDesign.addEventListener('click', event => {
            
            let target = event.target;
            if (target.closest('.designs-nav__item_popup')){
                
                navItemPopUp.forEach((elem, i) => {
                    if (target === elem) {
                        elem.classList.add('active');
                        for(let key of popupDesignSlider.children){
                            key.style.display = 'none';
                            
                        }
                        popupDesignSlider.children[i].style.display = 'block';
                        
                        total.textContent = popupDesignSlider.children[i].children.length;
                        for (let key of popupSliderSlide){
                            key.style.display = 'block';
                        }

                        popupDesignText[i].classList.add('visible-content-block');
                        
                    }
                    else {
                        elem.classList.remove('active');
                        popupDesignText[i].classList.remove('visible-content-block');
                    }
                    
                });
            }current.textContent = 1;
            if (target.closest('#popup_design_right')) {
                count++;
                current.textContent = count;
                navItemPopUp.forEach((elem, i) => {
                    if (elem.classList.contains('active')){
                        for(let key of popupDesignSlider.children){
                            key.style.display = 'none';
                            
                        }
                    if (count >= popupDesignSlider.children[i].children.length) {
                        count = 0;
                        }
                        for(let key of popupDesignSlider.children[i].children){
                            key.style.display = 'none';
                                
                        }
                        popupDesignSlider.children[i].style.display = 'block';
                        popupDesignSlider.children[i].children[count].style.display = 'block';
                        
                    }
                    
                });
                console.log(count);
            }
        });


};

export default design;