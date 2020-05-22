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
exports.borrarPersona = exports.actualizarPersona = exports.crearPersona = exports.verPersona = exports.listaPersonas = void 0;
const typeorm_1 = require("typeorm");
const BasPersonas_1 = require("../entities/BasPersonas");
exports.listaPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personas = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).find();
        return res.json(personas);
    }
    catch (e) {
        //return res.status(500).json('Error Servidor Interno');
        return e;
    }
});
exports.verPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const persona = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).findOne(id);
        return res.json(persona);
    }
    catch (e) {
        return res.status(500).json('Error Servidor Interno');
    }
});
exports.crearPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevaPersona = typeorm_1.getRepository(BasPersonas_1.BasPersonas).create(req.body);
        const resultado = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).save(nuevaPersona);
        return res.json(resultado);
    }
    catch (e) {
        return res.status(500).json('Error Servidor Interno');
    }
});
exports.actualizarPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            return res.json('No se tiene Registro');
        }
    }
    catch (e) {
        return res.status(500).json('Error Servidor Interno');
    }
});
exports.borrarPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const persona = yield typeorm_1.getRepository(BasPersonas_1.BasPersonas).delete(req.params.id);
        return res.json(persona);
    }
    catch (e) {
        return res.status(500).json('Error Servidor Interno');
    }
});
