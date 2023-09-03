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
exports.getState = void 0;
const database_1 = __importDefault(require("../../config/database"));
const getState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield database_1.default.query("SELECT * FROM states");
        if (!results)
            return res.status(200).json({ status: false, message: "No results" });
        return res.status(200).json({ status: true, results: results === null || results === void 0 ? void 0 : results.rows });
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.getState = getState;
