import express from "express";
import dotenv from "dotenv";
import populate from "./src/routes/populate";
import migrate from "./src/routes/migrate";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send({ status: true, message: "Works" });
});
app.use("/populate", populate);
app.use("/migrate", migrate);

app.listen(process.env.PORT, () => `Listening on port ${process.env.PORT}`);
