class Bank {
    accountBalance;
    constructor() {
        this.accountBalance = 100;
    }
    Debit(amount) {
        let statement = "Sorry you have insufficient Balance!";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this.accountBalance > amount) {
                this.accountBalance -= amount;
                statement = "Transaction successful new account balance is: " + this.accountBalance;
            }
            else {
                statement = "You don't have enough money to do this transaction";
            }
        }
        return statement;
    }
    Credit(amount) {
        let statement = "Transaction Failed";
        if (amount > 0) {
            this.accountBalance += amount;
            if (this.accountBalance > 100) {
                this.accountBalance -= 1;
            }
            statement = "Your account has been credited Successfully";
        }
        return statement;
    }
}
export default Bank;
