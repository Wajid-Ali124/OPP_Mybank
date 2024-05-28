import IBankAccount from "./IBank.js";

class Bank implements IBankAccount {
  accountBalance: number;

  constructor() {
    this.accountBalance = 100;
  }

  Debit(amount: number): string {
    let statement = "Sorry you have insufficient Balance!";

    if (amount > 0) {
      statement = "The amount you entered is wrong!";
      if (this.accountBalance > amount) {
        this.accountBalance -= amount;
        statement = "Transaction successful new account balance is: " + this.accountBalance;
      } else {
        statement = "You don't have enough money to do this transaction";
      }
    }

    return statement;
  }

  Credit(amount: number): string {
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
