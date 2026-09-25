'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function EmployeeDetails() {
  const params = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/employees/${params.id}`)
      .then(res => res.json())
      .then(setEmployee);
  }, [params.id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <section>
      <Link href="/employees">← Back</Link>
      <h1>{employee.name}</h1>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Role:</strong> {employee.role}</p>
      <p><strong>Salary:</strong> ₹{employee.salary}</p>
    </section>
  );
}
