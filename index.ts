import express from "express";
import routes from "./routes/tik-tok";

const app = express();
const port = 4000;

app.use("/v1/tik-tok", routes);

app.listen(port, () => console.info(`Express listening on port ${port}!`));
