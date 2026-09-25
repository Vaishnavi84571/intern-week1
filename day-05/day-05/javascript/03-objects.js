// Day 5 - Objects

const employee = {
    id: 101,
    name: "Rahul",
    age: 22,
    department: "IT",
    salary: 35000,
    isActive: true
};

console.log("Employee:", employee);

// Access object properties
console.log("ID:", employee.id);
console.log("Name:", employee.name);
console.log("Department:", employee.department);

// Change a property
employee.salary = 40000;

console.log("Updated Salary:", employee.salary);

// Add a new property
employee.location = "India";

console.log("Location:", employee.location);

// Object.keys()
console.log("Properties:", Object.keys(employee));

// Object.values()
console.log("Values:", Object.values(employee));

// Object.entries()
console.log("Entries:", Object.entries(employee));
