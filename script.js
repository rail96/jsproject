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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется", '');
        
                if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
                && a != '' && b != '' && a.length < 50) {
                    console.log("done");
                    appData.expenses[a] = b;
                } else {
                    console.log("something went wrong");
                    i--;
                }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            alert("Нищеброд");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert("Нууу пайдёёт");
        } else if (appData.moneyPerDay > 2000) {
            alert("Шикуешььь, мажор");
        } else {
            alert("что-то пошло не так...");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Сколько бабок имеешь, фраер?"),
                percent = +prompt("Процент какой хочешь, фраерок?");
    
            appData.monthIncome = save/100/12*percent;
            alert("В месяц доить нас будешь на: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i+1] = a;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую) ', "");
        while (!isNaN(items) || items == "" || items == null){
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую) ', "");
        }
        this.income = items.split(', ');
        this.income.push(prompt("Ничё не забыл, Вася?", "no"));
        this.income.sort();

        appData.income.forEach(function(item, i) {
                alert("Способы доп заработка: " + (i + 1) + ': ' + item);
        });
    },
};

for(let item in appData){
    console.log("Наша программа включает в себя след данные: " + item + " - " + appData[item]);
}






