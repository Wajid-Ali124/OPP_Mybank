class Customer {
    firstName;
    lastName;
    Gender;
    age;
    mobileNumber;
    bankAccount;
    constructor(fname, lname, gender, age, mobileNumber, bankAccount) {
        this.firstName = fname;
        this.lastName = lname;
        this.Gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    customerInfo() {
        console.log(`\tName: ${this.firstName} ${this.lastName}
        Age: ${this.age}
        Gender: ${this.Gender}
        Mobile: ${this.mobileNumber}
        Account Balance: ${this.bankAccount.accountBalance}`);
    }
}
export default Customer;
