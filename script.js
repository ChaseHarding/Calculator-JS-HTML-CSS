// this function clears all values
// accessing the DOM using ID of the result and clears its value by assigning it an empty string
function clearScreen() {
    document.getElementById("result").value = "";
}
// this function displays all values
// accessing the DOM using ID of the result and appends the value of the clicked button to the result
function display(value) {
    document.getElementById("result").value += value;
}

// this function evaluates the expression and returns a result
// accessing the DOM using ID of the result and evaluates the expression using the eval() function.
// the evaluated value of the expression is again assigned to the result
// the eval() function evaluates an expression that you pass it and returns the result of that expression
function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}