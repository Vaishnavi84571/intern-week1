import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <h1>Day 07 — Employee Management Dashboard</h1>
      <p>Next.js frontend connected to a Node.js/Express REST API.</p>
      <Link href="/employees">Open Employees</Link>
    </section>
  );
}
