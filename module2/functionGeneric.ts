{
    //Function With Generic


    const array = (param: string): string[] => {
        return [param]
    }


    const arrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = array("Scientist")

    const resGeneric = arrayWithGeneric<string>("scientist")


    type User = {
        id: number,
        name: string
    }


    const resGenericObj = arrayWithGeneric<User>({
        id: 334,
        name: "Tom Cruss"
    })



    const arrayWithTuple = <T, U>(param1: T, param2: U): [T, U] => {
        return [param1, param2]
    }

    const res10 = arrayWithTuple("Scientist", 34)

    const resTuple = arrayWithTuple<string, boolean>("scientist", true)



    const studentDetails = <T>(student: T) => {
        const students = "class 1-10"

        return {
            ...student,
            students
        }


        const student1 = studentDetails({ name: "tomy", email: "tomy@gmial.com", class: 10, group: "scrience" })


        const student2 = studentDetails({ name: "Cris", email: "cris@gmial.com", class: 7, })

    }





    //
}