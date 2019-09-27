const comand = () => {
    const imgs = document.querySelectorAll('.command__photo');
    
    imgs.forEach((elem) =>{
        let src = elem.src;
        elem.addEventListener('mouseenter', (event) => {
            event.target.src = event.target.dataset.img;
        });
        elem.addEventListener('mouseleave', (event) => {
            event.target.src = src;
        });
    });
};

export default comand;