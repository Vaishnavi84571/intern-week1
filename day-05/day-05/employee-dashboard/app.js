let employees = [];

async function loadEmployees() {
    try {
        const response = await fetch("./data/employees.json");

        if (!response.ok) {
            throw new Error("Failed to load employee data");
        }

        employees = await response.json();

        displayEmployees(employees);
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayEmployees(employeeList) {
    const employeeContainer = document.getElementById("employeeList");

    employeeContainer.innerHTML = "";

    employeeList.forEach(employee => {
        const employeeCard = document.createElement("div");

       employeeCard.innerHTML = `
       <h2>${employee.name}</h2>
       <p>Email: ${employee.email}</p>
       <p>Department: ${employee.department}</p>
       <p>Position: ${employee.position}</p>
       <p>Salary: ₹${employee.salary}</p>
       <button onclick="showDetails(${employee.id})">
         View Details
       </button>
       <hr>
    ;

         employeeContainer.appendChild(employeeCard);
    });
}

function searchEmployees() {
    const searchText = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchText)
    );

    displayEmployees(filteredEmployees);
}

function filterByDepartment() {
    const department = document.getElementById("departmentFilter").value;

    if (department === "all") {
        displayEmployees(employees);
        return;
    }

    const filteredEmployees = employees.filter(employee =>
        employee.department === department
    );

    displayEmployees(filteredEmployees);
}

function sortBySalary() {
    const sortedEmployees = [...employees].sort(
        (a, b) => a.salary - b.salary
    );

    displayEmployees(sortedEmployees);
}

document
    .getElementById("searchInput")
    .addEventListener("input", searchEmployees);

document
    .getElementById("departmentFilter")
    .addEventListener("change", filterByDepartment);

document
    .getElementById("sortButton")
    .addEventListener("click", sortBySalary);

loadEmployees();
