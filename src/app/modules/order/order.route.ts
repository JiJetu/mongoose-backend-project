import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/", OrderController.creatingOrder);

router.get("/", OrderController.getAllOrder);

export const OrderRouter = router;
