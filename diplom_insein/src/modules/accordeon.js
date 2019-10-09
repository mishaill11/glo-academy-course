'use strict';

const accordeon = () => {
    const accordion = document.querySelector('.accordion'),
    titleBlock = document.querySelectorAll('.title_block');
    let bool = true;
    accordion.addEventListener('click', event => {
        let target = event.target;
        if (target.closest('.title_block')) {
            titleBlock.forEach(elem => {
                if (target === elem) {
                    if (bool === true){
                        elem.classList.remove('msg-active');
                        bool = false;
                    } else if (bool === false) {
                        elem.classList.add('msg-active');
                        bool = true;
                    }
                } else {
                    elem.classList.remove('msg-active'); 
                }
            });
        }
    });

}

export default accordeon;