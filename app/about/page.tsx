import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container">
      <Link href="/" className="back">
        ← Beranda
      </Link>
      <h1 className="title">Ini adalah halaman Aboutt</h1>
      <p className="subtitle">Halaman ini di-deploy otomatis lewat Vercel.</p>
    </main>
  );
}