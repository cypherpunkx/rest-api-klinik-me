import { Request, Response } from "express";
import { dokter } from "../models/dokter.model";
import config from "../config";
import { eq } from "drizzle-orm";
import { jadwalPraktek } from "../models/jadwalPraktek.model";

const getJadwalPraktek = async (_req: Request, res: Response) => {
  const data = await config.db
    .select({
      jadwalPraktekId: jadwalPraktek.jadwalPraktekId,
      dokterId: dokter.dokterId,
      hari: jadwalPraktek.hari,
      jamBuka: jadwalPraktek.jamBuka,
      jamTutup: jadwalPraktek.jamTutup,
      nama: dokter.nama,
      jenis: dokter.jenis,
    })
    .from(jadwalPraktek)
    .leftJoin(dokter, eq(dokter.dokterId, jadwalPraktek.dokterId));

  const jadwalGrouping = data.reduce(
    (curr, acc) => {
      if (!curr[acc.dokterId!]) {
        curr[acc.dokterId!] = [];
      }

      curr[acc.dokterId!].push(acc);

      return curr;
    },
    {} as { [key: string]: any },
  );

  const dokters = [...new Set(data.map((row) => row.dokterId))];

  const result = dokters.map((row) => {
    return jadwalGrouping[row!];
  });

  return res.status(200).json({
    success: true,
    message: "Get All Jadwal Praktek",
    result,
  });
};

const createJadwalPraktek = async (req: Request, res: Response) => {
  const { dokterId, hari, jamBuka, jamTutup } = req.body as unknown as {
    dokterId: number;
    hari: string;
    jamBuka: string;
    jamTutup: string;
  };

  const [dokterData] = await config.db
    .select()
    .from(dokter)
    .where(eq(dokter.dokterId, dokterId));

  if (!dokterData) {
    throw new Error("Dokter tidak ditemukan.");
  }

  await config.db.insert(jadwalPraktek).values({
    dokterId: dokterData.dokterId,
    hari,
    jamBuka,
    jamTutup,
  });

  return res.status(200).json({
    success: true,
    message: "Jadwal praktek telah dibuat.",
  });
};

export default {
  getJadwalPraktek,
  createJadwalPraktek,
};
