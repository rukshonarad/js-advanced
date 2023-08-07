function calculate(num1, num2, cb) {
    return cb(num1, num2);
}
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function devide(num1, num2) {
    return num1 / num2;
}
console.log(calculate(2, 2, add));
console.log(calculate(4, 2, subtract));
console.log(calculate(3, 3, multiply));
console.log(calculate(10, 2, devide));
