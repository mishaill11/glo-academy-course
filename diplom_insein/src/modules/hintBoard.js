'use strict';

const hintBoard = () => {
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon'),
    formulaItem = document.querySelectorAll('.formula-item'),
    formulaItemPopup = document.querySelectorAll('.formula-item-popup'),
    formulaItemIconInner = document.querySelectorAll('.formula-item__icon-inner'),
    formulaSlider = document.querySelector('.formula-slider'),
    formulaSliderWrap = document.querySelector('.formula-slider-wrap'),
    formulaSliderSlide = document.querySelectorAll('.formula-slider__slide'),
    body = document.querySelector('body');

    let formulaItemSlider = formulaSlider.querySelectorAll('.formula-item'), count = 0;
    console.log(formulaItemIcon);
    if (document.documentElement.clientWidth <= 1024) {
        formulaSlider.style.position = 'relative';
        formulaSlider.style.display = 'flex';
        formulaSlider.style.overflow = 'hidden';
        formulaSliderWrap.style.display = 'flex';
        formulaSliderWrap.style.justifyContent = 'center';
        formulaItemSlider.forEach(elem =>{
            elem.style.width = '300px';
        });
        formulaSliderSlide.forEach(elem =>{
            elem.style.height = '200px';
            elem.style.width = '300';
            elem.style.opacity = '1';
        });
        // body.addEventListener('click', event => {
        //     formulaItemSlider = formulaSlider.querySelectorAll('.formula-item');

        //     let target = event.target;
            
            
        //     if (target.closest('#formula-arrow_left')){
        //         count -= formulaItemSlider[0].clientWidth;
        //         if (count < -(formulaItemSlider[0].clientWidth * 3)){
        //             count = 0;
        //         }
        //         formulaItemSlider.forEach((elem,i) => {
        //             elem.style.left = count + 'px';
        //             formulaItemPopup[7].style.visibility = 'hidden';
        //         });
                
         
        //     }
        //     if (target.closest('#formula-arrow_right')){
        //         count += formulaItemSlider[0].clientWidth;
                              
        //         if (count >= 0){
        //             count = 0;
        //         }
        //         formulaItemSlider.forEach(elem => {
        //             elem.style.left = count + 'px';
        //         });
        //     }
        //     if (target.closest('.formula-item')) {
        //         formulaItemSlider = formulaSlider.querySelectorAll('.formula-item');
        //         formulaItemSlider.forEach((elem, i) =>{
        //             if (target === elem){
                    
        //                 formulaItemPopup[i+6].style.visibility = 'visible';
        //                 formulaItemPopup[i+6].style.opacity = 1;
        //             }else if (target !== elem){
                        
        //                 formulaItemPopup[i+6].style.visibility = 'hidden';
        //                 formulaItemPopup[i+6].style.opacity = 0;  
        //             }
        //         });
                
        //         console.log('target: ', target);
        //     }
            
        // });

    }
        body.addEventListener('mouseover', event => {
            let target = event.target;
            formulaItemIcon.forEach((elem, i) => {
                if (target.closest('.formula-item__icon') === elem) {
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