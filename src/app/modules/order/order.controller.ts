import { Request, Response } from "express";
import { Order } from "./order.model";

const creatingOrder = async(req: Request, res: Response) => {
    const order = req.body;

    const result = await Order.create()
}