class Client {
    constructor() {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
    
    withdraw(money) {
        this.balance -= money;
        return this.balance
    }

    deposit(money) {
        this.balance += money;
        return this.balance
    }
}