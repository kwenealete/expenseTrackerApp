const account = {
    name: 'Monya Kwene',
    expenses: [],
    addExpense : function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        this.expenses.forEach(function (expense) {
            return totalExpenses = totalExpenses + expense.amount
        })
        return `${this.name} has $${totalExpenses} in expenses `
    }
};
account.addExpense('rent', 40000);
console.log(account.getAccountSummary());
