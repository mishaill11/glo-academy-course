'use strict';

let money= +prompt('Ваш месячный доход?', 50000),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 500000,
    monthCosts1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    budgetMonthCosts1 = +prompt('Во сколько это обойдется?'),
    monthCosts2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    budgetMonthCosts2 = +prompt('Во сколько это обойдется?'),
    accumulatedMonth;

function getExpensesMonth() {
    return budgetMonthCosts1 + budgetMonthCosts2;
}

function getAccumulatedMonth() {
    return money - ((budgetMonthCosts1) + (budgetMonthCosts2));
}
accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth);
}

function showTypeof() {
    return 'money: ' + typeof money + ' income: ' + typeof income +' deposit: ' + typeof deposit;
}

function getStatusIncome() {
    return 'income length: ' + income.length;
}

console.log(getStatusIncome());
console.log(showTypeof());
console.log('Накопления за период: ', getTargetMonth() * accumulatedMonth);
console.log('Период: ', getTargetMonth());





