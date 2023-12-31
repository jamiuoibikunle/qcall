"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../config/database"));
const health = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield database_1.default.query("SELECT * FROM lgas");
        const lgas = results.rows;
        lgas.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO health (state, local_government) VALUES ($1, $2)", [item.state, item.name]);
        }));
        return res.status(200).json({ status: true, message: "Populated health" });
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.default = health;
