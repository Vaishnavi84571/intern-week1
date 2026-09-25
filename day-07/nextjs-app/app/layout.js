import Link from 'next/link';

export const metadata = {
  title: 'Employee Management Dashboard',
  description: 'Day 07 Next.js application'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, background: '#f5f7fb' }}>
        <header style={{ padding: '18px 30px', background: '#111827', color: 'white' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 700 }}>
            Employee Management
          </Link>
        </header>
        <main style={{ maxWidth: 1000, margin: '30px auto', padding: '0 20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
