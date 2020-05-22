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
exports.CmdCentrosConsultorios = void 0;
const typeorm_1 = require("typeorm");
let CmdCentrosConsultorios = /** @class */ (() => {
    let CmdCentrosConsultorios = class CmdCentrosConsultorios {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_centro_consultorio" }),
        __metadata("design:type", Number)
    ], CmdCentrosConsultorios.prototype, "idCentroConsultorio", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "id_centro_medico" }),
        __metadata("design:type", Number)
    ], CmdCentrosConsultorios.prototype, "idCentroMedico", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "id_consultorio" }),
        __metadata("design:type", Number)
    ], CmdCentrosConsultorios.prototype, "idConsultorio", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "id_medico" }),
        __metadata("design:type", Number)
    ], CmdCentrosConsultorios.prototype, "idMedico", void 0);
    __decorate([
        typeorm_1.Column("date", { name: "fecha" }),
        __metadata("design:type", String)
    ], CmdCentrosConsultorios.prototype, "fecha", void 0);
    __decorate([
        typeorm_1.Column("time without time zone", { name: "hora_inicio" }),
        __metadata("design:type", String)
    ], CmdCentrosConsultorios.prototype, "horaInicio", void 0);
    __decorate([
        typeorm_1.Column("time without time zone", { name: "hora_fin" }),
        __metadata("design:type", String)
    ], CmdCentrosConsultorios.prototype, "horaFin", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdCentrosConsultorios.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdCentrosConsultorios.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], CmdCentrosConsultorios.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], CmdCentrosConsultorios.prototype, "estado", void 0);
    CmdCentrosConsultorios = __decorate([
        typeorm_1.Index("cmd_centros_consultorios_pkey", ["idCentroConsultorio"], {
            unique: true,
        }),
        typeorm_1.Entity("cmd_centros_consultorios", { schema: "public" })
    ], CmdCentrosConsultorios);
    return CmdCentrosConsultorios;
})();
exports.CmdCentrosConsultorios = CmdCentrosConsultorios;
