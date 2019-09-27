const sendForm = (wind) => {
    // const errorMessage = 'Что-то пошло не так...',
    //     loadMessage = 'Загрузка...',
    //     successMessage = 'Спасибо!';

    const form = document.querySelector(wind);
    const inp = document.querySelectorAll('input[type="text"], .mess');
    inp.forEach(elem =>{
        elem.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[A-Za-z0-9./,'"!&?*%]+/, '');
        });
    });
    
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
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.innerHTML = `<img style='width: 50px; height: 50px;' src='./images/imgs/okey.png'>`;
            })
            .catch((error) => {
                statusMessage.innerHTML = `<img style='width: 50px; height: 50px;' src='./images/imgs/error.png>`;
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