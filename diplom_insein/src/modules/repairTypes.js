'use strict';

const repairTypes = () => {
    const repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item'),
    navListRepair = document.querySelector('.nav-list-repair'),
    sliders = document.querySelectorAll('.types-repair1, .types-repair2, .types-repair3, .types-repair4, .types-repair5'),
    contentTotal = document.querySelector('.slider-counter-content__total'),
    sliderWrap = document.querySelector('.repair-types-slider-wrap'),
    navArrowLeft = document.querySelector('#nav-arrow-repair-left_base'),
    navArrowRight = document.querySelector('#nav-arrow-repair-right_base'),
    arrowLeft = document.querySelector('#repair-types-arrow_left'),
    arrowRight = document.querySelector('#repair-types-arrow_right');

    let contentCurrent = document.querySelector('.slider-counter-content__current');
    
    
    
    if (navListRepair.children[0].classList.contains('active')){
        let count = 0;
        sliders[0].style.display = 'block';
        contentCurrent.textContent = count;
        contentTotal.textContent = sliders[0].children.length;
        const sliderRepair = (i) => {
            const changeSlide = () => {
                for (let key of sliders[i].children){
                    key.style.display = 'none';
                }
                sliders[i].children[count].style.display = 'block';
                
            };
        
            sliderWrap.addEventListener('click', event => {
                
                let target = event.target;
                
                
                changeSlide();
                if (target.closest('#repair-types-arrow_right')){
                    count++;
                    
                    contentCurrent.textContent = count;
                } else if (target.closest('#repair-types-arrow_left')){
                    count--;
                }
                
                if (count >= sliders[i].children.length) {
                    count = 0;
                } else if (count < 0) {
                    count = sliders[i].children.length -1;
                }
                changeSlide();
                
            });
        };
        sliderRepair(0);
    }
    let count = 0;
    navListRepair.addEventListener('click', event => {
        //count = 1;
        let cont =0;
        let target = event.target;
            target = target.closest('.repair-types-nav__item');
        if (target) {
            repairTypesNavItem.forEach((elem, i) => {
                if (elem === target) {
  
                    elem.classList.add('active');
                    sliders[i].style.display = 'block';
                    
                    contentTotal.textContent = sliders[i].children.length;
                    // const sliderRepair = () => {
                    const changeSlide = () => {
                        for (let key of sliders[i].children){
                            key.style.display = 'none';
                        }
                        sliders[i].children[count].style.display = 'block';
                        
                    };
                    arrowRight.addEventListener('click', () => {
                        changeSlide();
                        count++;
                            console.log(count);
                            contentCurrent.textContent = count;
                            cont = contentCurrent.textContent;

                            if (count >= sliders[i].children.length) {
                                count = 0;
                            }
                    });
                    cont -=1;
                    arrowLeft.addEventListener('click', () => {
                        console.log(cont);
                                   count--;
                                             
                        contentCurrent.textContent = cont--;        
                        if (cont < 0) {
                            cont = sliders[i].children.length-1;
                        }
                        changeSlide(); 
                    });
                    // sliderWrap.addEventListener('click', event => {
                        
                    //     let target = event.target;
                        
                        
                    //     changeSlide();
                    //     if (target === arrowRight){
                    //         count++;
                    //         console.log(count);
                    //         contentCurrent.textContent = count;
                    //     }else 
                    //     if (target === arrowLeft){
                    //        count--;
                    //        contentCurrent.textContent = count;
                    //     } 
                        
                    //     if (count >= sliders[i].children.length) {
                    //         count = 0;
                    //     } else if (count < 0) {
                    //         count = sliders[i].children.length-1;
                    //     }
                    //     changeSlide();
                        
                    // });
                // };
                // sliderRepair();
                } else {
                    elem.classList.remove('active');
                    sliders[i].style.display = 'none';
                    
                }
            });
        }
    });
    if(document.documentElement.clientWidth < 1024) {
        let left = 0;
        navListRepair.style.position = 'relative';
        navArrowLeft.addEventListener('click', () => {
            left -= 150;
            if (left < -650){
                left = 0;
            }
            navListRepair.style.left = left + 'px';
            
        });
        navArrowRight.addEventListener('click', () => {
            left += 150;
            if (left > 0){
                left = 0;
            }
            navListRepair.style.left = left + 'px';
        });
    }
    


};

export default repairTypes;