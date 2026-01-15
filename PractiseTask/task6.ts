/* Task 6: Spread and Rest Operators, Destructuring



Objective: Write a function that uses the rest operator for variable-length arguments.

Instructions: */


//rest
function sumAll (...numbers : number []) : number  {
return numbers.reduce((acc, current ) => acc +current, 0)
}


console.log(sumAll(23,34,6));


//destructure with rest 

function sumWithOffest (offset :number ,...remaingNumbers : number []) : number {
    const sumOfRest = remaingNumbers.reduce((acc,curr) => acc + curr, 0) 
    return offset + sumOfRest 
}

console.log(sumWithOffest(345,356));