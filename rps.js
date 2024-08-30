



function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randNum = Math.floor(Math.random() * 3) + 1;
    if (randNum === 1) {
         choice = "Rock"
    } else if (randNum === 2) {
         choice = "Paper"
    } else {
         choice = "Scissors"
    }
    return choice;
}

console.log(getComputerChoice())






