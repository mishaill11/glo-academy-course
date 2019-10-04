'use strict';

const showMenu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu'),
        body = document.querySelector('body');

        body.addEventListener('click', (event) => {
            const target = event.target;
            if (target.matches('.menu__icon') || target.closest('.popup-dialog-menu')){
               if (document.documentElement.clientWidth > 1024){
                    popupDialogMenu.style.right = '639px';
                } else if (document.documentElement.clientWidth <= 1024 && 
                    document.documentElement.clientWidth > 575) {
                    popupDialogMenu.style.right = '549px';
                } else if (document.documentElement.clientWidth <= 575){
                    popupDialogMenu.style.top = '100%';
                } 
            } else {
                popupDialogMenu.style.right = 0;
                popupDialogMenu.style.top = 0;
            }
            if (target.matches('.close-menu') || target.matches('.menu-link')) {
                popupDialogMenu.style.right = 0;
                popupDialogMenu.style.top = 0;
            }
        });
};

export default showMenu;