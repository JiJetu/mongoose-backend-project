import { Request, Response } from "express";
import { OrderServices } from "./order.service";

// creating order
const creatingOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const result = await OrderServices.createOrderIntoDB(order);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to create order successfully",
      error,
    });
  }
};

// getting all oder or all require field oder data
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    // email query data will get is its true
    if (email) {
      const result = await OrderServices.getAllOrderFromDB(email as string);

      if (result.length > 0) {
        return res.status(200).json({
          success: true,
          message: "Orders fetched successfully for user email!",
          data: result,
        });
      }

      //   if there is no data of the query search in database then message will be showed
      return res.status(200).json({
        success: false,
        message: "Order not found",
      });
    }

    const result = await OrderServices.getAllOrderFromDB(undefined);

    // getting all order data
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }

    // if there is no order data in database then then message will be showed
    res.status(200).json({
      success: false,
      message: "Order not found",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to get order successfully",
      error,
    });
  }
};

export const OrderController = {
  creatingOrder,
  getAllOrder,
};
