/* Task 8: Intersection Types
Objective: Practice using intersection types.

Instructions:

Create a type AdminUser that is an intersection of:
User with properties name and email
Admin with property adminLevel
Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user. */


interface User {
    name : string;
    email : string;
}

interface Admin {
    adminLevel : number ;
}


type AdminUser = User & Admin



function describeAdmin(user : AdminUser) : string {
return `Admin ${user.name} (Level ${user.adminLevel}) -Contact : ${user.email}`
}

const superUser : AdminUser = {
    name : "Md Alif Mia",
    email : "alif@gmial.com",
adminLevel : 1
}


console.log(describeAdmin(superUser));