{
    // union types

    type Orange = "color" | "Fruits"

    const food: Orange = "Fruits"



    type User = {
        name: string,
        email?: string,
        gender: "male" | "Female",
        bloodGroup: "A+" | "A-" | "AB+" | "AB-" | "O-"
    }


    const user1: User = {
        name: "Alif Mia",
        email: "yourmail@gmail.com",
        gender: "male",
        bloodGroup: "A+"
    }


    //intersection operator 


    type FrontDeveloper = {
        skills: string[],
        designation1: "Frontend Developer",

    }

    type BackendDeveloper = {
        skills: string[]
        designation2: "Devobps Engineer",
    }

    type FullStackDeveloper = FrontDeveloper & BackendDeveloper

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['HTML', "CSS", "JAVASCRIPT", "REACT", "TYPESCRIPT"],
        designation1: "Frontend Developer",
        designation2: "Devobps Engineer"
    }





}