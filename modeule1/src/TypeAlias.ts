{
    // Type Alias

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string,
    }


    const student1: Student = {
        name: "alif",
        age: 23,
        gender: "male",
        contactNo: "2034290834",
        address: "Dhaka"
    }
    const student2: Student = {
        name: "saiful",
        age: 23,
        gender: "male",
        contactNo: "2036750834",
        address: "Dhaka"
    }
    const student3: Student = {
        name: "ALif",
        age: 23,
        gender: "male",
        contactNo: "02345745034",
        address: "Dhaka"
    }


    // if you want to variable type alias you can 

    type UserName = string
    type IsAdmin = boolean

    const userName: UserName = "Prado";

    const isAdmin: IsAdmin = true;



    // if you want to type alias in a function 


    type Add = (i: number, j: number) => number;



    const add: Add = (i, j) => i + j;

    console.log(add(34, 34))



    // 
}