//OOP in 4 modules and name

/* 
1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation

*/



{
    //Polymorphism 



    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hours`);
        }
    }



    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hours`);
        }

    }


    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 5 hours`);
        }
    }



    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    person1.getSleep();
    person2.getSleep();
    person3.getSleep();




    //


    class Shape {
        getArea(): number {
            return 0;
        }
    }


    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }


    class Reactangle extends Shape {
        height: number;
        weidth : number;
        constructor(height: number, weidth: number) {
            super();
            this.height = height;
            this.weidth = weidth;
        }
        getArea(): number {
            return this.height * this.weidth;
        }
    }
       
const getShapeAre = (param : Shape) => {
    console.log(param.getArea());
}
    

const shape1 = new Circle(5);
const shape2 = new Reactangle(4,5);

getShapeAre(shape1);
getShapeAre(shape2);


}


















    //
