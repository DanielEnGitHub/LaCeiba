import express from "express";
import morgan from "morgan";

// import routes
import CategoryRouter from "./routes/category.routes.js";
import ProviderRouter from "./routes/provider.routes.js";

// express
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api", CategoryRouter);
app.use("/api", ProviderRouter);

export default app;
