// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.











type MaritalStatus = "Single" | "Married" | "Divorce" | "Widowed"

type Address = {
    street: string;
    city: string;
    country: string
}

type Job = {
    title: string
    company: string
    isRemote: boolean
}

type Financials = {
    income: number
    expense: number
}

type person = {
    name: string,
    address: Address,
    hearColor: string,
    eyeColor: string,
    financial: Financials,
    hobbies: string[],
    familyMembers: string[],
    job: Job,
    skills: string[],
    maritalStatus: MaritalStatus,
    friends: string[]
}

const myPerson: person = {
    name: "Alif Mia",
    address: {
        street: "123 Tech Lane",
        city: "Dhaka",
        country: "Bangladesh"
    },
    hearColor: "Black",
    eyeColor: "Brown",
    financial: {
        income: 50000,
        expense: 20000
    },
    hobbies: ["Coding", "Cycling", "Gaming"],
    familyMembers: ["Father", "Mother", "Sister"],
    job: {
        title: "Software Developer",
        company: "Tech Solutions",
        isRemote: true
    },
    skills: ["TypeScript", "React", "Node.js"],
    maritalStatus: "Single",
    friends: ["Rahat", "Sabbir"]
};


console.log(myPerson);



