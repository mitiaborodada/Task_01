
let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {   
    budget: money,
    timeDate: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let quastion1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    quastion2 = prompt("Во сколько обойдется?", ""),
    quastion3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    quastion4 = prompt("Во сколько обойдется", "");

appData.expenses.quastion1 = quastion2;
appData.expenses.quastion3 = quastion4;

let budget = appData.budget / 30;
alert(budget);