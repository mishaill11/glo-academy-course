const showPopup = () => {
    let popup = document.querySelector('.popup'),
    popupContent = document.querySelector('.popup-content'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    count = 20;

    popupContent.style.transform = `translateY(-100%)`;
    popupContent.style.opacity = '0';

    function step(){
        let move = requestAnimationFrame(step);
        count--;
        if (count >= 0 && document.documentElement.clientWidth >= 600){
            popupContent.style.transform = `translateY(-${count}%)`;
            popupContent.style.opacity = '1';
            popupContent.style.transition = 'opacity .5s';                
        } else {
            popupContent.style.transform = `translateY(0)`;
            cancelAnimationFrame(move);
        }
    }

    popup.addEventListener('click', (event) => {
        let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
                popupContent.style.transform = `translateY(-100%)`;
                popupContent.style.opacity = '0';
                count = 20;
            }else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                    popupContent.style.opacity = '0';
                    popupContent.style.transform = `translateY(-100%)`;
                    count = 20;
                }
            }
    });

    popupBtn.forEach((elem) => elem.addEventListener('click', () => {
        popup.style.display = 'block';
        requestAnimationFrame(step);
    }));
};

export default showPopup;
