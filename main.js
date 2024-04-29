"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// 1)computer will generate a random number
// 2) user input for guessing number
// 3)campare user input with computer generated number and show result 
var guessed_Number = 12;
var random_Number = Math.floor(Math.random() * 10);
var answer = await inquirer_1.default.prompt([
    {
        message: "Guess a Number",
        type: "number",
        name: "guess_Number"
    }
]);
// console.log(answer)
if (answer.guess_Number == guessed_Number) {
    console.log("congratulation you guess right number");
}
else {
    console.log("you guess wrong number");
}
console.log(answer);
