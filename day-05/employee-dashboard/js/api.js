export async function fetchEmployees() {
    const response = await fetch("./data/employees.json");

    if (!response.ok) {
        throw new Error(`Failed to load employees: ${response.status}`);
    }

    return response.json();
}
