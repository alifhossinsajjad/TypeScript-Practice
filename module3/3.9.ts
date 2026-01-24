{
    //Abstraction in TypeScript : 1 . interfaces 2 . abstract class

    //idea 
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }



    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`i am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`i am stopping the car engine`);
        }
        move(): void {
            console.log(`i am moving the car`);
        }
        test() {
            console.log(`test method`);
        }
    }
    const toyotaCar = new Car1()
    toyotaCar.startEngine();
    toyotaCar.move();
    toyotaCar.stopEngine();
    toyotaCar.test();



    //Abstract Class

    abstract class Vehicle2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;

        test() {
            console.log(`test method in abstract class`);
        }
    }

    class Bike extends Vehicle2 {
        startEngine(): void {
            console.log(`i am starting the bike engine`)
        }
        stopEngine(): void {
            console.log(`i am stopping the bike engine`)
        }
        move(): void {
            console.log(`i am moving the bike`)
        }
    }



    //
}