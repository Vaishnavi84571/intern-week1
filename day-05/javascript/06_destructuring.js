// Destructuring, spread/rest and template literals
const employee = {
    name: "Aarav",
    department: "IT",
    salary: 50000
};

const { name, department, salary } = employee;
console.log(`${name} works in ${department} and earns ${salary}.`);

const updatedEmployee = { ...employee, salary: 60000 };
console.log(updatedEmployee);

function total(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log("Total:", total(10, 20, 30));
