{
    //constraints


    const studentDetails = <T extends { id: number, name: string, email: string, class: number, group ?: string }>(student: T) => {
        const students = "class 1-10"

        return {
            ...student,
            students
        }


        const student1 = studentDetails({
            id: 101,
            name: "tomy",
            email: "tomy@gmial.com",
            class: 10,
            group: "scrience"
        })


        const student2 = studentDetails({
            id: 102,
            name: "Cris",
            email: "cris@gmial.com",
            class: 7,
        })
        const student3 = studentDetails({
            id: 103,
            name: "Luna",
            email: "luna@gmial.com",
            class: 8,
        })
        

    }















    //
}