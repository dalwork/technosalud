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
exports.CmdMedicos = void 0;
const typeorm_1 = require("typeorm");
const CmdEspecialidadesMedicos_1 = require("./CmdEspecialidadesMedicos");
const BasPersonas_1 = require("./BasPersonas");
let CmdMedicos = /** @class */ (() => {
    let CmdMedicos = class CmdMedicos {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_medico" }),
        __metadata("design:type", Number)
    ], CmdMedicos.prototype, "idMedico", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "matricula_medica", nullable: true }),
        __metadata("design:type", Object)
    ], CmdMedicos.prototype, "matriculaMedica", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "titulo" }),
        __metadata("design:type", String)
    ], CmdMedicos.prototype, "titulo", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "carga_horario" }),
        __metadata("design:type", Number)
    ], CmdMedicos.prototype, "cargaHorario", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdMedicos.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdMedicos.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], CmdMedicos.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], CmdMedicos.prototype, "estado", void 0);
    __decorate([
        typeorm_1.OneToMany(() => CmdEspecialidadesMedicos_1.CmdEspecialidadesMedicos, (cmdEspecialidadesMedicos) => cmdEspecialidadesMedicos.idMedico),
        __metadata("design:type", Array)
    ], CmdMedicos.prototype, "cmdEspecialidadesMedicos", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BasPersonas_1.BasPersonas, (basPersonas) => basPersonas.cmdMedicos),
        typeorm_1.JoinColumn([{ name: "id_persona", referencedColumnName: "idPersona" }]),
        __metadata("design:type", BasPersonas_1.BasPersonas)
    ], CmdMedicos.prototype, "idPersona", void 0);
    CmdMedicos = __decorate([
        typeorm_1.Index("cmd_medicos_pkey", ["idMedico"], { unique: true }),
        typeorm_1.Entity("cmd_medicos", { schema: "public" })
    ], CmdMedicos);
    return CmdMedicos;
})();
exports.CmdMedicos = CmdMedicos;
