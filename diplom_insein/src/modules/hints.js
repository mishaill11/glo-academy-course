'use strict';

const hints = (iconItems, popup, inner, div, num, target) => {
    iconItems.forEach((elem, i) => {
        if (target === elem) {
            if (i < num){
                popup[i].parentNode.parentNode.parentNode.style.zIndex = 100;
            
                inner[i].style.opacity = 1;
            popup[i].style.visibility = 'visible';
            popup[i].style.opacity = 1;
            popup[i].style.top = '';
            popup[i].style.transform = 'rotateX(0deg)';
            div[i].style.transform = 'rotateX(0deg)';
            if (popup[i].getBoundingClientRect().top < 0){
                popup[i].style.top = '90px';
                popup[i].style.transform = 'rotateX(180deg)';
                div[i].style.transform = 'rotateX(180deg)';
            }}
        } else {
            if (i < num){
                popup[i].style.visibility = 'hidden';
                inner[i].style.opacity = 0;
            popup[i+1].parentNode.parentNode.parentNode.style.zIndex = '';
            }
        }
        
    });
};

export default hints;