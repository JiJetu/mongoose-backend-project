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
exports.ProductService = void 0;
const prodeuct_model_1 = require("./prodeuct.model");
// creating product data into database
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prodeuct_model_1.Product.create(payload);
    return result;
});
// getting product all data and search data from database
const getAllProductFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prodeuct_model_1.Product.find();
    return result;
});
// get a single product data from database
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prodeuct_model_1.Product.findOne({ _id: id });
    return result;
});
// updating product data into database
const updateProductIntoDB = (id, payload, condition) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prodeuct_model_1.Product.findOneAndUpdate({ _id: id }, payload, condition);
    return result;
});
// deleting product a data from database
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prodeuct_model_1.Product.findOneAndDelete({ _id: id });
    return result;
});
exports.ProductService = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB,
};
