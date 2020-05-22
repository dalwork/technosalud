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
exports.CmdTurnosMedicos = void 0;
const typeorm_1 = require("typeorm");
let CmdTurnosMedicos = /** @class */ (() => {
    let CmdTurnosMedicos = class CmdTurnosMedicos {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_turno_medico" }),
        __metadata("design:type", Number)
    ], CmdTurnosMedicos.prototype, "idTurnoMedico", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "id_medico" }),
        __metadata("design:type", Number)
    ], CmdTurnosMedicos.prototype, "idMedico", void 0);
    __decorate([
        typeorm_1.Column("time without time zone", { name: "hora_inicio", nullable: true }),
        __metadata("design:type", Object)
    ], CmdTurnosMedicos.prototype, "horaInicio", void 0);
    __decorate([
        typeorm_1.Column("time without time zone", { name: "hora_fin", nullable: true }),
        __metadata("design:type", Object)
    ], CmdTurnosMedicos.prototype, "horaFin", void 0);
    __decorate([
        typeorm_1.Column("date", { name: "fecha" }),
        __metadata("design:type", String)
    ], CmdTurnosMedicos.prototype, "fecha", void 0);
    __decorate([
        typeorm_1.Column("character", { name: "turno", length: 2, default: () => "'no'" }),
        __metadata("design:type", String)
    ], CmdTurnosMedicos.prototype, "turno", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "numero_atenciones", nullable: true }),
        __metadata("design:type", Object)
    ], CmdTurnosMedicos.prototype, "numeroAtenciones", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdTurnosMedicos.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdTurnosMedicos.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], CmdTurnosMedicos.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], CmdTurnosMedicos.prototype, "estado", void 0);
    CmdTurnosMedicos = __decorate([
        typeorm_1.Index("cmd_turnos_medicos_pkey", ["idTurnoMedico"], { unique: true }),
        typeorm_1.Entity("cmd_turnos_medicos", { schema: "public" })
    ], CmdTurnosMedicos);
    return CmdTurnosMedicos;
})();
exports.CmdTurnosMedicos = CmdTurnosMedicos;
