import express from "express";
import routes from "./routes/tiktok";
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["Set-Cookie", "X-Total-Results"],
    allowedHeaders: [
      "Authorization",
      "Content-Type",
      "membership-id",
      "account-id",
      "X-Requested-With",
      "Accept",
      "Origin",
    ],
  })
);

app.use("/v1/tiktok", routes);

app.get("/up", (req: any, res: any) => {
  res.status(200).send("is healthy");
});

app.listen(port, () => console.info(`Express listening on port ${port}!`));
