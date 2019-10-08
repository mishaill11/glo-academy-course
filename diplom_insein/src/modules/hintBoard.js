'use strict';

const hintBoard = () => {
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon'),
    formulaItem = document.querySelectorAll('.formula-item'),
    formulaItemPopup = document.querySelectorAll('.formula-item-popup'),
    formulaItemIconInner = document.querySelectorAll('.formula-item__icon-inner'),
    body = document.querySelector('body');
    
    formulaItem.forEach(elem => {
        elem.style.zIndex = 1;
    });
    
    formulaItemIcon.forEach((elem, i) => {
        elem.style.zIndex = 1;
            body.addEventListener('mouseover', event => {
                let target = event.target;
                if ( i <= 5) {
                    if (target.closest('.formula-item__icon') === formulaItemIcon[i]) {
                        let div = document.createElement('div');
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
                        formulaItemPopup[i].style.visibility = 'hidden';
                        formulaItemIconInner[i].style.opacity = 0;
                    }
                }
            });            
    });
};

export default hintBoard;