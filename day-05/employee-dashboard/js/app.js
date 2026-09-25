import { fetchEmployees } from "./api.js";
import {
    searchEmployees,
    filterByDepartment,
    sortEmployees
} from "./employee.js";

let employees = [];
let filteredEmployees = [];

const employeeList = document.getElementById("employeeList");
const searchInput = document.getElementById("searchInput");
const departmentFilter = document.getElementById("departmentFilter");
const sortSelect = document.getElementById("sortSelect");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const modal = document.getElementById("employeeModal");
const closeModal = document.getElementById("closeModal");
const form = document.getElementById("employeeForm");

function renderEmployees(list) {
    employeeList.innerHTML = "";

    if (list.length === 0) {
        employeeList.innerHTML = "<p>No employees found.</p>";
        return;
    }

    list.forEach(employee => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
            <h3>${escapeHtml(employee.name)}</h3>
            <p><strong>Department:</strong> ${escapeHtml(employee.department)}</p>
            <p><strong>Role:</strong> ${escapeHtml(employee.role)}</p>
            <p><strong>Salary:</strong> ₹${Number(employee.salary).toLocaleString("en-IN")}</p>
            <div class="card-actions">
                <button data-action="details" data-id="${employee.id}">Details</button>
                <button data-action="edit" data-id="${employee.id}">Edit</button>
                <button data-action="delete" data-id="${employee.id}">Delete</button>
            </div>
        `;

        employeeList.appendChild(card);
    });
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function populateDepartments() {
    const departments = [...new Set(employees.map(e => e.department))].sort();

    departments.forEach(department => {
        const option = document.createElement("option");
        option.value = department;
        option.textContent = department;
        departmentFilter.appendChild(option);
    });
}

function refresh() {
    let result = searchEmployees(employees, searchInput.value);
    result = filterByDepartment(result, departmentFilter.value);
    result = sortEmployees(result, sortSelect.value);

    filteredEmployees = result;
    renderEmployees(result);
}

function openAddForm() {
    form.reset();
    document.getElementById("employeeId").value = "";
    document.getElementById("modalTitle").textContent = "Add Employee";
    modal.classList.remove("hidden");
}

function openEditForm(employee) {
    document.getElementById("employeeId").value = employee.id;
    document.getElementById("name").value = employee.name;
    document.getElementById("department").value = employee.department;
    document.getElementById("role").value = employee.role;
    document.getElementById("salary").value = employee.salary;
    document.getElementById("modalTitle").textContent = "Edit Employee";
    modal.classList.remove("hidden");
}

employeeList.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;

    const id = Number(button.dataset.id);
    const employee = employees.find(item => item.id === id);
    const action = button.dataset.action;

    if (!employee) return;

    if (action === "details") {
        alert(
            `Name: ${employee.name}\n` +
            `Department: ${employee.department}\n` +
            `Role: ${employee.role}\n` +
            `Salary: ₹${Number(employee.salary).toLocaleString("en-IN")}`
        );
    }

    if (action === "edit") {
        openEditForm(employee);
    }

    if (action === "delete") {
        if (confirm(`Delete ${employee.name}?`)) {
            employees = employees.filter(item => item.id !== id);
            refresh();
        }
    }
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const id = Number(document.getElementById("employeeId").value);
    const employeeData = {
        name: document.getElementById("name").value.trim(),
        department: document.getElementById("department").value.trim(),
        role: document.getElementById("role").value.trim(),
        salary: Number(document.getElementById("salary").value)
    };

    if (id) {
        const index = employees.findIndex(employee => employee.id === id);
        employees[index] = { ...employees[index], ...employeeData };
    } else {
        const newId = employees.length
            ? Math.max(...employees.map(employee => employee.id)) + 1
            : 1;

        employees.push({ id: newId, ...employeeData });
    }

    modal.classList.add("hidden");
    populateDepartments();
    refresh();
});

searchInput.addEventListener("input", refresh);
departmentFilter.addEventListener("change", refresh);
sortSelect.addEventListener("change", refresh);
addEmployeeBtn.addEventListener("click", openAddForm);
closeModal.addEventListener("click", () => modal.classList.add("hidden"));

async function init() {
    try {
        employees = await fetchEmployees();
        populateDepartments();
        refresh();
    } catch (error) {
        console.error(error);
        employeeList.innerHTML = `<p>Unable to load employees. Run the project using VS Code Live Server.</p>`;
    }
}

init();
