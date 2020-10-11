var first_num, second_num;
first_num = parseInt(window.prompt("Enter first Number: "));
second_num = parseInt(window.prompt("Enter second Number: "));

if (first_num > second_num) {
    document.write(first_num + " is the largest number.");
} else if (second_num > first_num) {
    document.write(second_num + " is the largest number.");
} else {
    document.write("Both the numbers are equal.");
}