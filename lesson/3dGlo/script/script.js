window.addEventListener('DOMContentLoaded', () => {
'use strict';

    function countTimer() {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
        let dateStop = new Date('13 september 2019 07:51:00'),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            second = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining,dateStop, hours, minutes, second};
        }
        
        function updateClock(){
            let timer = getTimeRemaining();
            if (timer.timeRemaining > 0) {
                    timerHours.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
                    timerMinutes.textContent = timer.minutes < 10 ? '0'+ timer.minutes : timer.minutes;
                    timerSeconds.textContent = timer.second < 10 ? '0'+ timer.second : timer.second;
            }
            if (timer.timeRemaining <= 0) {
                timerHours.nextElementSibling.style.color = 'red';
                timerMinutes.nextElementSibling.style.color = 'red';
                timerHours.style.color = 'red';
                timerMinutes.style.color = 'red';
                timerSeconds.style.color = 'red';
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(time);
            }
        }
        let time = setInterval(updateClock, 1000);   
    }
    countTimer();

    function toggleMenu() {
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
        
    }
    toggleMenu();

    function movePage() {
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
    }
    movePage();

    function showPopup() {
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
    }
    showPopup();

    function tabs() {
        let tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');
            if (target){
                tab.forEach((item, i) => {
                    if (item === target) {
                        item.classList.add('active');
                        tabContent[i].classList.remove('d-none');
                    } else {
                        item.classList.remove('active');
                        tabContent[i].classList.add('d-none');
                    }
                });
            }
        });    
    }
    tabs();

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
    slider();

    class SliderCarousel {
        constructor({
            main,
            wrap,
            next,
            prev,
            infinity = false,
            slidesToShow = 3,
            position = 0,
            responsive = []
        }){
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100/ this.slidesToShow)
            };
            this.responsive = responsive;
        }

        init(){
            this.addGloClass();
            this.addStyle();
            if (this.prev && this.next) {
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }
            if (this.responsive) {
                this.responseInit();
            }
        }
        addGloClass() {
            this.main.classList.add('glo-slider');
            this.wrap.classList.add('glo-slider__wrap');
            for ( const item of this.slides) {
                item.classList.add('glo-slider__item');
            }
        }
        addStyle(){
            let style = document.getElementById('sliderCarousel-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'sliderCarousel-style';
            }
             
            
            document.head.appendChild(style);
            style.textContent = `
            .glo-slider{
                overflow: hidden !important; 
            }
            .glo-slider__wrap {
                display: flex  !important; 
                transition: transform 0.5s  !important; 
                will-change: transform  !important; 
            }
            .glo-slider__item{
                flex: 0 0 ${this.options.widthSlide}% !important; 
                margin: auto 0  !important; 
            }
            
            `;
        }

        controlSlider(){
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }
        addArrow(){
            this.prev = document.createElement('button');
            this.next = document.createElement('button');

            this.prev.className = 'glo-slider__prev';
            this.next.className = 'glo-slider__next';

            this.main.appendChild(this.prev);
            this.main.appendChild(this.next);
            const style = document.createElement('style');
            style.textContent = `
            .glo-slider__prev,
            .glo-slider__next{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }
            .glo-slider__next {
                border-left-color: #19b5fe;
            }
            .glo-slider__prev {
                border-right-color: #19b5fe;
            }`;
            document.head.appendChild(style);
            
        }
        prevSlider(){
            if(this.options.infinity || this.options.position > 0){
            --this.options.position;
            if (this.options.position < 0){
                this.options.position = this.slides.length - this.slidesToShow; 
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }
        nextSlider(){
            if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidesToShow){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            }
        }
        responseInit(){
            const slidesToShowDefault = this.slidesToShow;
            const allResponse = this.responsive.map(item => item.breakpoint);
            const maxResponse = Math.max(...allResponse);
            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if (widthWindow < maxResponse){
                    for (let i = 0; i < allResponse.length; i++){
                        if (widthWindow < allResponse[i]){
                            this.slidesToShow = this.responsive[i].slideToShow;
                            this.options.widthSlide = Math.floor(100/this.slidesToShow);
                            this.addStyle();
                        } 
                    }
                } else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100/this.slidesToShow);
                    this.addStyle();
                }
            };
            checkResponse();

            window.addEventListener('resize', checkResponse);
        }
    }
    const options = {
            main: '.companies-wrapper',
            wrap: '.companies-hor',
            
            slidesToShow: 4,
            infinity: true,
            responsive: [{
                breakpoint: 1024,
                slideToShow: 3
            },{
                breakpoint: 768,
                slideToShow: 2
            },{
                breakpoint: 576,
                slideToShow: 1
            }]
        };

    const carousel = new SliderCarousel(options);

    carousel.init();
    
    const calc = (price) => {
        const calcInput = document.querySelectorAll('input[type="number"]'),
            calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            totalValue = document.querySelector('#total');
        
        calcInput.forEach((elem) => {
            if(elem.value != /\d/) {
                elem.value.replace(/[a-z]/i, '');
            }
        });
        
        const countSum = () => {
            let total = 0,
            countValue = 1,
            dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcInput[0].value;
            
            if(calcInput[1].value > 1) {
                countValue += (calcInput[1].value - 1) / 10;
            }

            if (calcInput[2].value && calcInput[2].value < 5) {
                dayValue *= 2;
            } else if (calcInput[2].value && calcInput[2].value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
            }
            if (total > 0) {
                let num = 0;
                let interval = setInterval(() => {                   
                    totalValue.textContent = num+=50;
                    if (num >= total) {
                        totalValue.textContent = num-(num-total);
                        clearInterval(interval);    
                    }
                }, 1);
            }
            
        };
        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };
    calc(100);

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
    comand();

    const sendForm = (wind) => {
        // const errorMessage = 'Что-то пошло не так...',
        //     loadMessage = 'Загрузка...',
        //     successMessage = 'Спасибо!';

        const form = document.querySelector(wind);
        
        
        const statusMessage = document.createElement('div');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.style.color = `#fff`;
            statusMessage.innerHTML = `<img style='width: 50px; height: 50px;' src='./images/imgs/loading.gif'>`;

            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) =>{
                body[key] = val;
            });
            postData(body, () => {
                statusMessage.innerHTML = `<img style='width: 50px; height: 50px;' src='./images/imgs/okey.png'>`;
            }, (error) => {
                statusMessage.innerHTML = `<img style='width: 50px; height: 50px;' src='./images/imgs/error.png>`;
                console.error(error);
            });
            for (let key of form.elements){
                if (key.type != 'submit'){
                    key.value = '';
                }
            }
        });

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status); 
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        };
    };
    sendForm('#form1');
    sendForm('#form2');
    sendForm('#form3');
    
});