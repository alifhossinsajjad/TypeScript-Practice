/* 
Task 11: Unknown Type
Objective: Handle different types with the unknown type.

Instructions:

Write a function processData(data: unknown) that:
Checks if data is a string and returns the uppercased version.
If data is a number, returns the square of it.
*/


function processData(data: unknown): string | number | void {
    if (typeof data === 'string') {
        return data.toUpperCase()
    }
    else if (typeof data === "number") {
        return data * data
    } else {
        console.log("Data is neither a string nor a number.");
    }

}
console.log(processData("hello"))