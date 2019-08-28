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
    return prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(', ');
}

function deposit() {
    return confirm('Есть ли у вас депозит в банке?');
}

function getExpensesMonth() {
    let sum = 0;        
        for (let i = 0; i < 2; i++) {
            if (i === 0){
                monthCosts1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Sport');
            }
            if (i === 1){
                monthCosts1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Car');
            }
                sum += +prompt('Во сколько это обойдется?');
            while (isNaN(sum) || sum === '' || sum === null) {
                sum = 0;
                sum += +prompt('Во сколько это обойдется?');
            }
        }
    return sum;
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
    budgetDay = Math.floor(accumulatedMonth / 30);
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



