import { Router } from "express";
import dokterController from "../controllers/dokter.controller";

const dokterRouter = Router();

dokterRouter.get("/", dokterController.getDokter);
dokterRouter.post("/", dokterController.createDokter);

export default dokterRouter;
