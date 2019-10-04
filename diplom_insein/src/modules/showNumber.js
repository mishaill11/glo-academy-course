'use strict';

const showNumber = () => {
    const headerArrow = document.querySelector('.header-contacts__arrow'),
        phoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord');
    let bool = true;

    headerArrow.addEventListener('click', () => {
        if (bool === true){
            headerArrow.children[0].style.transform = 'rotate(180deg)';
            phoneNumberAccord.style.top = '25px';
            phoneNumberAccord.children[0].style.opacity = 1;
            bool = false;
        } else {
            headerArrow.children[0].style.transform = 'rotate(0deg)';
            phoneNumberAccord.style.top = '0';
            phoneNumberAccord.children[0].style.opacity = 0;
            bool = true;
        }
    });
};

export default showNumber;