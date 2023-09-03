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
const database_1 = __importDefault(require("./database"));
const migrateDB = {
    states: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield database_1.default.query("CREATE TABLE states (ID SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, deputy_governor VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL UNIQUE, created_at TIMESTAMP DEFAULT NOW())");
        if (!result)
            return res
                .status(400)
                .json({ status: false, message: "Error while creating table" });
        return res.status(200).json({ status: true, message: "Table created" });
    }),
    police: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield database_1.default.query("CREATE TABLE police (ID SERIAL PRIMARY KEY, phone_number VARCHAR(255) NOT NULL, state_id INT NOT NULL, created_at TIMESTAMP DEFAULT NOW(), FOREIGN KEY (state_id) REFERENCES states(id))");
        if (!result)
            return res
                .status(400)
                .json({ status: false, message: "Error while creating table" });
        return res.status(200).json({ status: true, message: "Table created" });
    }),
};
exports.default = migrateDB;
