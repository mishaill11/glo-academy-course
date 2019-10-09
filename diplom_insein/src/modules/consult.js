'use strict';

const consult = () => {
    const popupConsult = document.querySelector('.popup-consultation'),
        body = document.querySelector('body');

        body.addEventListener('click', event => {
            let target = event.target;
            if (target.closest('.button_wide')) {
                popupConsult.style.visibility = 'visible';
            }
            if (target === popupConsult || target.closest('.close')) {
                popupConsult.style.visibility = 'hidden';
            }
        });
        

};

export default consult;