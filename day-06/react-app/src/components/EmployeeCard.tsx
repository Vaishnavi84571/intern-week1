import type { Employee } from "../types/employee";

interface Props {
  employee: Employee;
  onDetails: (employee: Employee) => void;
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

export function EmployeeCard({ employee, onDetails, onEdit, onDelete }: Props) {
  return <article className="card">
    <h3>{employee.name}</h3>
    <p><b>Department:</b> {employee.department}</p>
    <p><b>Role:</b> {employee.role}</p>
    <p><b>Salary:</b> ₹{employee.salary.toLocaleString("en-IN")}</p>
    <div className="actions">
      <button onClick={() => onDetails(employee)}>Details</button>
      <button onClick={() => onEdit(employee)}>Edit</button>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </div>
  </article>;
}
