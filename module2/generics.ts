{
    //Introduction type generics types

    //generic type

    type GenericArray<T> = Array<T>


    //const rollNumber : number [] = [1,34,56,5];
    const rollNumber: GenericArray<Number> = [1, 34, 56, 5];


    //const Grosarry: string[] = ["Tomato", "Lemon", "Chili"];

    const grosarry: GenericArray<string> = ["Tomato", "Lemon", "Chili"];



    //const freshGrowssary : boolean [] = [true,false,true]


    const freshGrowssary: GenericArray<boolean> = [true, false, true]



    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "alif mia",
            age: 22,
        },
        {
            name: 'saiful',
            age: 23
        }
    ]









    const add = (x: number, y: number) => x + y;

    add(30, 345)


    //generic tuple

    type GenericTuple<x, y> = [x, y]


    const Man: GenericTuple<string, string> = ['HUsband', "Wife"];


    const UserWithId: GenericTuple<number, { name: string, email: string }> = [234, { name: "alif mia", email: "emial@gamil.com" }]









    //
}