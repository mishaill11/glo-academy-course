'use strict';

const sendForm = (number) => {
    const form = document.querySelector(number),
        popupThank = document.querySelector('.popup-thank');

    
    form.addEventListener('submit', event => {
        event.preventDefault();
        const elementsForm = [...form.elements].filter(item => {
            
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
        });

        const isEmpty = (elementsForm) => {
            let numOfEmpty = 0;
            elementsForm.forEach((elem, i) => {
                if (elem.matches('.checkbox__input')){ 
                    if(!(elem.checked)) {
                        numOfEmpty++;
                    }
                } else if (elem.value === ''){
                    numOfEmpty++;
                }
            });
            
            if (numOfEmpty) {
                return true;
            } else {
                return false;
            } 
        };

        if (isEmpty(elementsForm)) {
            return;
        } else {
        const formData = new FormData(form);
        
        let body = {};
        formData.forEach((val, key) =>{
            body[key] = val;
        });
        
        postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    popupThank.style.visibility = 'visible'; 
                })
                .catch((error) => {
                    console.error(error);
                });

                for (let key of form.elements){
                    if (key.type != 'submit'){
                        key.value = '';
                    }
                }
        }        
    });
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'default'
        });
    };
    popupThank.addEventListener('click', (event) => {
        let target = event.target;
        
        if ((target.closest('.close-thank') || !target.closest('.popup-thank-bg'))) {
            popupThank.style.visibility = 'hidden'; 
        }
    });
};

export default sendForm;