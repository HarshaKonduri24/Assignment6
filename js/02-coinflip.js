var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Enter Heads or Tails");
if (coinFlip < 5) {
    coinFlip = "Heads";
} else {
    coinFlip = "Tails";
}

if (coinFlip == "Heads" && choice == "Heads") {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip == "Heads" && choice == "Tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip == "Tails" && choice == "Heads") {
    window.alert("The flip was tails but you chose heads...you lose!");
} else {
    window.alert("The flip was tails and you chose tails...you win!");

}