import cors from "cors";
import express, { Application, Request, Response } from "express";
import { ProductRoutes } from "./app/modules/Product/product.route";
import { OrderRouter } from "./app/modules/order/order.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// for product api endPoints
app.use("/api/products", ProductRoutes);

// for order api endPoints
app.use("/api/orders", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
