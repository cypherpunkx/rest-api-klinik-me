import {
  mysqlTable,
  index,
  primaryKey,
  int,
  varchar,
  time,
} from "drizzle-orm/mysql-core";
import { dokter } from "./dokter.model";
import { createSelectSchema } from "drizzle-valibot";

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

export const jadwalPraktekSchema = createSelectSchema(jadwalPraktek);
