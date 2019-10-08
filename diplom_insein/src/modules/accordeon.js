'use strict';

const accordeon = () => {
    const accordion = document.querySelector('.accordion'),
    titleBlock = document.querySelectorAll('.title_block');

    accordion.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.title_block')) {
            titleBlock.forEach(elem => {
                if (target === elem) {
                    elem.classList.add('msg-active');
                } else {
                    elem.classList.remove('msg-active'); 
                }
            });
        }
    });

}

export default accordeon;