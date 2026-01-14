{
    //Generic Constraints with keyof operator

    type Vehicale = {
        bike: string,
        car: string,
        ship: string
    }

    type owner = "bike " | "car" | "ship" //manually

    type owner2 = keyof Vehicale




    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }



    const user = {
        name: 'ALu bokhara',
        age: 34,
        address: "New York"
    }





    const result1 = getPropertyValue(user, "age")






    //
}