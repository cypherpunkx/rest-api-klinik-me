import { sql } from "drizzle-orm";
import { createSelectSchema } from "drizzle-valibot";

import {
  mysqlTable,
  primaryKey,
  int,
  varchar,
  mysqlEnum,
  datetime,
} from "drizzle-orm/mysql-core";
import { pipe, set } from "valibot";

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

export const dokterSelectSchema = createSelectSchema(dokter);
