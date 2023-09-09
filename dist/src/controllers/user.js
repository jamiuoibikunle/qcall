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
exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../../config/database"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { first_name, last_name, email, date_of_birth, gender, password } = req.body;
        if (!first_name ||
            !last_name ||
            !email ||
            !date_of_birth ||
            !gender ||
            !password)
            return res
                .status(400)
                .json({ status: 400, message: "Required fields missing" });
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        const duplicate = yield database_1.default.query("SELECT * FROM users WHERE email = $1", [
            email,
        ]);
        if (duplicate.rows.length > 0)
            return res.status(200).json({
                status: 400,
                message: `Duplicate: ${email} is already enrolled`,
            });
        const result = yield database_1.default.query("INSERT INTO users (first_name, last_name, email, date_of_birth, gender, password) VALUES ($1, $2, $3, $4, $5, $6)", [first_name, last_name, email, date_of_birth, gender, hashedPassword]);
        if (!result.rows)
            return res.status(400).json({
                status: 400,
                message: `Encountered error while saving user`,
            });
        const userDetails = yield database_1.default.query("SELECT id, email FROM users WHERE email = $1", [email]);
        const token = jsonwebtoken_1.default.sign(userDetails.rows[0], process.env.SECRET_KEY, { expiresIn: "30d" });
        return res.status(200).json({
            status: 200,
            token,
            message: `Authenticated: ${email} successfully registered`,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});
exports.registerUser = registerUser;
