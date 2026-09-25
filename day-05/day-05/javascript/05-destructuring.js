// Day 5 - Destructuring

const employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 40000
};

// Object destructuring
const { id, name, department, salary } = employee;

console.log("Employee ID:", id);
console.log("Employee Name:", name);
console.log("Department:", department);
console.log("Salary:", salary);


// Array destructuring
const skills = ["JavaScript", "HTML", "CSS"];

const [firstSkill, secondSkill, thirdSkill] = skills;

console.log("First Skill:", firstSkill);
console.log("Second Skill:", secondSkill);
console.log("Third Skill:", thirdSkill);


// Destructuring with renamed variables
const { name: employeeName, salary: employeeSalary } = employee;

console.log("Name:", employeeName);
console.log("Salary:", employeeSalary);
