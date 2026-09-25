"use strict";
class EmployeeRecord {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    describe() {
        return `${this.name}: ₹${this.salary}`;
    }
}
const employee = new EmployeeRecord("Rahul", 58000);
console.log(employee.describe());
console.log(employee.getSalary());
