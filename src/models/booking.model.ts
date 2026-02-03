import {
  mysqlTable,
  index,
  primaryKey,
  int,
  varchar,
  time,
  date,
} from "drizzle-orm/mysql-core";
import { dokter } from "./dokter.model";
import { createSelectSchema } from "drizzle-valibot";
import { jadwalPraktek } from "./jadwalPraktek.model";

export const booking = mysqlTable(
  "booking",
  {
    bookingId: int("booking_id", { unsigned: true }).autoincrement().notNull(),
    dokterId: int("dokter_id", { unsigned: true }).references(
      () => dokter.dokterId,
    ),
    jadwalPraktekId: int("jadwal_praktek_id", { unsigned: true }).references(
      () => jadwalPraktek.jadwalPraktekId,
    ),
    namaPasien: varchar("nama_pasien", { length: 100 }),
    noTelp: varchar("no_telp", { length: 100 }),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    tanggalBooking: date("tanggal_booking", { mode: "string" }),
    jamBooking: time("jam_booking"),
  },
  (table) => [
    index("dokter_id").on(table.dokterId),
    index("jadwal_praktek_id").on(table.jadwalPraktekId),
    primaryKey({ columns: [table.bookingId], name: "booking_booking_id" }),
  ],
);

export const bookingCreateSelectSchema = createSelectSchema(booking);
