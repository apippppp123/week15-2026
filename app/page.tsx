import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">Week 15 - Deployment with Vercel</h1>
      <p className="subtitle">Next.js + Prisma + SQLite</p>

      <div className="menu">
        <Link href="/about" className="menu-card">
          <h2>About →</h2>
          <p>Halaman About untuk menguji auto-deploy di Vercel.</p>
        </Link>

        <Link href="/catatan" className="menu-card">
          <h2>Catatan →</h2>
          <p>Aplikasi CRUD catatan dengan Prisma dan SQLite.</p>
        </Link>
      </div>
    </main>
  );
}