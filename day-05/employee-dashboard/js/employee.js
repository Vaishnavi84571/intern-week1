export function searchEmployees(employees, query) {
    const text = query.trim().toLowerCase();

    if (!text) return employees;

    return employees.filter(employee =>
        employee.name.toLowerCase().includes(text) ||
        employee.department.toLowerCase().includes(text) ||
        employee.role.toLowerCase().includes(text)
    );
}

export function filterByDepartment(employees, department) {
    if (department === "All") return employees;
    return employees.filter(employee => employee.department === department);
}

export function sortEmployees(employees, sortType) {
    const copy = [...employees];

    if (sortType === "salaryHigh") {
        return copy.sort((a, b) => b.salary - a.salary);
    }

    if (sortType === "salaryLow") {
        return copy.sort((a, b) => a.salary - b.salary);
    }

    return copy.sort((a, b) => a.name.localeCompare(b.name));
}
