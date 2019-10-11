'use strict';

const fullList = () => {
    const fullList = document.querySelectorAll('#full-list'),
        popupTepairTypes = document.querySelector('.popup-repair-types'),
        body = document.querySelector('body');
        
    fullList.forEach(elem => {
        body.addEventListener('click', (event)=>{
            if (event.target === elem){
                popupTepairTypes.style.visibility = 'visible';
            } else if (event.target === popupTepairTypes || event.target.closest('.close')){
                popupTepairTypes.style.visibility = 'hidden';
            }
        });
    });
    
};

export default fullList;