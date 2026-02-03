import { Router } from "express";
import jadwalPraktekController from "../controllers/jadwal-praktek.controller";

const jadwalPraktekRouter = Router();

jadwalPraktekRouter.get("/", jadwalPraktekController.getJadwalPraktek);
jadwalPraktekRouter.post("/", jadwalPraktekController.createJadwalPraktek);

export default jadwalPraktekRouter;
