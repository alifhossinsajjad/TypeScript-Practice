//Task 4 

// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.










//with union type

interface Book {
    title: string;
    author: string;
    pages: number
}


interface Magazine {
    title: string;
    issueNumber: number;
    publisher: string
}


type ReadingMaterial = Book | Magazine


const myReading: ReadingMaterial = {
    title: "Rich Dad and Poor Dad",
    issueNumber: 503,
    publisher: "Richel"
}


//with intersection type

type BookMagazine = Book & Magazine;

const hybridIteam: BookMagazine = {
    title: "The TypeScript journal",
    author: "Jhone Doe",
    pages: 234,
    issueNumber: 1,
    publisher: "Tech press"
}
