'use strict';

const design = () => {
    const   designs = document.querySelector('.designs'), 
        designsNavItemBase = document.querySelectorAll('.designs-nav__item_base'),
        sliderWrap = document.querySelector('.designs-slider-wrap'),
        designsSlider = document.querySelector('.designs-slider'),
        previewBlock = document.querySelectorAll('.preview-block'),
        previewBlockItemInner = document.querySelectorAll('.preview-block__item-inner'),
        designSliderSlides = document.querySelectorAll('.designs-slider__style-slide'),
        popupDesign = document.querySelector('.popup-design'),
        linkListDesigns = document.querySelector('.link-list-designs'),
        navItemPopUp = document.querySelectorAll('.designs-nav__item_popup'),
        popupDesignSlider = document.querySelector('.popup-design-slider'),
        navListDesigns = document.querySelector('.nav-list-designs'),
        navListPopup = document.querySelector('#nav-list-popup-designs'),
        popupDesignText = document.querySelectorAll('.popup-design-text'),
        popupDesignsCounter = document.querySelector('#popup-designs-counter'),
        popupCurrent = popupDesignsCounter.querySelector('.slider-counter-content__current'),
        popupTotal = popupDesignsCounter.querySelector('.slider-counter-content__total'),
        current = sliderWrap.querySelector('.slider-counter-content__current'),
        total = sliderWrap.querySelector('.slider-counter-content__total');

        let right = 0, left = 0,count = 0, numSlide = 0, popupCount = 0, popupNumSlide = 0;
        total.textContent = designsSlider.children[0].children.length;
        designs.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('.designs-nav__item_base')) {
                designsNavItemBase.forEach((elem, i) => {
                    if (target === elem) {
                        elem.classList.add('active');
                        for(let key of designsSlider.children){
                            key.style.display = 'none';
                        }
                        numSlide = i;
                        count = 0;
                        total.textContent = designsSlider.children[i].children.length;
                        designsSlider.children[i].style.display = 'block';
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
            if (document.documentElement.clientWidth <= 1024){
                total.textContent = designsSlider.children[0].children.length;
                if (target.closest('#design_right')) {
                    for (let key of designsSlider.children[numSlide].children){
                        key.style.display = 'none';
                    }
                    count++;
                    if (count >= designsSlider.children[numSlide].children.length){
                        count = 0;
                    }
                    current.textContent = count + 1;
                    designsSlider.children[numSlide].children[count].style.display = 'block';  
                }
                if (target.closest('#design_left')) {
                    for (let key of designsSlider.children[numSlide].children){
                        key.style.display = 'none';
                    }
                    if (count <= 0){
                        count = designsSlider.children[numSlide].children.length;
                    }
                    count--;
                    current.textContent = count + 1;
                    designsSlider.children[numSlide].children[count].style.display = 'block';  
                }
                if (target.closest('#nav-arrow-designs_left')){
                    if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 575){
                        left-=100;
                        navListDesigns.style.position = 'relative';
                        navListDesigns.style.left = left+'px';
                        if (left <= -500) {
                            left = 100;
                        }
                    } else if (document.documentElement.clientWidth <= 575){
                        if (left <= -700) {
                            left = 100;
                        }
                        left-=100;
                        navListDesigns.style.position = 'relative';
                        navListDesigns.style.left = left+'px';
                        
                    }
                } else if (target.closest('#nav-arrow-designs_right')){
                    left = 0;
                    if (document.documentElement.clientWidth <= 1024){
                        navListDesigns.style.position = 'relative';
                        navListDesigns.style.left = 0 +'px';
                    }
                }
            }
            if (target.closest('.link-list-designs')){
                popupDesign.style.visibility = 'visible';
            }
        });
        popupTotal.textContent = popupDesignSlider.children[0].children.length;
        popupDesign.addEventListener('click', event => {
            
            let target = event.target;
            if (target.closest('.designs-nav__item_popup')){
                
                navItemPopUp.forEach((elem, i) => {
                    if (target === elem) {
                        elem.classList.add('active');
                        for(let key of popupDesignSlider.children){
                            key.style.display = 'none';
                            
                        }
                        popupCount = 0;
                        popupDesignSlider.children[i].style.display = 'block';
                        popupCurrent.textContent = 1;
                        popupTotal.textContent = popupDesignSlider.children[i].children.length;
                        

                        popupDesignText[i].classList.add('visible-content-block');
                        popupNumSlide = i;
                    }
                    else {
                        elem.classList.remove('active');
                        popupDesignText[i].classList.remove('visible-content-block');
                    }
                    
                });
            }
            if (target.closest('#popup_design_right')) {
                for (let key of popupDesignSlider.children[popupNumSlide].children){
                    key.style.display = 'none';
                }
                popupCount++;
                if (popupCount >= popupDesignSlider.children[popupNumSlide].children.length){
                    popupCount = 0;
                }
                popupCurrent.textContent = popupCount + 1;
                popupDesignSlider.children[popupNumSlide].children[popupCount].style.display = 'block';
            }
            if (target.closest('#popup_design_left')) {
                for (let key of popupDesignSlider.children[popupNumSlide].children){
                    key.style.display = 'none';
                }
                if (popupCount <= 0){
                    popupCount = popupDesignSlider.children[popupNumSlide].children.length;
                }
                popupCount--;
                popupCurrent.textContent = popupCount + 1;
                popupDesignSlider.children[popupNumSlide].children[popupCount].style.display = 'block';
            }
            if (target.closest('#design_left')) {
                for (let key of designsSlider.children[numSlide].children){
                    key.style.display = 'none';
                }
                if (count <= 0){
                    count = designsSlider.children[numSlide].children.length;
                }
                count--;
                current.textContent = count + 1;
                designsSlider.children[numSlide].children[count].style.display = 'block';  
            }
            if (target.closest('#nav-arrow-popup-designs_left')){
                if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 575){
                    left-=100;
                    navListPopup.style.position = 'relative';
                    navListPopup.style.left = left+'px';
                    if (left <= -500) {
                        left = 100;
                    }
                } else if (document.documentElement.clientWidth <= 575){
                    if (left <= -700) {
                        left = 100;
                    }
                    left-=100;
                    navListPopup.style.position = 'relative';
                    navListPopup.style.left = left+'px';
                    
                }
            } else if (target.closest('#nav-arrow-popup-designs_right')){
                left = 0;
                if (document.documentElement.clientWidth <= 1024){
                    navListPopup.style.position = 'relative';
                    navListPopup.style.left = 0 +'px';
                }
            }
            if (!target.closest('.popup-dialog-design') || target.matches('.close')) {
                popupDesign.style.visibility = 'hidden';
            }
        });


};

export default design;