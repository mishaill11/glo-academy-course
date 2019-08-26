'use strict';

let money,
    income,
    addExpenses,
    deposit,
    mission = 500000,
    period,
    budgetDay,
    budgetMonth,
    monthCosts1,
    monthCosts2,
    budgetMonthCosts1,
    budgetMonthCosts2;

money = prompt('Ваш месячный доход?');    
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = addExpenses.split(',');
deposit = confirm('Есть ли у вас депозит в банке?');
monthCosts1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
budgetMonthCosts1 = prompt('Во сколько это обойдется?');
monthCosts2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
budgetMonthCosts2 = prompt('Во сколько это обойдется?');
budgetMonth = (Number(money) - (Number(budgetMonthCosts1) + Number(budgetMonthCosts2)));
period = Math.ceil(mission / budgetMonth);
budgetDay = Math.floor(budgetMonth / 30);

if (budgetDay >= 800) {
    console.log('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800) {
    console.log('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300) {
    console.log('Низкий уровень дохода');
} else if ( budgetDay < 0) {
    console.log('Что то пошло не так');
}

console.log('addExpenses: ', addExpenses);
console.log('money: ' + typeof money,'addExpenses: ' + typeof addExpenses,'deposit: ' + typeof deposit);
console.log('Бюджет на месяц: ', budgetMonth);
console.log('Цель будет достигнута за: ' + period + ' месяцев');
console.log('Бюджет на день: ', budgetDay);





