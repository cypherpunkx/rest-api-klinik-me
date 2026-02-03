import { relations } from "drizzle-orm/relations";
import { dokter, booking, jadwalPraktek } from "./schema";

export const bookingRelations = relations(booking, ({one}) => ({
	dokter: one(dokter, {
		fields: [booking.dokterId],
		references: [dokter.dokterId]
	}),
	jadwalPraktek: one(jadwalPraktek, {
		fields: [booking.jadwalPraktekId],
		references: [jadwalPraktek.jadwalPraktekId]
	}),
}));

export const dokterRelations = relations(dokter, ({many}) => ({
	bookings: many(booking),
	jadwalPrakteks: many(jadwalPraktek),
}));

export const jadwalPraktekRelations = relations(jadwalPraktek, ({one, many}) => ({
	bookings: many(booking),
	dokter: one(dokter, {
		fields: [jadwalPraktek.dokterId],
		references: [dokter.dokterId]
	}),
}));