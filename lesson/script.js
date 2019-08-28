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
//простой способ
// let simple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// simple.forEach(function(item) {
//     console.log(item + ' Делители этого числа: ' + '1 и ' + item);
// });

//способ посложнее
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
    17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,
    33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
    48,49,50,51,52,53,54,55,56,57,58,59,60,61,
    62,63,64,65,66,67,68,69,70,71,72,73,74,75,
    76,77,78,79,80,81,82,83,84,85,86,87,88,
    89,90,91,92,93,94,95,96,97,98,99,100];

numbers.forEach(function(item) {
    if ((item % 2 !== 0 || item === 2) && (item % 3 !== 0 || item === 3) && 
    (item % 5 !== 0 || item === 5) && (item % 7 !== 0 || item === 7)) {
        console.log(item + 'Делители этого числа: 1 и ' + item);
    }
});

'use strict';

let money,
    income = 'Фриланс',
    mission = 500000,
    period,
    budgetDay,
    monthCosts1,
    monthCosts2,
    getExpensesMonthOne,
    accumulatedMonth,
    startOne,
    getTargetMonthOne,
    rem;


function start() {
    do{
        money = prompt('Ваш месячный доход?', 50000);
        return money;
    }
    while(isNaN(money) || money === '' || money === null);
}
startOne = start();

function addExpenses() {
    return prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(',');
}

function deposit() {
    return confirm('Есть ли у вас депозит в банке?');
}

function getExpensesMonth() {
    let sum = 0;
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                monthCosts1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Спорт');
            }
            if (i === 1) {
                monthCosts2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Отдых');
            }
            sum += +prompt('Во сколько это обойдется?');    
        }
    if (isNaN(sum)) {
        getExpensesMonth();
    }else{
        return +sum;
    }
}

getExpensesMonthOne = getExpensesMonth();

function getAccumulatedMonth() {
    return startOne - getExpensesMonthOne;
}
accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    period = Math.ceil(mission / accumulatedMonth);
    if (period < 0) {
        return 'Цель не будет достигнута';
    } else {
        return period;
    }
}

getTargetMonthOne = getTargetMonth();

function budgetDayOne() {
    budgetDay = Math.floor(getExpensesMonthOne / 30);
    if (budgetDay < 0) {
        return 'Что-то пошло не так';
    }else {
        return budgetDay;
    }
}

function showTypeof() {
    return 'money: ' + typeof money + ' income: ' + typeof income +' deposit: ' + typeof deposit;
}

function getStatusIncome() {
    return 'income length: ' + income.length;
}

console.log('Money: ', startOne);
console.log(addExpenses());
console.log(deposit());
console.log(getStatusIncome());
console.log(showTypeof());
console.log('Месячные расходы: ', getExpensesMonthOne);
console.log('Бюджет на день: ', budgetDayOne());
console.log('Накопления за период: ', getTargetMonthOne * accumulatedMonth);
console.log('Период накопления: ', getTargetMonthOne);



