"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personasController_1 = __importDefault(require("../controllers/personasController"));
class PersonasRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/personas', personasController_1.default.listaPersonas);
        this.router.get('/personas/:id', personasController_1.default.verPersona);
        this.router.post('/personas', personasController_1.default.crearPersona);
        this.router.put('/personas/:id', personasController_1.default.actualizarPersona);
        this.router.delete('/personas/:id', personasController_1.default.borrarPersona);
    }
}
const personasRouter = new PersonasRouter();
exports.default = personasRouter.router;
