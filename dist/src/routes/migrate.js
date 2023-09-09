"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const migrate_1 = __importDefault(require("../../config/migrate"));
const router = (0, express_1.Router)();
router.post("/state", migrate_1.default.states);
router.post("/lgas", migrate_1.default.lgas);
router.post("/user", migrate_1.default.users);
router.post("/police", migrate_1.default.police);
exports.default = router;
