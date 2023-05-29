import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();

// using cors
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing
app.get("/", (req: Request, res: Response) => {
  res.send("working successfully");
});

export default app;
