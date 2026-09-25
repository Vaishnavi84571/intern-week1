// Day 5 - Array Methods

const employees = [
    { name: "Rahul", salary: 40000, department: "IT" },
    { name: "Priya", salary: 50000, department: "HR" },
    { name: "Amit", salary: 35000, department: "IT" },
    { name: "Sneha", salary: 60000, department: "Finance" }
];

// 1. map()
// Create an array containing employee names
const names = employees.map(employee => employee.name);

console.log("Names:", names);


// 2. filter()
// Find employees from IT department
const itEmployees = employees.filter(
    employee => employee.department === "IT"
);

console.log("IT Employees:", itEmployees);


// 3. reduce()
// Calculate total salary
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Salary:", totalSalary);


// 4. find()
// Find one employee
const employee = employees.find(
    employee => employee.name === "Priya"
);

console.log("Found Employee:", employee);


// 5. some()
// Check if at least one employee earns more than 55000
const highSalaryExists = employees.some(
    employee => employee.salary > 55000
);

console.log("Salary above 55000 exists:", highSalaryExists);


// 6. every()
// Check if every employee earns more than 30000
const allAbove30000 = employees.every(
    employee => employee.salary > 30000
);

console.log("Everyone earns above 30000:", allAbove30000);


// 7. sort()
// Sort employees by salary from lowest to highest
const sortedEmployees = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("Sorted Employees:", sortedEmployees);