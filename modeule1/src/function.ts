//learning function 
//normal function 
// arrow function 


//normal function 

function add(num1: number, num2: number): number {
    return num1 + num2
}

add(23, 34)

const arrowFn = (num1: number, num2: number): number => num1 + num2


//object ----> function --------> method

const richUser = {
    name: "alif mia",
    balance: 20000,
    addbalance(balance: number): string {
        return `My new balance is : ${this.balance + balance}`
    }
}


//map

const arr: number[] = [1, 3, 4]

const newArr: number[] = arr.map((e: number) => e * e)


console.log(newArr);