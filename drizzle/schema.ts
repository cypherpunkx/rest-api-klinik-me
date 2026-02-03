import {
  mysqlTable,
  index,
  primaryKey,
  int,
  varchar,
  date,
  time,
  mysqlEnum,
  datetime,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

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

export const dokter = mysqlTable(
  "dokter",
  {
    dokterId: int("dokter_id", { unsigned: true }).autoincrement().notNull(),
    nama: varchar({ length: 100 }).notNull(),
    jenis: mysqlEnum(["Gigi", "Kecantikan", "Umum"]).notNull(),
    createdAt: datetime("created_at", { mode: "string" }).default(
      sql`(CURRENT_TIMESTAMP)`,
    ),
  },
  (table) => [
    primaryKey({ columns: [table.dokterId], name: "dokter_dokter_id" }),
  ],
);

export const jadwalPraktek = mysqlTable(
  "jadwal_praktek",
  {
    jadwalPraktekId: int("jadwal_praktek_id", { unsigned: true })
      .autoincrement()
      .notNull(),
    dokterId: int("dokter_id", { unsigned: true }).references(
      () => dokter.dokterId,
    ),
    hari: varchar({ length: 20 }),
    jamBuka: time("jam_buka"),
    jamTutup: time("jam_tutup"),
  },
  (table) => [
    index("dokter_id").on(table.dokterId),
    primaryKey({
      columns: [table.jadwalPraktekId],
      name: "jadwal_praktek_jadwal_praktek_id",
    }),
  ],
);
