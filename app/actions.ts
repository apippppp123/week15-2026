"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function tambahCatatan(formData: FormData) {
  const judul = String(formData.get("judul") ?? "").trim();
  const isi = String(formData.get("isi") ?? "").trim();
  if (!judul || !isi) return;

  await prisma.catatan.create({ data: { judul, isi } });
  revalidatePath("/catatan");
}

export async function ubahCatatan(id: number, formData: FormData) {
  const judul = String(formData.get("judul") ?? "").trim();
  const isi = String(formData.get("isi") ?? "").trim();
  if (!judul || !isi) return;

  await prisma.catatan.update({ where: { id }, data: { judul, isi } });
  revalidatePath("/catatan");
  redirect("/catatan");
}

export async function hapusCatatan(id: number) {
  await prisma.catatan.delete({ where: { id } });
  revalidatePath("/catatan");
}