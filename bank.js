
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; 
}


BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Invalid deposit amount. Please deposit a positive amount.");
    }
};

BankAccount.prototype.withdraw = function(amount) {
    if (this.active && amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Invalid withdrawal or insufficient balance.");
    }
};

BankAccount.prototype.checkBalance = function() {
    console.log(`Account Balance for ${this.name}: $${this.balance}`);
};

BankAccount.prototype.isActive = function() {
    return this.active;
};


const account1 = new BankAccount(12345, "bhushan", "Savings", 1000);
const account2 = new BankAccount(67890, "nik", "Checking", 5000);


account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();

account2.deposit(1000);
account2.withdraw(600);
account2.checkBalance();


console.log(`Account 1 is active: ${account1.isActive()}`);
console.log(`Account 2 is active: ${account2.isActive()}`);


function getTotalBalance(accounts) {
    return accounts.reduce((total, account) => (account.isActive() ? total + account.balance : total), 0);
}


const accounts = [account1, account2];
const totalBalance = getTotalBalance(accounts);
console.log(`Total Balance of Active Accounts: $${totalBalance}`);
