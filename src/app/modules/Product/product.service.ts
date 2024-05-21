import { Product } from "./prodeuct.model";
import { TProduct } from "./product.interface";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

export const ProductService = {
  createProduct,
};
