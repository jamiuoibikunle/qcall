"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const state_1 = __importDefault(require("../populate/state"));
const router = (0, express_1.Router)();
router.post("/state", state_1.default);
exports.default = router;