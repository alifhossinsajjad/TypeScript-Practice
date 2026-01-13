{
    //ternary operator || optional chaining || nullish coalescing operator 



    const age: number = 18;

    if (age >= 18) {
        // console.log("adult");
    } else {
        // console.log("not Adult");
    }

    const isAdult = age <= 8 ? "Adult" : "Not Adult";

    // console.log({isAdult});

    const isAuthenticated = null;

    const result1 = isAuthenticated ?? "Guest";

    const result2 = isAuthenticated ? isAuthenticated : "Guest";

    // console.log({result1},{result2});




    type User = {
        name: string,
        address: {
            city: string,
            road: string,
            presentAddress: string,
            parmanentAddress?: string,
        }
    }


    const user: User = {
        name: "alif mia",
        address: {
            city: "Dhaka",
            road: "konakhola 27/c",
            presentAddress: "Konakhola Keranigang Dhaka",

        }
    }

    const parmanentAddress = user?.address?.parmanentAddress ?? "No Parmanent Address"

    const userName = user?.name
    console.log({ userName }, { parmanentAddress });


    //
}