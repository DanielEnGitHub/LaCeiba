import express from "express";
import morgan from "morgan";
import cors from "cors";

// import routes
import CategoryRouter from "./routes/category.routes.js";
import ProviderRouter from "./routes/provider.routes.js";
import ProductRoute from "./routes/product.routes.js";

// express
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api", CategoryRouter);
app.use("/api", ProviderRouter)
app.use("/api", ProductRoute);

export default app;
