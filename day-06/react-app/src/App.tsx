import { useMemo, useState } from "react";
import type { Employee, EmployeeForm } from "./types/employee";
import { useEmployees } from "./hooks/useEmployees";
import { Stats } from "./components/Stats";
import { EmployeeCard } from "./components/EmployeeCard";
import { EmployeeForm as EmployeeFormComponent } from "./components/EmployeeForm";
import "./styles.css";

type SortOption = "name" | "salaryHigh" | "salaryLow";

export default function App() {
  const { employees, setEmployees, loading, error } = useEmployees();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sort, setSort] = useState<SortOption>("name");
  const [editing, setEditing] = useState<Employee | undefined>();
  const [showForm, setShowForm] = useState(false);

  const departments = useMemo(() => ["All", ...Array.from(new Set(employees.map(e => e.department))).sort()], [employees]);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return employees.filter(e => {
      const matchesSearch = !query || e.name.toLowerCase().includes(query) || e.department.toLowerCase().includes(query);
      return matchesSearch && (department === "All" || e.department === department);
    }).sort((a, b) => {
      if (sort === "salaryHigh") return b.salary - a.salary;
      if (sort === "salaryLow") return a.salary - b.salary;
      return a.name.localeCompare(b.name);
    });
  }, [employees, search, department, sort]);

  const saveEmployee = (data: EmployeeForm) => {
    const salary = Number(data.salary);
    if (editing) {
      setEmployees(prev => prev.map(e => e.id === editing.id ? { ...e, ...data, salary } : e));
    } else {
      setEmployees(prev => [...prev, { id: Date.now(), ...data, salary }]);
    }
    setShowForm(false);
    setEditing(undefined);
  };

  const deleteEmployee = (id: number) => {
    if (window.confirm("Delete this employee?")) setEmployees(prev => prev.filter(e => e.id !== id));
  };

  const details = (employee: Employee) => window.alert(`${employee.name}
${employee.department}
${employee.role}
Salary: ₹${employee.salary.toLocaleString("en-IN")}`);

  if (loading) return <main className="container"><h1>Employee Dashboard</h1><p>Loading employees...</p></main>;
  if (error) return <main className="container"><h1>Employee Dashboard</h1><p className="error">{error}</p></main>;

  return <main className="container">
    <header><h1>React Employee Dashboard</h1><p>TypeScript + React Employee Management</p></header>
    <Stats employees={employees} />
    <section className="toolbar">
      <input placeholder="Search by name or department" value={search} onChange={e => setSearch(e.target.value)} />
      <select value={department} onChange={e => setDepartment(e.target.value)}>{departments.map(d => <option key={d}>{d}</option>)}</select>
      <select value={sort} onChange={e => setSort(e.target.value as SortOption)}>
        <option value="name">Sort by Name</option><option value="salaryHigh">Salary: High to Low</option><option value="salaryLow">Salary: Low to High</option>
      </select>
      <button onClick={() => { setEditing(undefined); setShowForm(true); }}>Add Employee</button>
    </section>
    <section className="grid">
      {filtered.map(employee => <EmployeeCard key={employee.id} employee={employee} onDetails={details} onEdit={e => { setEditing(e); setShowForm(true); }} onDelete={deleteEmployee} />)}
    </section>
    {filtered.length === 0 && <p className="empty">No employees found.</p>}
    {showForm && <div className="overlay"><div className="modal"><EmployeeFormComponent employee={editing} onSave={saveEmployee} onCancel={() => { setShowForm(false); setEditing(undefined); }} /></div></div>}
  </main>;
}
