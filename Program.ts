#! /usr/bin/env node

import Bank from "./BankAccount.js";
import Customer from "./Customer.js";

let bankAccount = new Bank();

console.log(bankAccount.Credit(50000));

let wajid = new Customer("Wajid", "Ali", "Male", 21, "+923022304253", bankAccount);

wajid.customerInfo();
