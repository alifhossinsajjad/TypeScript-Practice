function reverseString (str : string) :string {
    return str.split("").reverse().join("")
}

const orginal : string = "Hello"

const reverse : string = reverseString(orginal)

console.log(reverse);