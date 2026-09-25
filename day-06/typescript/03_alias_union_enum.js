"use strict";
var Department;
(function (Department) {
    Department["IT"] = "IT";
    Department["HR"] = "HR";
    Department["Finance"] = "Finance";
})(Department || (Department = {}));
const employeeId = "EMP001";
const employeeStatus = "active";
const department = Department.IT;
console.log(employeeId, employeeStatus, department);
