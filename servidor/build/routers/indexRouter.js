"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Sistema TECHNO SALUD'));
        this.router.get('/saludos', indexController_1.listaSaludos);
        this.router.get('/saludos/:id', indexController_1.verSaludo);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
