import { useState } from "react";
import type { Employee, EmployeeForm as FormData } from "../types/employee";

interface Props {
  employee?: Employee;
  onSave: (data: FormData) => void;
  onCancel: () => void;
}

export function EmployeeForm({ employee, onSave, onCancel }: Props) {
  const [form, setForm] = useState<FormData>({
    name: employee?.name ?? "",
    department: employee?.department ?? "",
    role: employee?.role ?? "",
    salary: employee ? String(employee.salary) : ""
  });
  const [error, setError] = useState("");

  const update = (key: keyof FormData, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.department.trim() || !form.role.trim()) return setError("All fields are required.");
    if (!form.salary || Number(form.salary) <= 0) return setError("Salary must be greater than 0.");
    setError("");
    onSave(form);
  };

  return <form className="modal-form" onSubmit={submit}>
    <h2>{employee ? "Edit Employee" : "Add Employee"}</h2>
    {error && <p className="error">{error}</p>}
    <label>Name<input value={form.name} onChange={e => update("name", e.target.value)} /></label>
    <label>Department<input value={form.department} onChange={e => update("department", e.target.value)} /></label>
    <label>Role<input value={form.role} onChange={e => update("role", e.target.value)} /></label>
    <label>Salary<input type="number" value={form.salary} onChange={e => update("salary", e.target.value)} /></label>
    <div className="actions"><button type="submit">Save</button><button type="button" onClick={onCancel}>Cancel</button></div>
  </form>;
}
