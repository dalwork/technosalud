"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmdTiposConsultas = void 0;
const typeorm_1 = require("typeorm");
let CmdTiposConsultas = /** @class */ (() => {
    let CmdTiposConsultas = class CmdTiposConsultas {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_tipo_consulta" }),
        __metadata("design:type", Number)
    ], CmdTiposConsultas.prototype, "idTipoConsulta", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "tipo_consulta" }),
        __metadata("design:type", String)
    ], CmdTiposConsultas.prototype, "tipoConsulta", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdTiposConsultas.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdTiposConsultas.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], CmdTiposConsultas.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], CmdTiposConsultas.prototype, "estado", void 0);
    CmdTiposConsultas = __decorate([
        typeorm_1.Index("cmd_tipos_consultas_pkey", ["idTipoConsulta"], { unique: true }),
        typeorm_1.Entity("cmd_tipos_consultas", { schema: "public" })
    ], CmdTiposConsultas);
    return CmdTiposConsultas;
})();
exports.CmdTiposConsultas = CmdTiposConsultas;
