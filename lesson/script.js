'use strict';

let money;

function start() {
    do{
        money = prompt('Ваш месячный доход?', 50000);
    }
    while(isNaN(money) || money === '' || money === null);
}
start();

// let income = 'Фриланс',
//     //mission = 500000,
//     period,
//     //budgetDay,
//     monthCosts1,
//     monthCosts2,
//     getExpensesMonthOne,
//     accumulatedMonth,
//     startOne,
//     getTargetMonthOne;

let appData = {
    income: 'Фриланс',
    mission: 500000,
    period: 0,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    accumulatedMonth: 0,
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
                } while (isNaN(answer) || answer === '' || answer === null);
            }
            if (i === 1){
                do {
                    question = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Car');
                    answer = +prompt('Во сколько это обойдется?');
                    appData.expenses[question] = answer;
                } while (isNaN(answer) || answer === '' || answer === null);
            }
            console.log(appData.expenses);      
        }
    },
    getExpensesMonth: function() {
        let sum = 0;
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
        console.log('expensesMonth: ' + appData.expensesMonth);
    },
    getAccumulatedMonth: function() {
        appData.accumulatedMonth = appData.budget - appData.expensesMonth;
        return appData.accumulatedMonth;
    },
    getTargetMonth: function() {
        appData.period = appData.mission / appData.accumulatedMonth;
        return appData.period;
    },
    getBudgetDay: function() {
        appData.budgetDay = Math.floor(appData.accumulatedMonth / 30);
        return appData.budgetDay;
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
appData.getAccumulatedMonth();
appData.getBudgetDay();
appData.getTargetMonth();
appData.getStatusIncome();



// function addExpenses() {
//     return prompt('Перечислите возможные расходы за рассчитываемый период через запятую').toLowerCase().split(', ');
// }

// function deposit() {
//     return confirm('Есть ли у вас депозит в банке?');
// }

// function getExpensesMonth() {
//     let sum = 0;        
//         for (let i = 0; i < 2; i++) {
//             if (i === 0){
//                 monthCosts1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Sport');
//             }
//             if (i === 1){
//                 monthCosts1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Car');
//             }
//                 sum += +prompt('Во сколько это обойдется?');
//             while (isNaN(sum) || sum === '' || sum === null) {
//                 sum = 0;
//                 sum += +prompt('Во сколько это обойдется?');
//             }
//         }
//     return sum;
// }

//getExpensesMonthOne = getExpensesMonth();

// function getAccumulatedMonth() {
//     return appData.budget - appData.getExpensesMonth();
// }
// accumulatedMonth = getAccumulatedMonth();

// function getTargetMonth() {
//     return mission / accumulatedMonth;
// }

//getTargetMonthOne = getTargetMonth();

//appData.budgetDay = Math.floor(appData.getAccumulatedMonth / 30);




// let getStatusIncome = function(){
//     if (budgetDay >= 800) {
//         console.log('Высокий уровень дохода');
//     } else if (budgetDay >= 300 && budgetDay < 800) {
//         console.log('Средний уровень дохода');
//     } else if (budgetDay >= 0 && budgetDay < 300) {
//         console.log('Низкий уровень дохода');
//     } else if ( budgetDay < 0) {
//         console.log('Что то пошло не так');
//     }
// };

console.log('Доход: ', appData.budget);
//console.log(appData.asking);

console.log('Месячные расходы: ', appData.expensesMonth);
console.log('Бюджет на день: ', appData.budgetDay < 0 ? 'Что то пошло не так' : appData.budgetDay);
console.log('Цель накопить: ' + appData.mission);
console.log('Период накопления: ', appData.period < 0 ? 'Цель не будет достигнута' : (Math.ceil(appData.period)) + ' месяцев');



