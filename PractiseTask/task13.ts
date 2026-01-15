/* Task 13: Generics with Functions and Interfaces
Objective: Use generics to handle different types.

Instructions:

Create a generic function that:
Accepts an array of any type.
Returns a new array with duplicate values removed. */




function removeDuplicate <T> (items : T[]) : T[] {
return [...new Set(items)]
}


const numbers = [2,4,6,7,3,3,8]
const uniqueNuber = removeDuplicate(numbers)

console.log(uniqueNuber);


const strings = ["apple", "banana", "apple", "orange"];
const uniqueStrings = removeDuplicate(strings);


console.log(uniqueStrings);




//interface

interface Box<T> {
    content : T;
}


const stringBox : Box <string> = {content : "poteto"}

const numberBox : Box <number> = {content: 43}