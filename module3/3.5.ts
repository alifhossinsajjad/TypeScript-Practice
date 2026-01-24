{
    //Access Modifiers in TypeScript

    class BankAccount {
        public readonly accountNumber: number;
        public name: string
        protected _balance: number;




        constructor(accountNumber: number, name: string, balance: number) {
            this.accountNumber = accountNumber
            this.name = name
            this._balance = balance
        }

        addDeposit(amount: number): void {
            this._balance += amount
        }


        getBalance(): number {
            return this._balance

        }

    }


    class StudentAccount extends BankAccount {
        constructor(accountNumber: number, name: string, balance: number) {
            super(accountNumber, name, balance)
        }
        useBalance(): number {
            return this._balance
        }
    }


    const myAccount = new BankAccount(123456, 'John Doe', 1000);
    myAccount.addDeposit(500);
    console.log(`Account Number: ${myAccount.accountNumber}`);
    console.log(`Account Holder: ${myAccount.name}`);
    console.log(`Account Balance: ${myAccount.getBalance()}`); // Accessing balance via method


}