'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateEmployee() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '', email: '', department: '', role: '', salary: ''
  });
  const [error, setError] = useState('');

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    setError('');

    const res = await fetch('http://localhost:5000/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, salary: Number(form.salary) })
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.message || 'Could not create employee');
      return;
    }

    router.push('/employees');
  }

  return (
    <section>
      <h1>Create Employee</h1>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <form onSubmit={submit} style={{ display: 'grid', gap: 12, maxWidth: 500 }}>
        {['name', 'email', 'department', 'role', 'salary'].map(field => (
          <input key={field} name={field} value={form[field]}
            onChange={update} placeholder={field} required
            type={field === 'salary' ? 'number' : 'text'}
            style={{ padding: 10 }} />
        ))}
        <button type="submit">Create Employee</button>
      </form>
    </section>
  );
}
