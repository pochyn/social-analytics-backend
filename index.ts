import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 4000;

app.get("/", (req: Request, res: Response) => res.send("Express app works!!"));

app.listen(port, () => console.info(`Express listening on port ${port}!`));
