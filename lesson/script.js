'use strict';

let money;

function start() {
    do{
        money = prompt('Ваш месячный доход?', 50000);
    }
    while(isNaN(money) || money === '' || money === null);
}
start();

let appData = {
    income: {},
    mission: 500000,
    period: 0,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {},
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    addExpenses: [],
    possibleExpenses: [],
    asking: function() {

        if (confirm('Есть ли у вас доп. источник зароботка?')) {
            let itemIncome, cashIncome;
            do {
                itemIncome = prompt('Какой у вас есть дополнительный зароботок?', 'Инструктор');
            } while (!isNaN(itemIncome) || itemIncome == null);
            do {
                cashIncome = prompt('Какой доход в месяц с доп.зароботка?', 12000);
            } while (isNaN(cashIncome) || cashIncome == '' || cashIncome == null);
            appData.income[itemIncome] = cashIncome;
        }
        let arrayExpenses = [], addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        for (let key in appData.addExpenses) {
            let possibleExpenses = appData.addExpenses[key];
            possibleExpenses = possibleExpenses.trim();
            possibleExpenses = possibleExpenses[0].toUpperCase() + possibleExpenses.slice(1).toLowerCase();
            arrayExpenses.push(possibleExpenses);
        }
        appData.possibleExpenses = arrayExpenses.join(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let answer = 0, question;        
        for (let i = 0; i < 2; i++) {
            if (i === 0){
                do{
                    question = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Sport');
                    answer = +prompt('Во сколько это обойдется?'); 
                    appData.expenses[question] = answer;
                } while (isNaN(answer) || answer == '' || answer == null);
            }
            if (i === 1){
                do {
                    question = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Car');
                    answer = +prompt('Во сколько это обойдется?');
                    appData.expenses[question] = answer;
                } while (isNaN(answer) || answer == '' || answer == null);
            }     
        }
    },
    getExpensesMonth: function() {
        let sum = 0;
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        appData.period = Math.ceil(appData.mission / appData.budgetMonth);
    },
    getStatusIncome: function() {
        if (appData.budgetDay >= 800) {
            console.log('Высокий уровень дохода');
        } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
            console.log('Средний уровень дохода');
        } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
            console.log('Низкий уровень дохода');
        } else if (appData.budgetDay < 0) {
            console.log('Что то пошло не так');
        }
    },
    getInfoDeposit: function() {
        if (appData.deposit){
            do {
                appData.percentDeposit = prompt('Какой ваш годовой процент?', 10);
            } while (isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null);
            do{    
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null);
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    }
};
appData.asking();
appData.getExpensesMonth();    
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();

function about() {
    console.log('Наша программа включает в себя данные: ');
    for (let key in appData) {
        console.log(key);
    }
}

console.log('Возможные расходы: ', appData.possibleExpenses);
console.log('Месячные расходы: ', appData.expensesMonth);
console.log('Накопления за период', appData.calcSavedMoney());
console.log('Процент: ', appData.percentDeposit,' Сумма: ', appData.moneyDeposit);
console.log('Период накопления: ', appData.period < 0 ? 'Цель не будет достигнута' : appData.period + ' месяцев');
about();



