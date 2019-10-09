'use strict';

const portfolioSlider = () => {
    const arrowRight = document.querySelector('#portfolio-arrow_right'),
    arrowLeft = document.querySelector('#portfolio-arrow_left'),
    portfolio = document.querySelector('.portfolio'),
    portfolioSliderFrame = document.querySelectorAll('.portfolio-slider__slide-frame'),
    portfolioSlider = document.querySelector('.portfolio-slider'),
    popupPortSlider = document.querySelectorAll('.popup-portfolio-slider__slide'),
    popupPortfolio = document.querySelector('.popup-portfolio'),
    popupPortfolioSlider = document.querySelector('.popup-portfolio-slider'),
    popupDialogPortfolio = document.querySelector('.popup-dialog-portfolio'),
    popupPortfolioText = document.querySelectorAll('.popup-portfolio-text'),
    popupPortfolioLeft = document.querySelector('#popup_portfolio_left'),
    popupPortfolioRight = document.querySelector('#popup_portfolio_right'),
    sliderMobile = document.querySelector('.portfolio-slider-mobile'),
    arrowMobileLeft = document.querySelector('#portfolio-arrow-mobile_left'),
    arrowMobileRight = document.querySelector('#portfolio-arrow-mobile_right'),
    popupPortfolioCounter = document.querySelector('#popup-portfolio-counter'),
    portfolioCounter = document.querySelector('#portfolio-counter'),
    total = portfolioCounter.querySelector('.slider-counter-content__total'),
    current = portfolioCounter.querySelector('.slider-counter-content__current'),
    popupTotal = popupPortfolioCounter.querySelector('.slider-counter-content__total'), 
    popupCurrent = popupPortfolioCounter.querySelector('.slider-counter-content__current');

    let count = 0, cont, mount = 0,
    mont = 0;

    const arrows = (i) => {
        
        let target = event.target;
        if (target.closest('#portfolio-arrow_right')) {
            portfolioSlider.children[count].style.display = 'none';
            count++;
           
            cont = count;
            if (count > 0) {
                arrowLeft.style.display = 'flex';
            }
            if (count === i) {
                arrowRight.style.display = 'none';
                count = 0;
            }
        }
        if (target.closest('#portfolio-arrow_left')) {
            
            if (count < i) {
                arrowRight.style.display = 'flex';
            }
            cont--;
            count = cont;
            portfolioSlider.children[cont].style.display = 'block';
            
            if (cont === 0) {
                arrowLeft.style.display = 'none';
            }
        }
    };
        
    
    
    current.textContent = mount + 1;
    total.textContent = sliderMobile.children.length;
    arrowMobileLeft.style.display = 'none';
    popupTotal.textContent = sliderMobile.children.length;      
    portfolio.addEventListener('click', event => {
        let target = event.target;
        if (document.documentElement.clientWidth > 1024){
            
            arrows(2);
        }else if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 900) {
            
            arrows(3);
        } else if (document.documentElement.clientWidth <= 900 && document.documentElement.clientWidth > 575){
            
            arrows(4);
        } else if (document.documentElement.clientWidth <= 575){
            arrowMobileLeft.style.zIndex = 200;
            arrowMobileRight.style.zIndex = 200;
            
            if (target.closest('.slider-arrow-tablet-mobile_right')) {
                sliderMobile.children[mount].style.display = 'none';
                
                mount++;
                
                mont = mount;
                current.textContent = mont+1;
                if (mount > 0) {
                   arrowMobileLeft.style.display = 'block'; 
                }
                if (mount === sliderMobile.children.length -1) {
                    arrowMobileRight.style.display = 'none';
                    mount = 0;
                }
            }
            
            if (target.closest('.slider-arrow-tablet-mobile_left')) {
                
                mont--;
                mount = mont;
                current.textContent = mount+1;
                if (mount < sliderMobile.children.length -1) {
                    arrowMobileRight.style.display = 'block'; 
                }
                sliderMobile.children[mont].style.display = 'block';
                if (mont === 0) {
                    arrowMobileLeft.style.display = 'none';
                } 
            }
        }
    });
    
    portfolioSliderFrame.forEach((elem, i) => {
      let popCount = 0;   
        elem.addEventListener('click', (event) => {
            
            for (let key of popupPortSlider) {
                    key.style.display = 'none';
                }
            if (elem.children[0].src.slice(-5) === popupPortSlider[i.toString().slice(-1)].children[0].src.slice(-5)){
                popCount = 0;
                popupPortfolio.style.visibility = 'visible';
                popupDialogPortfolio.style.visibility = 'visible';
                popupPortfolioSlider.style.visibility = 'visible';
                popupPortSlider[i.toString().slice(-1)].style.display = 'block';
                popupPortfolioText[i.toString().slice(-1)].style.display = 'block';
                popCount = +(i.toString().slice(-1));
                popupCurrent.textContent = popCount+1;
                
            }
            
            popupPortfolioRight.addEventListener('click', (event) => {
                
                for (let key of popupPortSlider) {
                    key.style.display = 'none';
                }
                for (let key of popupPortfolioText){
                    key.style.display = 'none';
                }
                
                popCount++;
                if (popCount >= popupPortSlider.length) {
                    popCount = 0;
                }
                popupPortSlider[popCount].style.display = 'block';
                popupPortfolioText[popCount].style.display = 'block';
                popupPortfolioLeft.style.display = 'block';
                popupCurrent.textContent = popCount+1;
            });
            popupPortfolioLeft.addEventListener('click', () => {
                for (let key of popupPortSlider) {
                    key.style.display = 'none';
                }
                for (let key of popupPortfolioText){
                    key.style.display = 'none';
                }
                
                if (popCount === 0) {
                    popCount = popupPortSlider.length;
                }
                popCount--;
                popupPortSlider[popCount].style.display = 'block';
                popupPortfolioText[popCount].style.display = 'block';
                popupPortfolioRight.style.display = 'block';
                
                popupCurrent.textContent = popCount + 1;
            });
            popupPortfolio.addEventListener('click', (event)=>{
                let target = event.target;
                if (!target.closest('.popup-dialog-portfolio') || target.matches('.close')){
                    popupPortfolio.style.visibility = 'hidden';
                    popupDialogPortfolio.style.visibility = 'hidden';
                    popupPortfolioSlider.style.visibility = 'hidden';
                }
            });
        });
    });
};

export default portfolioSlider;