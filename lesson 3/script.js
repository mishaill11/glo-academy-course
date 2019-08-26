'use strict';

let money= +prompt('Ваш месячный доход?'),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 500000,
    monthCosts1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    monthCosts2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    budgetMonthCosts1 = +prompt('Во сколько это обойдется?'),
    budgetMonthCosts2 = +prompt('Во сколько это обойдется?'),
    budgetMonth  = money - ((budgetMonthCosts1) + (budgetMonthCosts2)),
    period = Math.ceil(mission / budgetMonth),
    budgetDay = Math.floor(budgetMonth / 30);


addExpenses = addExpenses.split(',');

if (budgetDay >= 800) {
    console.log('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800) {
    console.log('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300) {
    console.log('Низкий уровень дохода');
} else if ( budgetDay < 0) {
    console.log('Что то пошло не так');
}

console.log('income length: ', income.length);
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log('addExpenses: ', addExpenses);
console.log('money: ' + typeof money,'income: ' + typeof income,'deposit: ' + typeof deposit);
console.log('Бюджет на месяц: ', budgetMonth);
console.log('Цель будет достигнута за: ' + period + ' месяцев');
console.log('Бюджет на день: ', budgetDay);





