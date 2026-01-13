{
    // 
    // nullable Type
    const searchName = (value1: string | null) => {
        if (value1) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    }


    searchName(null)


    //unknown Type

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`This Speed is ${convertedSpeed} ms^-1`);
        }


        else if (typeof value === "string") {
            const [result, unit] = value.split(" ")

            const convertedSpeed = (parseFloat(result ?? "0") * 1000) / 3600;
            console.log(`This Speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log('worng input');
        }

    }

    getSpeedInMeterPerSecond("1600 kmh^-1")


    //never
    const throwError = (msg: string) : never => {
        throw new Error (msg)
    }

    throwError ('Please You do not access this website')





    // 
}






