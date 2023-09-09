import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import populate from "./src/routes/populate";
import migrate from "./src/routes/migrate";
import user from "./src/routes/user";
import location from "./src/routes/location";

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

app.listen(process.env.PORT, () => `Listening on port ${process.env.PORT}`);
