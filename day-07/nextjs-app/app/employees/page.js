'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');

  async function loadEmployees() {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (department) params.set('department', department);
    const res = await fetch(`http://localhost:5000/api/employees?${params.toString()}`);
    const data = await res.json();
    setEmployees(data);
  }

  useEffect(() => { loadEmployees(); }, []);

  async function deleteEmployee(id) {
    if (!confirm('Delete this employee?')) return;
    await fetch(`http://localhost:5000/api/employees/${id}`, { method: 'DELETE' });
    loadEmployees();
  }

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Employees</h1>
        <Link href="/employees/create">+ Add Employee</Link>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search name/email" style={{ padding: 10, flex: 1 }} />
        <input value={department} onChange={e => setDepartment(e.target.value)}
          placeholder="Department" style={{ padding: 10 }} />
        <button onClick={loadEmployees}>Search</button>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        {employees.map(employee => (
          <article key={employee.id} style={{ background: 'white', padding: 18, borderRadius: 8 }}>
            <h3>{employee.name}</h3>
            <p>{employee.role} · {employee.department}</p>
            <p>{employee.email} · Salary: ₹{employee.salary}</p>
            <Link href={`/employees/${employee.id}`}>Details</Link>
            {' | '}
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </article>
        ))}
      </div>
    </section>
  );
}
