import express from "express";
import dotenv from "dotenv";
import populate from "./src/routes/populate";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send({ status: true, message: "Works" });
});
app.use("/populate", populate);

app.listen(process.env.PORT, () => `Listening on port ${process.env.PORT}`);
