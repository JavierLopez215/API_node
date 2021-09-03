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
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM game');
            res.json(games);
        });
    }
    getOne(req, res) {
        res.json({
            text: 'listing games'
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO game set ?', [req.body]);
            res.json({
                message: 'Game Saved'
            });
            // res.json(req.body);
        });
    }
    delete(req, res) {
        res.json({
            text: 'deleting a game'
        });
    }
    update(req, res) {
        res.json({
            text: 'deleting a game'
        });
    }
}
const gameController = new GamesController();
exports.default = gameController;
