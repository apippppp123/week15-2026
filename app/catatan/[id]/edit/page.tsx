import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ubahCatatan } from "@/app/actions";

export const dynamic = "force-dynamic";

export default async function EditCatatanPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const catatan = await prisma.catatan.findUnique({
    where: { id: Number(id) },
  });

  if (!catatan) notFound();

  return (
    <main className="container">
      <Link href="/catatan" className="back">
        ← Kembali
      </Link>
      <h1 className="title">Edit Catatan</h1>

      <form action={ubahCatatan.bind(null, catatan.id)} className="card form">
        <input
          className="input"
          name="judul"
          defaultValue={catatan.judul}
          required
        />
        <textarea
          className="input"
          name="isi"
          defaultValue={catatan.isi}
          rows={5}
          required
        />
        <div>
          <button type="submit" className="btn">
            Simpan
          </button>
        </div>
      </form>
    </main>
  );
}