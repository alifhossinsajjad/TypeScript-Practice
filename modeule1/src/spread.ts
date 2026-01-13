{
    //spread Operator 
    //rest operator 
    //destructuring 


    //spread operator 


    const grosary1: string[] = ['lebu', 'ada', 'dhonepata', 'tomato']
    const grosary2: string[] = ['kacha morich', 'ata', 'milk powder', 'rosun']

    grosary1.push(...grosary2)


    const player1 = {
        gk: 'alison',
        rb: 'casimiro',
        cb: 'wiliam',
        lb: 'ramos'
    }

    const player2 = {
        lm: 'pogba',
        rm: 'cr7',
        rw: 'messi',
        lw: 'njr'
    }


    const playersList = {
        ...player1,
        ...player2
    }


// learn rest operator 


const greetFriends = (...friends : string[])=> {
    friends.forEach((friend : string)=> console.log(`hi ${friend}`))
} 

greetFriends("Morgan","Alex","joglu")


}