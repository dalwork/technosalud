"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personasController_1 = require("../controllers/personasController");
class PersonasRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/personas', personasController_1.listaPersonas);
        this.router.get('/personas/:id', personasController_1.verPersona);
        this.router.post('/personas', personasController_1.crearPersona);
        this.router.put('/personas/:id', personasController_1.actualizarPersona);
        this.router.delete('/personas/:id', personasController_1.borrarPersona);
    }
}
const personasRouter = new PersonasRouter();
exports.default = personasRouter.router;
