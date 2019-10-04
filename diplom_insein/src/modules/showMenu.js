'use strict';

const showMenu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu'),
        popupMenuNavItem = document.querySelectorAll('.popup-menu-nav__item'),
        body = document.querySelector('body'),
        allDiv = document.querySelectorAll(`.main, .formula, .repair-types, .portfolio,
        .transparency, .problems, .designs, .director, .reviews, .scheme, .faq, .partners`);

    let scroll = document.documentElement.scrollTop;

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
        popupMenuNavItem.forEach(elem => {
            elem.addEventListener('click', event => {
                let id = event.target.hash,
                    arrId = [...id];
                arrId.shift();
                arrId = arrId.join('');
                const pageMove = () => {
                    let move = requestAnimationFrame(pageMove);
                    scroll += 75.5;
                    allDiv.forEach(elem => {
                        if (arrId === elem.id) {
                            if (scroll <= elem.offsetTop) {
                                document.documentElement.scrollTop = scroll;
                            } 
                            else {
                                cancelAnimationFrame(move);
                            }
                        }
                    });
                };
                requestAnimationFrame(pageMove);
                scroll = document.documentElement.scrollTop;
            });
        });
};

export default showMenu;