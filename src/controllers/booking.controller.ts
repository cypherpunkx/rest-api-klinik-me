import { Request, Response } from "express";
import config from "../config";
import { dokter } from "../models/dokter.model";
import { and, eq } from "drizzle-orm";
import { jadwalPraktek } from "../models/jadwalPraktek.model";
import { booking } from "../models/booking.model";

const createBooking = async (req: Request, res: Response) => {
  const {
    dokterId,
    jadwalPraktekId,
    namaPasien,
    noTelp,
    tanggalBooking,
    jamBooking,
  } = req.body as {
    dokterId: number;
    jadwalPraktekId: number;
    namaPasien: string;
    noTelp: string;
    tanggalBooking: string;
    jamBooking: string;
  };

  const [dokterData] = await config.db
    .select({ dokterId: dokter.dokterId })
    .from(dokter)
    .where(eq(dokter.dokterId, dokterId))
    .limit(1);

  if (!dokterData) {
    throw new Error("Dokter tidak ditemukan.");
  }

  const [jadwalPraktekData] = await config.db
    .select({ jadwalPraktekId: jadwalPraktek.jadwalPraktekId })
    .from(jadwalPraktek)
    .where(
      and(
        eq(jadwalPraktek.dokterId, dokterId),
        eq(jadwalPraktek.jadwalPraktekId, jadwalPraktekId),
      ),
    )
    .limit(1);

  if (!jadwalPraktekData) {
    throw new Error("Jadwal tidak ditemukan.");
  }

  const [bookingData] = await config.db
    .select({ bookingId: booking.bookingId })
    .from(booking)
    .where(
      and(
        eq(booking.dokterId, dokterId),
        eq(booking.jadwalPraktekId, jadwalPraktekId),
        eq(booking.tanggalBooking, tanggalBooking),
        eq(booking.jamBooking, jamBooking),
      ),
    )
    .limit(1);

  if (bookingData) {
    throw new Error("Booking sudah ada.");
  }

  await config.db.insert(booking).values({
    dokterId: dokterData.dokterId,
    jadwalPraktekId: jadwalPraktekData.jadwalPraktekId,
    namaPasien,
    noTelp,
    tanggalBooking,
    jamBooking,
  });

  return res.status(200).json({
    success: true,
    message: "Booking telah dibuat.",
  });
};

export default {
  createBooking,
};
