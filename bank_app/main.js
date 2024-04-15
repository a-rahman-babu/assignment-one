class BankAccount {
   
    constructor(ownerName, balance=0) {
        this.accountName = ownerName;
        this.accountNumber = Date.now();
        this.balance = balance;
        console.log(`Owner Name.: ${ownerName}`);
        console.log(`A/c No.: ${this.accountNumber}`);
        console.log(`Opening Balance: ${this.balance}`);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log(`Can't withdraw: ${amount}`);
            console.log('Insufficient balance');
        }
    }

    getBalance() {
        console.log(`Account Balance: ${this.balance}`);
    }
}

// Create an BankAccount class
const displayAccountInfo = new BankAccount('Abdur', 0);

// Deposit money into the account
displayAccountInfo.deposit(500);

// Withdraw money from the account
displayAccountInfo.withdraw(800);

// Display the account balance
displayAccountInfo.getBalance();


//person 2
// Create an  BankAccount class
const displayAccountInfo2 = new BankAccount('babuy', 5000);

// Deposit money into the account
displayAccountInfo2.deposit(500);

// Withdraw money from the account
displayAccountInfo2.withdraw(400);

// Display the account balance
displayAccountInfo2.getBalance();


