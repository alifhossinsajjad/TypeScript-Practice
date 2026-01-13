"use strict";
//learning function 
//normal function 
// arrow function 
Object.defineProperty(exports, "__esModule", { value: true });
//normal function 
function add(num1, num2) {
    return num1 + num2;
}
add(23, 34);
const arrowFn = (num1, num2) => num1 + num2;
//object ----> function --------> method
const richUser = {
    name: "alif mia",
    balance: 20000,
    addbalance(balance) {
        return `My new balance is : ${this.balance + balance}`;
    }
};
//map
const arr = [1, 3, 4];
const newArr = arr.map((e) => e * e);
console.log(newArr);
//# sourceMappingURL=function.js.map