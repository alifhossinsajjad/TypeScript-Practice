/* Task 16: Utility Types and Keyof Constraints
Objective: Access object properties dynamically using keyof.

Instructions:

Create a function that:
Takes an object and a key.
Returns the property value from the object based on the provided key.
Use keyof to constrain the key to valid properties of the object. */




function getValue<T, X extends keyof T>(boj: T key: X) {
    return obj[key]
}


const myUser = {
    id: 1,
    name: "Gamura",
    email: "gamura@gmail.com "
}


const userName = getValue(myUser, "name")
const userEmail = getValue(myUser, "email")