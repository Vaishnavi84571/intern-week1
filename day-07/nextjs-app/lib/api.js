const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function getEmployees(params = '') {
  const res = await fetch(`${API_URL}/employees${params}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch employees');
  return res.json();
}

export async function getEmployee(id) {
  const res = await fetch(`${API_URL}/employees/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Employee not found');
  return res.json();
}
