let money = 555239,
    income = 'фриланс',
    addExpenses = 'Машина, Туризм, Здоровье',
    deposit = true,
    mission = 1000000,
    period = 6,
    budgetDay = money/30;

console.log('money: ', typeof money,
    'income: ', typeof income,
    'deposit: ', typeof deposit);

console.log('length: ', income.length);

console.log('Период '+ period + ' месяцев');

console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

console.log(addExpenses.toLowerCase().split(', '));

console.log('budgetDay: ', budgetDay,'Остаток от деления: ', budgetDay % 30);

