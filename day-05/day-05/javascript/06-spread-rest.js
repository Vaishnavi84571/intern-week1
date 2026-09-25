// Day 5 - Spread and Rest Operators

// Spread operator with arrays
const frontendSkills = ["HTML", "CSS", "JavaScript"];
const backendSkills = ["Node.js", "Express"];

const allSkills = [...frontendSkills, ...backendSkills];

console.log("All Skills:", allSkills);


// Spread operator with objects
const employee = {
    id: 101,
    name: "Rahul",
    department: "IT"
};

const updatedEmployee = {
    ...employee,
    salary: 40000,
    location: "India"
};

console.log("Updated Employee:", updatedEmployee);


// Rest operator in function
function calculateTotal(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log("Total:", calculateTotal(10, 20, 30));
console.log("Total:", calculateTotal(100, 200, 300, 400));