/* Task 15: Type Guards
Objective: Create custom type guards for more accurate type checking.

Instructions:

Write a function isString(value: unknown): value is string that checks if a value is a string.
Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string. */


function isString(value: unknown): value is string {
    return typeof value === 'string'
}


function printUpperCase(value: unknown): void {
    if (isString(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log("The provided value is not a string.");
    }
}

printUpperCase("hello world");
printUpperCase(123);


//object Guarding
interface User {
    name: string;
    role: string
}


function isUser(obj: any): obj is User {
    return obj && typeof obj.name === 'string' && typeof obj.role === 'string'
}