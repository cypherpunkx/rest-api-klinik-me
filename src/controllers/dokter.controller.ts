import { Request, Response } from "express";
import config from "../config";
import { dokter } from "../models/dokter.model";
import { eq, like } from "drizzle-orm";

const getDokter = async (req: Request, res: Response) => {
  const { jenis = "" } = req.query as {
    jenis: string;
  };

  const data = await config.db
    .select()
    .from(dokter)
    .where(like(dokter.jenis, `%${jenis}%` as "Gigi" | "Kecantikan" | "Umum"));

  return res.status(200).json({
    success: true,
    message: "Get All Dokter",
    data,
  });
};

const createDokter = async (req: Request, res: Response) => {
  const { nama, jenis } = req.body as {
    nama: string;
    jenis: "Gigi" | "Kecantikan" | "Umum";
  };

  const [dokterData] = await config.db
    .select({ nama: dokter.nama })
    .from(dokter)
    .where(eq(dokter.nama, nama))
    .limit(1);

  if (dokterData) {
    throw new Error("Nama sudah digunakan. Harap gunakan nama lain.");
  }

  await config.db.insert(dokter).values({ nama, jenis });

  return res.status(200).json({
    success: true,
    message: "Dokter telah dibuat.",
  });
};

export default {
  getDokter,
  createDokter,
};
