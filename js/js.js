'use strict';

let nachatRaschetBtn = document.getElementById('start'),

    budget = document.getElementsByClassName('budget-value')[0],
    daylyBudget = document.getElementsByClassName('daybudget-value')[0],
    incomeLevel = document.getElementsByClassName('level-value')[0],
    requiredExpenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    extraIncome = document.getElementsByClassName('income-value')[0],
    monthlySaving = document.getElementsByClassName('monthsavings-value')[0],
    yearlySaving = document.getElementsByClassName('yearsavings-value')[0],

    expensesItems = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;


nachatRaschetBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц");
    }
    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
    
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i--;
            }
    }
    requiredExpenses.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let a = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = a;
        optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +requiredExpenses.textContent) / 30).toFixed();
        daylyBudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            incomeLevel.textContent = "Нищеброд";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            incomeLevel.textContent = "Нууу пайдёёт";
        } else if (appData.moneyPerDay > 2000) {
            incomeLevel.textContent = "Шикуешььь, мажор";
        } else {
            incomeLevel.textContent = "что-то пошло не так...";
        }
    } else {
        daylyBudget.textContent = "Произошла ошибка, бюджет не определен";
    }

});

incomeItem.addEventListener('change', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    extraIncome.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }

});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthlySaving.textContent = appData.monthIncome.toFixed(1);
        yearlySaving.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthlySaving.textContent = appData.monthIncome.toFixed(1);
        yearlySaving.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};