import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../Product/prodeuct.model";

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// pre save middleware / hook
orderSchema.pre("save", async function (next) {
  const order = this as TOrder;

  const product = await Product.findById(order.productId);
  if (product) {
    // checking inventory enough or not
    if (product.inventory.quantity < order.quantity) {
      const err = new Error("Insufficient quantity available in inventory");
      return next(err);
    }

    // update the inStock status into product
    if (product.inventory.quantity === 0) {
      product.inventory.inStock = false;
    }

    await product.save();
    next();
  }
});

// post save middleware / hook
orderSchema.post("save", async function (order: TOrder, next) {
  const product = await Product.findById(order.productId);
  if (product) {
    // reduce the inventory quantity into product
    product.inventory.quantity -= order.quantity;
    await product.save();
  }
  next();
});

export const Order = model<TOrder>("Order", orderSchema);
