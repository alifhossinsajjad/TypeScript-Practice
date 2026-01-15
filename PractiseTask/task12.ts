/* Task 12: Never Type
Objective: Use the never type for functions that don’t return.

Instructions:

Write a function handleError that:
Accepts a message: string.
Throws an error with the given message.
Use the never return type to indicate that this function never returns. */


function handdleError(message: string): never {
    throw new Error(message)
}

try {
    handdleError("Something went wrong with the server!");
}
catch (error) {
    console.log(error);
}



type Role = "Admin" | "User";



function checkRole (role : Role) {
    if(role === "Admin") {
        return "Full Acces"
    }
    else if (role === "User") {
        return "Limited Access"
    }else {
        const value : never = role
        return value
    }
}