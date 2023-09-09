"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const authenticateJWT_1 = __importDefault(require("../middlewares/authenticateJWT"));
const router = (0, express_1.Router)();
router.post("/login", user_1.loginUser);
router.post("/register", user_1.registerUser);
router.put("/", authenticateJWT_1.default, user_1.updateUser);
exports.default = router;
