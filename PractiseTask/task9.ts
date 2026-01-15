/* Task 9: Optional Chaining
Objective: Use optional chaining with nested objects.

Instructions:

Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining. */




type Address = {
    city: string;
    zipCode: string;
}

type Employe = {
    id: number;
    name: string;
    address?: Address;
}

function getEmploye(employe: Employe): string | undefined {
    return employe.name
}

const employee1 = {
    id: 1,
    name: "ALif",
    address: {
        city: "Dahaka",
        // zipCode: "1310-dhaka"
    }

}

console.log(getEmploye(employee1));