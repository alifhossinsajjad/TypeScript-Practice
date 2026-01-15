{
    //Utility type

    //pick type 


    type person = {
        name: string;
        age: number;
        email?: string;
        contact: string;
    }

    type NameAge = Pick<person, "name" | "age">





    //omit



    type ContactInfo = Omit<person, "name" | "age">



    //Required 
    type PerosnRequired = Required<person>


    //partial

    type PersonPartial = Partial<person>


    //read only

    type PersonReadOnly = Readonly<person>


    const person1: PersonReadOnly = {
        name: "alex carry",
        age: 34,
        contact: "234",
    }

    //record

    type MyObj = Record<string, string>

    const emptyObject: Record<string, unknown> = {}

    const obj1: MyObj = {
        a: "car",
        b: "ghar",
        c: "chut",
        d: "dhud"
    }






    //
}