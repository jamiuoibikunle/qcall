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
exports.getLocation = void 0;
const opencage_api_client_1 = require("opencage-api-client");
const database_1 = __importDefault(require("../../config/database"));
const getLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.query.location)
            return res
                .status(400)
                .json({ status: false, message: "Required fields missing" });
        const { results } = yield (0, opencage_api_client_1.geocode)({
            q: req.query.location,
            key: process.env.OPENCAGE_KEY,
        });
        const county = results[0].components.county;
        if (!county)
            return res
                .status(400)
                .json({ status: false, message: "Couldn't get county" });
        const matchedResults = yield database_1.default.query("SELECT s.id as state_id, s.governor, s.deputy_governor, l.id as lga_id, l.chairman, l.vice_chairman, l.secretary, f.phone_number as fireservice, p.phone_number as police, h.phone_number as health FROM lgas as l INNER JOIN states as s ON l.state = s.name INNER JOIN fireservice as f ON f.state = s.name INNER JOIN health as h ON h.state = s.name INNER JOIN police as p ON p.state = s.name WHERE l.name = $1", [county]);
        return res.status(200).json({
            status: true,
            components: results[0].components,
            matched: matchedResults.rows[0],
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error });
    }
});
exports.getLocation = getLocation;
