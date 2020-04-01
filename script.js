'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц");
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется", '');
    
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("something went wrong");
                i--;
            }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("Нищеброд");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Нууу пайдёёт");
    } else if (appData.moneyPerDay > 2000) {
        alert("Шикуешььь, мажор");
    } else {
        alert("что-то пошло не так...");
    }
}

detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i+1] = a;
    }
}

chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Сколько бабок имеешь, фраер?"),
            percent = +prompt("Процент какой хочешь, фраерок?");

        appData.monthIncome = save/100/12*percent;
        alert("В месяц доить нас будешь на: " + appData.monthIncome);
    }
}

checkSavings();




