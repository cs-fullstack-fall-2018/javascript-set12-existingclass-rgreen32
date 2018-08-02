class Account{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}

function main() {
    var bank = new Account("Rey", 1000)
    bank.deposit(20)
    console.log(bank.balance())


    var Matt = new Account("Matt's account", 1000)
    var Yes = new Account("My Account", 0)

    Matt.withdrawal(100)
    Yes.deposit(100)

    console.log(Matt.balance())
    console.log(Yes.balance())
}

main()