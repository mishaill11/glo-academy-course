const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        slider = document.querySelector('.portfolio-content');
    
    let dot = document.querySelectorAll('.dot'),
        currentSlide = 0,
        interval;

    const createDot = () => {
        let ulDots = document.querySelector('.portfolio-dots'),
            dots;
        
        for (let i = 0; i <= slide.length - 1; i++){
            dots = document.createElement('li');
            dots.classList.add('dot');
            if (i === 0 ){
                dots.classList.add('dot-active');
            }
            ulDots.appendChild(dots);
        }
        
        dot = document.querySelectorAll('.dot');
    };

    createDot();

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
        
    };
    
    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.matches('#arrow-right, #arrow-left, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
        let target = event.target;
        if (target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        let target = event.target;
        if (target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
            startSlide();
        }
    });

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    startSlide(1500);
    const stopSlide = () =>{
        clearInterval(interval);
    };

};

export default slider;