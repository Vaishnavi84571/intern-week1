// Day 5 - Arrays

const employees = ["Rahul", "Priya", "Amit", "Sneha"];

console.log("Employees:", employees);

// Access array elements
console.log("First Employee:", employees[0]);
console.log("Last Employee:", employees[employees.length - 1]);

// Add an employee
employees.push("Vikas");
console.log("After adding:", employees);

// Remove an employee
employees.pop();
console.log("After removing:", employees);

// Loop through array
employees.forEach((employee) => {
    console.log("Employee:", employee);
});

// Array length
console.log("Total Employees:", employees.length);
