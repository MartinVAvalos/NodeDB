class Client {

    constructor(firstName, lastName, email, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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

module.exports = Client;