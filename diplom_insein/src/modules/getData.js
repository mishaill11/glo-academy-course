'use strict';

const getData = () => {
    const navListPopupRepair = document.querySelector('.nav-list-popup-repair'),
        navWrapRepair = document.querySelector('.popup-repair-types-tab'),
        popupRepairTypesContentTable = document.querySelector('.popup-repair-types-content-table'),
        switchInner = document.querySelector('#switch-inner');
    let popupRepairTypesContentTableList,
        tablePopup,
        popupButton,
        left = 0;

    fetch('./db/db.json')
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('status network not 200');
            }
            return response.json();
        })
        .then(data => {
            data.forEach((elem, i) => {
                const buttonPopup = document.createElement('button'),                    
                    tbodyPopup = document.createElement('tbody');
                let trPopup, td1, td2, td3, td4, td5;
                tablePopup = document.createElement('table');   
                tablePopup.classList.add('popup-repair-types-content-table__list');   
                buttonPopup.classList.add('button_o');
                buttonPopup.classList.add('popup-repair-types-nav__item');
                buttonPopup.textContent = elem.title;
                navListPopupRepair.appendChild(buttonPopup);
                tablePopup.appendChild(tbodyPopup);
                elem.priceList.forEach((elem, i) => {
                    trPopup = document.createElement('tr');
                    td1 = document.createElement('td');
                    td4 = document.createElement('td');
                    td5 = document.createElement('td');
                    td2 = document.createElement('td');
                    td3 = document.createElement('td');
                    td1.textContent = elem.typeService;
                    td4.textContent = 'Ед. измерения';
                    td5.textContent = 'Цена за ед.';
                    td2.textContent = elem.units;
                    td3.textContent = elem.cost;
                    td1.classList.add('repair-types-name');
                    td4.classList.add('mobile-col-title');
                    td4.classList.add('tablet-hide');
                    td5.classList.add('mobile-col-title');
                    td5.classList.add('tablet-hide');
                    td4.classList.add('desktop-hide');
                    td5.classList.add('desktop-hide');
                    td2.classList.add('repair-types-value');
                    td3.classList.add('repair-types-value');
                    trPopup.classList.add('mobile-row');
                    trPopup.classList.add('showHide');
                    trPopup.appendChild(td1);
                    trPopup.appendChild(td4);
                    trPopup.appendChild(td5);
                    trPopup.appendChild(td2);
                    trPopup.appendChild(td3);
                    
                    tbodyPopup.appendChild(trPopup);
                });
            popupRepairTypesContentTable.appendChild(tablePopup);    
            });
            popupRepairTypesContentTableList = document.querySelectorAll('.popup-repair-types-content-table__list');
            popupButton = document.querySelectorAll('.popup-repair-types-nav__item');
            navWrapRepair.addEventListener('click', event => {
                let target = event.target;
                if (target.closest('.popup-repair-types-nav__item')){
                    popupButton.forEach((elem, i) => {
                        if (target === elem){
                            elem.classList.add('active');
                            popupRepairTypesContentTableList[i].style.display = 'block';
                            switchInner.textContent = elem.textContent;
                        } else if (target !== elem){
                            elem.classList.remove('active');
                            popupRepairTypesContentTableList[i].style.display = 'none';
                        }
                    });
                }
                if (target.closest('#nav-arrow-popup-repair_left')){
                    left -= 100;
                    if (left <= -3000){
                            left = 0;
                    }
                    popupButton.forEach(elem => {
                        elem.style.left = left + 'px';
                    });
                }
                if (target.closest('#nav-arrow-popup-repair_right')){
                    left += 100;
                    if (left >= 0){
                        left = 0;
                    }
                    popupButton.forEach(elem => {
                        elem.style.left = left + 'px';
                    });
                }
            });
        })
        .catch(error => {
            console.error(error);
        });

};

export default getData;