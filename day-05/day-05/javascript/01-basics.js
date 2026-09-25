// Day 5 - JavaScript Basics

// let and const
let employeeName = "Rahul";
const employeeId = 101;

console.log("Employee Name:", employeeName);
console.log("Employee ID:", employeeId);

// Data types
let age = 22;                    // Number
let name = "Rahul";              // String
let isEmployee = true;           // Boolean
let salary;                     // Undefined
let bonus = null;               // Null

console.log(age);
console.log(name);
console.log(isEmployee);
console.log(salary);
console.log(bonus);

// Function
function greetEmployee(name) {
    return `Hello, ${name}!`;
}

console.log(greetEmployee(employeeName));

// Arrow function
const calculateSalary = (basicSalary, bonus) => {
    return basicSalary + bonus;
};

console.log("Total Salary:", calculateSalary(30000, 5000));

// Template literal
console.log(`${employeeName} has employee ID ${employeeId}`);