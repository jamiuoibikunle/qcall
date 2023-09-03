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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../config/database"));
const states_1 = __importDefault(require("../../public/states"));
const state = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    const items = [];
    try {
        try {
            for (var _d = true, states_2 = __asyncValues(states_1.default), states_2_1; states_2_1 = yield states_2.next(), _a = states_2_1.done, !_a; _d = true) {
                _c = states_2_1.value;
                _d = false;
                const state = _c;
                const duplicate = yield database_1.default.query("SELECT * FROM states WHERE name = $1", [state]);
                if (duplicate.rows.length > 0)
                    continue;
                const result = yield database_1.default.query("INSERT INTO states (name) VALUES ($1)", [
                    state,
                ]);
                items.push(state);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = states_2.return)) yield _b.call(states_2);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res.status(200).json({ status: true, results: items });
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.default = state;
