import inquirer from "inquirer"
// 1)computer will generate a random number

// 2) user input for guessing number

// 3)campare user input with computer generated number and show result 
const guessed_Number = 12
const random_Number = Math.floor(Math.random()*10)
const answer = await inquirer.prompt([
    {
        message:"Guess a Number",
        type:"number",
        name:"guess_Number"
}
])

// console.log(answer)
if(answer.guess_Number == guessed_Number){
    console.log("congratulation you guess right number")
}else{
    console.log("you guess wrong number")
}
console.log(answer)



