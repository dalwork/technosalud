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
exports.CmdCentrosMedicos = void 0;
const typeorm_1 = require("typeorm");
const CmdTiposCentros_1 = require("./CmdTiposCentros");
let CmdCentrosMedicos = /** @class */ (() => {
    let CmdCentrosMedicos = class CmdCentrosMedicos {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_centro_medico" }),
        __metadata("design:type", Number)
    ], CmdCentrosMedicos.prototype, "idCentroMedico", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "id_nivel" }),
        __metadata("design:type", Number)
    ], CmdCentrosMedicos.prototype, "idNivel", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "centro_medico" }),
        __metadata("design:type", String)
    ], CmdCentrosMedicos.prototype, "centroMedico", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "direccion" }),
        __metadata("design:type", String)
    ], CmdCentrosMedicos.prototype, "direccion", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "telefono", length: 30 }),
        __metadata("design:type", String)
    ], CmdCentrosMedicos.prototype, "telefono", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdCentrosMedicos.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdCentrosMedicos.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], CmdCentrosMedicos.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], CmdCentrosMedicos.prototype, "estado", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => CmdTiposCentros_1.CmdTiposCentros, (cmdTiposCentros) => cmdTiposCentros.cmdCentrosMedicos),
        typeorm_1.JoinColumn([
            { name: "id_tipo_centro", referencedColumnName: "idTipoCentro" },
        ]),
        __metadata("design:type", CmdTiposCentros_1.CmdTiposCentros)
    ], CmdCentrosMedicos.prototype, "idTipoCentro", void 0);
    CmdCentrosMedicos = __decorate([
        typeorm_1.Index("cmd_centros_medicos_pkey", ["idCentroMedico"], { unique: true }),
        typeorm_1.Entity("cmd_centros_medicos", { schema: "public" })
    ], CmdCentrosMedicos);
    return CmdCentrosMedicos;
})();
exports.CmdCentrosMedicos = CmdCentrosMedicos;
