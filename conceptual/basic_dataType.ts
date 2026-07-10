const name : string = "John Doe";

console.log(name);


const playerList : number [] = [1, 2, 3, 4, 5];

console.log(playerList);

interface students {
    name : string;
    age : number;
    class : string;
    department ?: {
        name : string;
        head : string;
    }
}


const students : students [] =[
    {
        name : "John",
        age : 23,
        class : "A",
        department : {
            name : "Computer Science",
            head : "Dr. Smith"
        }
    },
    {
        name : "Doe",
        age : 24,
        class : "B"
    }
]

console.log(students);