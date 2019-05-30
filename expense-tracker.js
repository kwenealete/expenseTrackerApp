const account = {
    name: 'Monya Kwene',
    expenses: [],
    addExpense : function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    income: [], 
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    } ,
    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;
        let accountBalance = 0
        this.expenses.forEach(function (expense) {
            return totalExpenses = totalExpenses + expense.amount
        });
        this.income.forEach(function(income) {
            return totalIncome = totalIncome +income.amount
        });
        accountBalance = totalIncome - totalExpenses
        return `${this.name} has an account balance of $${accountBalance}, with $${totalIncome} as income and $${totalExpenses} as expenses `
    }
};
account.addExpense('rent', 40000);
account.addIncome('eent', 400000);
console.log(account.getAccountSummary());
