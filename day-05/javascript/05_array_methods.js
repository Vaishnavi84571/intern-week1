// map, filter, reduce, find, some, every, sort
const employees = [
    { id: 1, name: "Aarav", department: "IT", salary: 50000 },
    { id: 2, name: "Priya", department: "HR", salary: 45000 },
    { id: 3, name: "Rahul", department: "Finance", salary: 55000 }
];

const names = employees.map(employee => employee.name);
const itEmployees = employees.filter(employee => employee.department === "IT");
const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
const highSalary = employees.find(employee => employee.salary > 50000);
const hasHR = employees.some(employee => employee.department === "HR");
const allPositive = employees.every(employee => employee.salary > 0);
const sorted = [...employees].sort((a, b) => b.salary - a.salary);

console.log({ names, itEmployees, totalSalary, highSalary, hasHR, allPositive, sorted });
