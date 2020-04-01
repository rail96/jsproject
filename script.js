'use strict';

let person = {
    name: "Tom",
    age: 30,
    isGay: true
};

let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a = prompt("Введите обязательную статью расходов в этом месяце", "Еда");
let b = prompt("Во сколько обойдется", 0);
let a1 = prompt("Введите обязательную статью расходов в этом месяце", "Еда");
let b1 = prompt("Во сколько обойдется", 0);
appData.expenses.a = b;
appData.expenses.a1 = b1;

alert(money / 30);
console.log(appData.expenses.a);



