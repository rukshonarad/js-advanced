function calculate(num1, num2, cb) {
    cb(num1, num2);
}
function add(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}
function subtract(num1, num2) {
    let result = num1 - num2;
    console.log(result);
}
function multiply(num1, num2) {
    let result = num1 * num2;
    console.log(result);
}
function devide(num1, num2) {
    let result = num1 / num2;
    console.log(result);
}
calculate(2, 2, add);
calculate(4, 2, subtract);
calculate(3, 3, multiply);
calculate(10, 2, devide);
