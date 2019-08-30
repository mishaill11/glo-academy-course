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
    income: 'Фриланс',
    mission: 500000,
    period: 0,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {},
    deposit: false,
    addExpenses: [],
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
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
        appData.period = appData.mission / appData.budgetMonth;
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
    }
};
appData.asking();
appData.getExpensesMonth();    
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

function about() {
    console.log('Наша программа включает в себя данные: ');
    for (let key in appData) {
        console.log(key);
    }
}

console.log('Месячные расходы: ', appData.expensesMonth);
console.log('Период накопления: ', appData.period < 0 ? 'Цель не будет достигнута' : (Math.ceil(appData.period)) + ' месяцев');
about();



