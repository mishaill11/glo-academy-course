const movePage = () => {
    let menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li>a'),
        scrollBtn = document.querySelector('a[href="#service-block"]'),
        allDiv = document.querySelectorAll('#service-block, #portfolio, #calc, #companies, #command, #connect'),
        scroll = document.documentElement.scrollTop;
    
    menuItems.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            let hash = event.target.hash,
                arrHash = [...hash];
            arrHash.shift();
            arrHash = arrHash.join('');
            function pageMove() {
                let move = requestAnimationFrame(pageMove);
                scroll+=23.5;
                allDiv.forEach((elem) => {
                    if (arrHash === elem.id) {
                        if (scroll <= elem.offsetTop){
                            document.documentElement.scrollTop = scroll;
                        } 
                        else {
                            cancelAnimationFrame(move);
                        }
                    }
                });
            }
            requestAnimationFrame(pageMove);
            scroll = document.documentElement.scrollTop;
        });
    });
    
    function firstSlide(){
        let move = requestAnimationFrame(firstSlide);
        scroll+=10;
        if (scroll <= allDiv[0].offsetTop){
            document.documentElement.scrollTop = scroll;
        } 
        else {
            cancelAnimationFrame(move);
        }
    }

    scrollBtn.addEventListener('click', () => {
        requestAnimationFrame(firstSlide);
        scroll = document.documentElement.scrollTop; 
    });
};

export default movePage;
