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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BasPersonas_1 = require("../entities/BasPersonas");
class PersonasController {
    listaPersonas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personas = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).find();
                return res.json(personas);
            }
            catch (e) {
                res.status(500).json({ texto: 'Error Servidor Interno' });
            }
        });
    }
    verPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const persona = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).findOne(id);
                return res.json(persona);
            }
            catch (e) {
                res.status(500).json({ texto: 'Error Servidor Interno' });
            }
        });
    }
    crearPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevaPersona = typeorm_1.getRepository(BasPersonas_1.BasPersonas).create(req.body);
                const resultado = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).save(nuevaPersona);
                return res.json(resultado);
            }
            catch (e) {
                res.status(500).json({ texto: 'Error Servidor Interno' });
            }
        });
    }
    actualizarPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("aqui esta " + req.params.id);
                const persona = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).findOne(req.params.id);
                console.log(persona);
                if (persona) {
                    typeorm_1.getRepository(BasPersonas_1.BasPersonas).merge(persona, req.body);
                    const resultado = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).save(persona);
                    return res.json(resultado);
                }
                else {
                    res.json({ texto: 'No se tiene Registro' });
                }
            }
            catch (e) {
                res.status(500).json({ texto: 'Error Servidor Interno' });
            }
        });
    }
    borrarPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persona = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).delete(req.params.id);
                return res.json(persona);
            }
            catch (e) {
                res.status(500).json({ error: 'Error Servidor Interno' });
            }
        });
    }
}
const personasController = new PersonasController();
exports.default = personasController;
