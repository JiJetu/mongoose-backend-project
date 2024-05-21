import { Request, Response } from "express";
import { ProductService } from "./product.service";

// creating product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const result = await ProductService.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to create product successfully",
      error,
    });
  }
};

// getting all product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to find all product",
      error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);

    res.status(200).json({
        success: true,
        message: "Product fetched successfully!",
        data: result,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to find all product",
      error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct
};
