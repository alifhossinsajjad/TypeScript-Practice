{
    //type vs interface 
    //if we want to declare any object with type or interface.



    //type 
    type User1 = {
        name: string,
        age: number
    }


    //interface

    interface User2 {
        name: string,
        age: number
    }


    //intersection

    // we want any data extends with type then we use ----> &

    //or  we want any data extends with interface then we use ----> extends qword

    type UserRole1 = User1 & { role: string }

    interface UserWithRole2 extends User2 {
        role: string
    }


    const user1: UserWithRole2 = {
        name: "alif mia",
        age: 23,
        role: "PL"
    }


    //js -----> object , array ------> object , function -----> object 
    //i we want to use interface then we can use this .


    type Roll1 = number[];


    interface Roll2 {
        [index: number]: number;
    }




    const roll1: Roll2 = [1, 2, 4];


    //use type and interface in function 

    type Add1 = (num1: number, num2: number) => number


    interface Add2 {
        (num1: number, num2: number): number
    }


    const add: Add2 = (num1, num2) => num1 + num2


    console.log(add(23,34));

    //
}


// we use type for all primitive data type and interface user for object data type 