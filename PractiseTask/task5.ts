
/* Task 5: Function Type
Objective: Write a function that reverses a string.

Instructions:

Write a function reverseString that:
Takes a single string argument.
Returns the string in reverse order.
Example:
Input: "hello"
Output: "olleh" */






function reverseString(str: string): string {
    return str.split("").reverse().join("")
}

const orginal: string = "Hello"

const reverse: string = reverseString(orginal)

console.log(reverse);