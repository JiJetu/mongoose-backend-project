"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
// creating product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.ProductService.createProductIntoDB(productData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to create product successfully",
            error,
        });
    }
});
// getting all product at a time
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const query = (_a = req.query) === null || _a === void 0 ? void 0 : _a.searchTerm;
        const results = yield product_service_1.ProductService.getAllProductFromDB();
        // finding all searching or query data
        if (query) {
            const searchProduct = results.filter((result) => result.name.split(" ")[0].toLocaleLowerCase() ===
                query.toLocaleLowerCase() //if query is true then we find the query field data according to our database data's name field. it will help us to get all the searching product which name start with searching field name  
            );
            if (searchProduct) {
                return res.status(200).json({
                    success: true,
                    message: "Products matching search term 'iphone' fetched successfully!",
                    data: searchProduct,
                });
            }
            return res.json({
                success: false,
                message: "failed to fetched products matching search term 'iphone'",
                data: searchProduct,
            });
        }
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: results,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to find all product",
            error,
        });
    }
});
// getting a single product by id
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to find a single product",
            error,
        });
    }
});
// updating product by id and update info
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const result = yield product_service_1.ProductService.updateProductIntoDB(productId, updateData, { new: true });
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to updating product",
            error,
        });
    }
});
// delete a product by id
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.deleteProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to deleting product",
            error,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
