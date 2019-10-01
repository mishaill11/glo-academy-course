document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
        const promise = new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', './cars.json');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4){
                    return;
                }
                if(request.status === 200) {
                    resolve(request);
                } else {
                    reject();
                }
            });
           
        });
        promise
            .then((request) => {
                const data = JSON.parse(request.responseText);
                data.cars.forEach(item => {
                if (item.brand === select.value) {
                const {brand, model, price} = item;
                
                output.innerHTML = `Тачка ${brand} ${model} <br>
                Цена: ${price}$`;
                }
                
            });})
            .catch(() => {
                output.innerHTML = 'Произошла ошибка';
            });
        
    });
    
        

});