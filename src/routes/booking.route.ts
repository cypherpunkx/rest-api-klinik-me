import { Router } from "express";
import bookingController from "../controllers/booking.controller";

const bookingRouter = Router();

bookingRouter.post("/", bookingController.createBooking);

export default bookingRouter;
