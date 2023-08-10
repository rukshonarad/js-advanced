// Part 1//
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counter = createCounter();
counter();
counter();

// Part 2 //
function temperatureConverter(unit) {
    if (unit === "C") {
        return function toCelsius(fahrenheit) {
            return ((fahrenheit - 32) * 5) / 9;
        };
    } else {
        unit === "F";
        return function toFahrenheit(celsius) {
            return (celsius * 9) / 5 + 32;
        };
    }
}

const toCelsius = temperatureConverter("C");
const toFahrenheit = temperatureConverter("F");
console.log(toCelsius(32));
console.log(toFahrenheit(40));
console.log("_-_-_-_-_-_-_");
// Part-3 //
function greet(name) {
    return function (timeOfDay) {
        return `Good ${timeOfDay}, ${name}!`;
    };
}

const greetJohn = greet("John");
console.log(greetJohn("Morning"));
console.log(greetJohn("Night"));
console.log("_-_-_-_-_-_-_");
// Part -4 //

function interestCalculator(rate) {
    return function (num) {
        const interest = (rate / 100) * num;
        return interest;
    };
}

const simpleInterest = interestCalculator(5);
console.log(simpleInterest(1000));
console.log(simpleInterest(100));
console.log("_-_-_-_-_-_-_");

// Part-5 //

function multiplier(factor) {
    return function (num) {
        return factor * num;
    };
}
const double = multiplier(2);
console.log(double(5));
console.log(double(7));
console.log("_-_-_-_-_-_-_");

//Part -6 //
function doubleMultiplier(num1, num2) {
    return function (num3) {
        return num1 * num2 * num3;
    };
}
const doubleAndTriple = doubleMultiplier(2, 3);

console.log(doubleAndTriple(5));
console.log("_-_-_-_-_-_-_");

// Part -7
function sequentialGreet(name) {
    return {
        morning: function () {
            return `Good Morning, ${name}!`;
        },
        afternoon: function () {
            return `Good Afternoon, ${name}!`;
        },
        evening: function () {
            return `Good Evening, ${name}!`;
        }
    };
}

const johnGreeting = sequentialGreet("John");
console.log(johnGreeting.morning());
console.log(johnGreeting.afternoon());
console.log(johnGreeting.evening());

//Part-8

// function personalLibrary() {
//     return function (add) {};
// }

//Part-9

function multiplicationTable(number) {
    return function () {
        const table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(number * i);
        }
        return table;
    };
}

const tableOfThree = multiplicationTable(3);
console.log(tableOfThree());

//Part -10
function favoriteColorReminder(name, color) {
    return function () {
        return `${name}'s favorite color is ${color}.`;
    };
}

const johnsColor = favoriteColorReminder("John", "Blue");
const mikesColor = favoriteColorReminder("Mike", "Gray");
console.log(johnsColor());
console.log(mikesColor());
