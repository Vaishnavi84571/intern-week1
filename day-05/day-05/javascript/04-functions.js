// Day 5 - Functions

// Regular function
function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));


// Function with employee data
function getEmployeeInfo(name, department) {
    return `${name} works in the ${department} department.`;
}

console.log(getEmployeeInfo("Rahul", "IT"));


// Arrow function
const multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(5, 6));


// Short arrow function
const square = number => number * number;

console.log("Square:", square(7));


// Function with default parameter
function greet(name = "Employee") {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Rahul"));