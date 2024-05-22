import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// creating order data into database
const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);

  return result;
};

// get all oder data from database
const getAllOrderFromDB = async () => {
  const result = await Order.find();

  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB
};
