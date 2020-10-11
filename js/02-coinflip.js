var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Enter heads or tails");
if (coinFlip < 5) {
    coinFlip = "heads";
} else {
    coinFlip = "tails";
}

if (coinFlip == "heads" && choice == "heads") {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip == "heads" && choice == "tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip == "tails" && choice == "heads") {
    window.alert("The flip was tails but you chose heads...you lose!");
} else {
    window.alert("The flip was tails and you chose tails...you win!");

}