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
    getTargetMonthOne;


function start() {
    do{
        money = prompt('Ваш месячный доход?', 50000);
    }
    while(isNaN(money) || money === '' || money === null);
    return money;
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
    return mission / accumulatedMonth;
}

getTargetMonthOne = getTargetMonth();

budgetDay = Math.floor(accumulatedMonth / 30);

function showTypeof() {
    return 'money: ' + typeof money + ' income: ' + typeof income +' deposit: ' + typeof deposit;
}


let getStatusIncome = function(){
    if (budgetDay >= 800) {
        console.log('Высокий уровень дохода');
    } else if (budgetDay >= 300 && budgetDay < 800) {
        console.log('Средний уровень дохода');
    } else if (budgetDay >= 0 && budgetDay < 300) {
        console.log('Низкий уровень дохода');
    } else if ( budgetDay < 0) {
        console.log('Что то пошло не так');
    }
};

console.log('Money: ', money);
console.log(addExpenses());
console.log(deposit());
console.log('Уровень дохода: ', getStatusIncome());
console.log(showTypeof());
console.log('Месячные расходы: ', getExpensesMonthOne);
console.log('Бюджет на день: ', budgetDay < 0 ? 'Что то пошло не так' : budgetDay);
console.log('Накопления за период: ', getTargetMonthOne * accumulatedMonth);
console.log('Период накопления: ', getTargetMonthOne < 0 ? 'Цель не будет достигнута' : Math.ceil(getTargetMonthOne));



