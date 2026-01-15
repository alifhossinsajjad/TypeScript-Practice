/* Task 7: Type Assertion and Narrowing
Objective: Write a function that behaves differently based on the input type.

Instructions:

Create a function that accepts a parameter of type string | number.
The function should:
Return the length if the input is a string.
Return the square if the input is a number. */


function processInput(inp: string | number): number {
    if (typeof inp === "string") {
        return inp.length
    } else {
        return inp * inp
    }
}


console.log(processInput(8));