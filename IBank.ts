interface IBankAccount {
  Debit(d: number): string;
  Credit(d: number): string;
}

export default IBankAccount;
