import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import solutionsRouter from "./routes/solutions";
import insightsRouter from "./routes/insights";
import contactRouter from "./routes/contact";
import dashboardRouter from "./routes/dashboard";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "N7 Banking API", timestamp: new Date().toISOString() });
});

// API Routes
app.use("/api/solutions", solutionsRouter);
app.use("/api/insights", insightsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/dashboard", dashboardRouter);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`🚀 N7 Banking API running on http://localhost:${PORT}`);
});

export default app;
