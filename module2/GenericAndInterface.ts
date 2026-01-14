{
    // Interface - Generic


    interface Developer<T, Y = null> {
        name: string,
        laptop: {
            brand: string,
            model: string,
            releseYear: number
        }

        smartWatch: T;
        bike?: Y;
    }

    interface Luxius {
        brand: string, watchModel: string, functional: string
    }


    interface Bike {
        name: string,
        engineCepacity: string
    }


    const Developer1: Developer<Luxius, Bike> = {
        name: "Mark luis",
        laptop: {
            brand: "Asus",
            model: "A-15",
            releseYear: 2024,
        },

        smartWatch: {
            brand: "Luxius",
            watchModel: "x-00AS",
            functional: "semi"
        },
        bike: {
            name: "Yamaha MT-15",
            engineCepacity: "150cc"
        }
    }


    interface Apple {
        brand: string, watchModel: string, healthCare: boolean
    }

    const Developer2: Developer<Apple> = {
        name: "Jems brod",
        laptop: {
            brand: "MacBook",
            model: "Air 6 pro",
            releseYear: 2025,
        },

        smartWatch: {
            brand: "Apple",
            watchModel: "Air 3",
            healthCare: true
        }
    }
















    //
}