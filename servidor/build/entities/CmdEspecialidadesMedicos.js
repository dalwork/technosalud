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
exports.CmdEspecialidadesMedicos = void 0;
const typeorm_1 = require("typeorm");
const CmdEspecialidades_1 = require("./CmdEspecialidades");
const CmdMedicos_1 = require("./CmdMedicos");
let CmdEspecialidadesMedicos = /** @class */ (() => {
    let CmdEspecialidadesMedicos = class CmdEspecialidadesMedicos {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_especialidad_medico" }),
        __metadata("design:type", Number)
    ], CmdEspecialidadesMedicos.prototype, "idEspecialidadMedico", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "titulo" }),
        __metadata("design:type", String)
    ], CmdEspecialidadesMedicos.prototype, "titulo", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdEspecialidadesMedicos.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdEspecialidadesMedicos.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], CmdEspecialidadesMedicos.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], CmdEspecialidadesMedicos.prototype, "estado", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => CmdEspecialidades_1.CmdEspecialidades, (cmdEspecialidades) => cmdEspecialidades.cmdEspecialidadesMedicos),
        typeorm_1.JoinColumn([
            { name: "id_especialidad", referencedColumnName: "idEspecialidad" },
        ]),
        __metadata("design:type", CmdEspecialidades_1.CmdEspecialidades)
    ], CmdEspecialidadesMedicos.prototype, "idEspecialidad", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => CmdMedicos_1.CmdMedicos, (cmdMedicos) => cmdMedicos.cmdEspecialidadesMedicos),
        typeorm_1.JoinColumn([{ name: "id_medico", referencedColumnName: "idMedico" }]),
        __metadata("design:type", CmdMedicos_1.CmdMedicos)
    ], CmdEspecialidadesMedicos.prototype, "idMedico", void 0);
    CmdEspecialidadesMedicos = __decorate([
        typeorm_1.Index("cmd_especialidades_medicos_pkey", ["idEspecialidadMedico"], {
            unique: true,
        }),
        typeorm_1.Entity("cmd_especialidades_medicos", { schema: "public" })
    ], CmdEspecialidadesMedicos);
    return CmdEspecialidadesMedicos;
})();
exports.CmdEspecialidadesMedicos = CmdEspecialidadesMedicos;
