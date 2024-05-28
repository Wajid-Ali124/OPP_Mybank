import Bank from "./BankAccount.js";

class Customer {
  firstName: string;
  lastName: string;
  Gender: string;
  age: number;
  mobileNumber: string;
  bankAccount: Bank;

  constructor(fname: string, lname: string, gender: string, age: number, mobileNumber: string, bankAccount: Bank) {
    this.firstName = fname;
    this.lastName = lname;
    this.Gender = gender;
    this.age = age;
    this.mobileNumber = mobileNumber;
    this.bankAccount = bankAccount;
  }

  public customerInfo() {
    console.log(`\tName: ${this.firstName} ${this.lastName}
        Age: ${this.age}
        Gender: ${this.Gender}
        Mobile: ${this.mobileNumber}
        Account Balance: ${this.bankAccount.accountBalance}`);
  }
}

export default Customer;
