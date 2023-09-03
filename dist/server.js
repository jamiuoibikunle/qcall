"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const populate_1 = __importDefault(require("./src/routes/populate"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.get("/", (req, res) => {
    res.send({ status: true, message: "Works" });
});
app.use("/populate", populate_1.default);
app.listen(process.env.PORT, () => `Listening on port ${process.env.PORT}`);
