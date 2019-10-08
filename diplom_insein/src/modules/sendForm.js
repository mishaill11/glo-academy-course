'use strict';

const sendForm = (number) => {
    const form = document.querySelector(number);

    
    form.addEventListener('submit', event => {
        event.preventDefault();
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
                })
                .catch((error) => {
                    console.error(error);
                });
        for (let key of form.elements){
            if (key.type != 'submit'){
                key.value = '';
            }
        }        
    });
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
};

export default sendForm;