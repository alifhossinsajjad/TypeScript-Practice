/* Task 14: Asynchronous TypeScript and Type Aliases
Objective: Simulate an asynchronous operation with TypeScript.

Instructions:

Write an asynchronous function that:
Simulates fetching user data (containing name and age).
Returns the data after a short delay. */



type UserData = {
    name: string;
    age: number
}


async function fetchData(): Promise<UserData> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "alif mia",
                age: 23
            })
        }, 2000);
    })
}


async function userDataLoaded() {
    console.log("user data loading");

    const user = await fetchData()

    console.log(`user loaded : ${user.name} , Age : ${user.age}`);





}


userDataLoaded()