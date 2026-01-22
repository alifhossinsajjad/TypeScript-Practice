{
    // inheritance in oop 


    class Parent {
        name: string;
        age: number;
        address: string;


        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }


        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }





    class Student extends Parent {



        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }



    }


    const student1 = new Student("abul", 23, "dhaka");
    console.log(student1);




    class Teacher {
        name: string;
        age: number;
        address: string;
        designation: string;


        constructor(name: string, age: number, address: string, designation: string) {
            this.name = name;
            this.age = age;
            this.address = address;
            this.designation = designation;
        }


        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }


        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} classes`);
        }





    }

    const teacher = new Teacher("bodna", 45, "dhaka", "math teacher");
    console.log(teacher);




    //
}