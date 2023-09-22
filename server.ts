import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import populate from "./src/routes/populate";
import migrate from "./src/routes/migrate";
import user from "./src/routes/user";
import location from "./src/routes/location";
import * as swaggerDocument from "./documentation/swagger.json";

const app = express();

app.use(bodyParser.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send({ status: true, message: "Works" });
});
app.use("/populate", populate);
app.use("/migrate", migrate);
app.use("/user", user);
app.use("/location", location);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT, () => `Listening on port ${process.env.PORT}`);
