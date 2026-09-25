// Callbacks
function processEmployee(employee, callback) {
    console.log("Processing:", employee.name);
    callback(employee);
}

processEmployee({ name: "Priya", department: "HR" }, (employee) => {
    console.log("Department:", employee.department);
});
