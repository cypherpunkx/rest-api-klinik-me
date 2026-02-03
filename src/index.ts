import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import compression from "compression";
import dokterRouter from "./routes/dokter.route";
import errorMiddleware from "./middlewares/error.middleware";
import jadwalPraktekRouter from "./routes/jadwal-praktek.route";
import bookingRouter from "./routes/booking.route";

const app = express();

app.use(compression());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/dokter", dokterRouter);
app.use("/api/jadwal-praktek", jadwalPraktekRouter);
app.use("/api/booking", bookingRouter);
app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => console.log(`running at localhost:${PORT}`));
