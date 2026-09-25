import type { Employee } from "../types/employee";

interface StatsProps { employees: Employee[]; }

export function Stats({ employees }: StatsProps) {
  const averageSalary = employees.length
    ? employees.reduce((sum, e) => sum + e.salary, 0) / employees.length
    : 0;
  const departments = new Set(employees.map(e => e.department)).size;

  return <section className="stats">
    <div className="stat"><span>Total Employees</span><strong>{employees.length}</strong></div>
    <div className="stat"><span>Average Salary</span><strong>₹{Math.round(averageSalary).toLocaleString("en-IN")}</strong></div>
    <div className="stat"><span>Departments</span><strong>{departments}</strong></div>
  </section>;
}
