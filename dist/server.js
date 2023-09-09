"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const populate_1 = __importDefault(require("./src/routes/populate"));
const migrate_1 = __importDefault(require("./src/routes/migrate"));
const user_1 = __importDefault(require("./src/routes/user"));
const location_1 = __importDefault(require("./src/routes/location"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
dotenv_1.default.config();
app.get("/", (req, res) => {
    res.send({ status: true, message: "Works" });
});
app.use("/populate", populate_1.default);
app.use("/migrate", migrate_1.default);
app.use("/user", user_1.default);
app.use("/location", location_1.default);
app.listen(process.env.PORT, () => `Listening on port ${process.env.PORT}`);
