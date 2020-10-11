var coinFlip;
var n;
for (n = 0; n < 10; n++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        window.console.log("Heads");
    } else {
        window.console.log("Tails");
    }
}