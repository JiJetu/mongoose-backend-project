import cors from "cors";
import express, { Application, Request, Response } from "express";
import { ProductRoutes } from "./app/modules/Product/product.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// for product api endPoints
app.use("/api/products", ProductRoutes);

// for order api endPoints
app.use("/api/orders");

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
