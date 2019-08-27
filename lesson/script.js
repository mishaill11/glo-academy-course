'use strict';

let str = '   строка с пробелами в начале и в конце возможно длиной больше 30 символов     ';

function funcStr(str) {
    if (typeof str !== typeof str.toString()) {
        return 'Введена не строка'; 
    } else if ((typeof str === typeof str.toString()) && (str.length >= 30)) {
        return str.substr(0, 30).trim() + '...';
    } else if (str.length < 30) {
        return str.trim();
    }
}

console.log(funcStr(str));





