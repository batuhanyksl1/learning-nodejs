import express, { Request, Response } from "express";
import routes from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";

export const app = express();

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "Server is up and running",
  });
});

app.use("/api", routes);

app.use(errorMiddleware);
