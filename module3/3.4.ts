{
    //instance of guard 

    class Animal {
        name: string;
        species: string



        constructor(name: string, species: string) {

            this.name = name;
            this.species = species;

        }


        makeSound() {
            console.log('i am making sounnd');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeGaw() {
            console.log('ghaw ghaw');
        }

    }


    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeMeaw() {
            console.log('miaw miaw');
        }

    }



    //smart way to do instance of guard

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }




    const getAnimal = (animel: Animal) => {
        if (isDog(animel)) {
            animel.makeGaw();
        } else if (isCat(animel)) {
            animel.makeMeaw();
        } else {
            animel.makeSound();
        }
    }





    const dog = new Dog("tommy", "dog");
    const cat = new Cat("kitty", "cat");


    getAnimal(dog);
    getAnimal(cat);



    //
}