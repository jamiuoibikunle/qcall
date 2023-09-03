import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send({ status: true, message: "Works" });
});

app.listen(process.env.PORT, () => `Listening on port ${process.env.PORT}`);
