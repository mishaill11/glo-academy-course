'use strict';

const privacy = () => {
    const linkPrivacy = document.querySelectorAll('.link-privacy'),
    popupPrivacy = document.querySelector('.popup-privacy'),
    body = document.querySelector('body');
    linkPrivacy.forEach(elem => {
        body.addEventListener('click', (event) => {
            if (event.target === elem){
                popupPrivacy.style.visibility = 'visible';
            } else if (event.target === popupPrivacy){
                popupPrivacy.style.visibility = 'hidden';
            }
        });
    });
};

export default privacy;