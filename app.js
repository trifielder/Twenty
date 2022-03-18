

do {
alert(`Welcome to 20! You are going to be playing against the computer to see who can get a number closer to 20.`)

alert(`Its the computers turn`)




var computer = 0;

do{ 
    
    var a = Math.floor(Math.random()* 10) + 1
    var computer = computer + a
    alert(`The computer got ${a}\n\nThe new number is ${computer}`)


}while(computer < 16 )

alert(`The computer stopped at ${computer}`)

var user = 0;

do{
    var a = Math.floor(Math.random()* 10) + 1
    user = user + a
    alert(`Your number is ${a}\n\nYour new number is ${user}`)
    var question = prompt(`Your total is ${user}, Do you want another number? if you dont want another number type 'n'`)

}while (question != "n")


alert(`you stopped at ${user}, the computer stopped at ${computer}`)

var com1 = 0
var us1 = 0


if ((user > computer) && (user <=20) && (computer <=20)) {
    alert(`You win!!!!`)
    us1++
    alert(`You have ${us1} wins ; the computer has ${com1} wins`)
}else if ((user < computer)&& (user <=20) && (computer <=20)) {
    alert(`computer wins:(`)
    com1++
    alert(`You have ${us1} wins ; the computer has ${com1} wins`)
}


if ((user > computer) && (user > 20)) {
    alert(`Computer wins:(`)
    com1++
    alert(`You have ${us1} wins ; the computer has ${com1} wins`)
}else if ((user < computer) && (computer > 20)) {
    alert(`You win!!!`)
    us1++
    alert(`You have ${us1} wins ; the computer has ${com1} wins`)
}

var end = prompt(`Do you want to play again? If so type 'yes' if not type 'no'`)


alert(`Final score you have ${us1} wins and the computer has ${com1} wins`)


}while (end == "yes")

    







