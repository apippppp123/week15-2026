import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { tambahCatatan, hapusCatatan } from "@/app/actions";

export const dynamic = "force-dynamic";

export default async function CatatanPage() {
  const daftar = await prisma.catatan.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="container">
      <Link href="/" className="back">
        ← Beranda
      </Link>
      <h1 className="title">Daftar Catatan</h1>
      <p className="subtitle">Tambah, ubah, dan hapus catatan.</p>

      <form action={tambahCatatan} className="card form">
        <input className="input" name="judul" placeholder="Judul" required />
        <textarea
          className="input"
          name="isi"
          placeholder="Isi catatan"
          rows={3}
          required
        />
        <div>
          <button type="submit" className="btn">
            + Tambah Catatan
          </button>
        </div>
      </form>

      {daftar.length === 0 && (
        <div className="card empty">Belum ada catatan.</div>
      )}

      <ul className="list">
        {daftar.map((c) => (
          <li key={c.id} className="card item">
            <h3>{c.judul}</h3>
            <p>{c.isi}</p>
            <small>{c.createdAt.toLocaleString("id-ID")}</small>
            <div className="actions">
              <Link href={`/catatan/${c.id}/edit`} className="btn btn-outline">
                Edit
              </Link>
              <form action={hapusCatatan.bind(null, c.id)}>
                <button type="submit" className="btn btn-danger">
                  Hapus
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}