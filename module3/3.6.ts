{
    //Geeter and Setter with Access Modifiers in TypeScript ---> OOPS Concept


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

            set deposite(amount: number) {
                this._balance += amount
            }



            // addDeposit(amount: number): void {
            //     this._balance += amount
            // }

            // get balance method 
            get balance() {
                return this._balance
            }


            // getBalance(): number {
            //     return this._balance

            // }

        }




        const myAccount = new BankAccount(123456, 'John Doe', 1000);
        // myAccount.addDeposit(500);
        // console.log(`Account Number: ${myAccount.accountNumber}`);
        // console.log(`Account Holder: ${myAccount.name}`);
        // console.log(`Account Balance: ${myAccount.getBalance()}`); // Accessing balance via method


        myAccount.deposite = 500; // using setter to add deposit

        const newBalance = myAccount.balance; // using getter to access balance
        console.log(`Account Balance: ${newBalance}`); // Output: Account Balance: 1000

    }





}