{
    //static private balance: number; --- IGNORE ---
    //Access Modifiers in TypeScript


    class Counter {
        static count: number = 0;

        static incriment() {
            return (Counter.count += 1)
        }

        static decrimnet() {
            return (Counter.count -= 1)
        }



    }



    console.log(Counter.incriment());
    console.log(Counter.decrimnet());
    console.log(Counter.incriment());






















    //
}
