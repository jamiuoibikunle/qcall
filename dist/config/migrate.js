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
    users: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield database_1.default.query("CREATE TABLE users (ID SERIAL PRIMARY KEY, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, date_of_birth DATE NOT NULL, gender VARCHAR(255), created_at TIMESTAMP DEFAULT NOW())");
        if (!result)
            return res
                .status(400)
                .json({ status: false, message: "Error while creating table" });
        return res
            .status(200)
            .json({ status: true, message: "User table created" });
    }),
    states: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield database_1.default.query("CREATE TABLE states (ID SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, governor VARCHAR(255), deputy_governor VARCHAR(255), created_at TIMESTAMP DEFAULT NOW())");
        if (!result)
            return res
                .status(400)
                .json({ status: false, message: "Error while creating table" });
        return res
            .status(200)
            .json({ status: true, message: "State table created" });
    }),
    lgas: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield database_1.default.query("CREATE TABLE lgas (ID SERIAL PRIMARY KEY, state VARCHAR(255) NULL, name VARCHAR(255) NOT NULL UNIQUE, chairman VARCHAR(255), vice_chairman VARCHAR(255), secretary VARCHAR(255), created_at TIMESTAMP DEFAULT NOW(), FOREIGN KEY (state) REFERENCES states(name))");
        if (!result)
            return res
                .status(400)
                .json({ status: false, message: "Error while creating table" });
        return res.status(200).json({ status: true, message: "LGA table created" });
    }),
    police: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield database_1.default.query("CREATE TABLE police (ID SERIAL PRIMARY KEY, phone_number VARCHAR(255), state VARCHAR(255) NOT NULL, local_government VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT NOW(), FOREIGN KEY (state) REFERENCES states(name), FOREIGN KEY (local_government) REFERENCES lgas(name))");
        if (!result)
            return res
                .status(400)
                .json({ status: false, message: "Error while creating table" });
        return res
            .status(200)
            .json({ status: true, message: "Police table created" });
    }),
};
exports.default = migrateDB;
