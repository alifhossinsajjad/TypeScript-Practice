{
    //OOP - Class and Object

    class Animal {

        //perameter properties 

        constructor(public name: string, public species: string, public sound: string) {

        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }


    }


    const dog = new Animal("german shepard", "dog", "ghew ghew")
    const cat = new Animal("Bangla", "cat", "mew")

    cat.makeSound
    dog.makeSound











    //
}