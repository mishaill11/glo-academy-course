const toggleMenu = () => {
    let menu = document.querySelector('menu'),
        body = document.querySelector('body');

    body.addEventListener('click', (event) => {
        let target = event.target;
            if (target.closest('.menu')) {
                menu.classList.add('active-menu');
            } else if (!target.closest('menu')){
                menu.classList.remove('active-menu');
            }
            if (target.closest('a')) {
                menu.classList.remove('active-menu');
            }    
    });
    
};

export default toggleMenu;