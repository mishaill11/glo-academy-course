'use strict';

const movePage = () => {
    const popupMenuNavItem = document.querySelectorAll('.popup-menu-nav__item'),
            scrollToDiv = document.querySelectorAll(`.main, .formula, .repair-types, .portfolio,
            .transparency, .problems, .designs, .director, .reviews, .scheme, .faq, .partners`),
            footerButton = document.querySelector('.button-footer');
            
    let scroll = document.documentElement.scrollTop;

    popupMenuNavItem.forEach(elem => {
        elem.addEventListener('click', event => {
            let id = event.target.hash,
                arrId = [...id];
            arrId.shift();
            arrId = arrId.join('');
            const pageMove = () => {
                let move = requestAnimationFrame(pageMove);
                scroll += 100;
                scrollToDiv.forEach(elem => {
                    if (arrId === elem.id) {
                        if (scroll <= elem.offsetTop) {
                            document.documentElement.scrollTop = scroll;
                        } 
                        else {
                            cancelAnimationFrame(move);
                            document.documentElement.scrollTop = elem.offsetTop;
                        }
                    }
                });
            };
            requestAnimationFrame(pageMove);
            scroll = document.documentElement.scrollTop;
        });
    });
    footerButton.addEventListener('click', () => {
        let scrollFromBottom = document.documentElement.scrollTop;
        
        const moveUp = () => {
            let move = requestAnimationFrame(moveUp);
            scrollFromBottom -= 200;
            if (scrollFromBottom > 0) {
                document.documentElement.scrollTop = scrollFromBottom;
            }else {
                cancelAnimationFrame(move);
                document.documentElement.scrollTop = 0;
            }
        };
        requestAnimationFrame(moveUp);
    });
};

export default movePage;