'use strict';
//первое задание
let set, arr = ['2345', '44345', '2546', '4234', '2575', '2888', '45656'];

set = prompt('Введите 2 или 4');

arr.forEach(function(item) {
    if (item.substr(0, 1) === set){
        console.log(item);
    }
});


//второе задание
 
function numbers() {
    for (let i = 0; i < 100; i++) {
        if ((i % 2 !== 0 || i === 2) && (i % 3 !== 0 || i === 3) && 
        (i % 5 !== 0 || i === 5) && (i % 7 !== 0 || i === 7)) {
            console.log(i + ' Делители этого числа: 1 и ' + i);
        }
    }
}

numbers();




