-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `booking` (
	`booking_id` int unsigned AUTO_INCREMENT NOT NULL,
	`dokter_id` int unsigned,
	`jadwal_praktek_id` int unsigned,
	`nama_pasien` varchar(100),
	`no_telp` varchar(100),
	`tanggal_booking` date,
	`jam_booking` time,
	CONSTRAINT `booking_booking_id` PRIMARY KEY(`booking_id`)
);
--> statement-breakpoint
CREATE TABLE `dokter` (
	`dokter_id` int unsigned AUTO_INCREMENT NOT NULL,
	`nama` varchar(100) NOT NULL,
	`jenis` enum('Gigi','Kecantikan','Umum') NOT NULL,
	`created_at` datetime DEFAULT (CURRENT_TIMESTAMP),
	CONSTRAINT `dokter_dokter_id` PRIMARY KEY(`dokter_id`)
);
--> statement-breakpoint
CREATE TABLE `jadwal_praktek` (
	`jadwal_praktek_id` int unsigned AUTO_INCREMENT NOT NULL,
	`dokter_id` int unsigned,
	`hari` varchar(20),
	`jam_buka` time,
	`jam_tutup` time,
	CONSTRAINT `jadwal_praktek_jadwal_praktek_id` PRIMARY KEY(`jadwal_praktek_id`)
);
--> statement-breakpoint
ALTER TABLE `booking` ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`dokter_id`) REFERENCES `dokter`(`dokter_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `booking` ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`jadwal_praktek_id`) REFERENCES `jadwal_praktek`(`jadwal_praktek_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `jadwal_praktek` ADD CONSTRAINT `jadwal_praktek_ibfk_1` FOREIGN KEY (`dokter_id`) REFERENCES `dokter`(`dokter_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `dokter_id` ON `booking` (`dokter_id`);--> statement-breakpoint
CREATE INDEX `jadwal_praktek_id` ON `booking` (`jadwal_praktek_id`);--> statement-breakpoint
CREATE INDEX `dokter_id` ON `jadwal_praktek` (`dokter_id`);
*/