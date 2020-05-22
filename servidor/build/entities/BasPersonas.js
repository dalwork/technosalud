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
exports.BasPersonas = void 0;
const CmdMedicos_1 = require("./CmdMedicos");
const typeorm_1 = require("typeorm");
let BasPersonas = /** @class */ (() => {
    let BasPersonas = class BasPersonas {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_persona" }),
        __metadata("design:type", Number)
    ], BasPersonas.prototype, "idPersona", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "ci" }),
        __metadata("design:type", String)
    ], BasPersonas.prototype, "ci", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "complemento", nullable: true }),
        __metadata("design:type", Object)
    ], BasPersonas.prototype, "complemento", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "nombres" }),
        __metadata("design:type", String)
    ], BasPersonas.prototype, "nombres", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "apellido1" }),
        __metadata("design:type", String)
    ], BasPersonas.prototype, "apellido1", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "apellido2", nullable: true }),
        __metadata("design:type", Object)
    ], BasPersonas.prototype, "apellido2", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "direccion" }),
        __metadata("design:type", String)
    ], BasPersonas.prototype, "direccion", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "telefono", nullable: true }),
        __metadata("design:type", Object)
    ], BasPersonas.prototype, "telefono", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "movil", nullable: true }),
        __metadata("design:type", Object)
    ], BasPersonas.prototype, "movil", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "correo", nullable: true }),
        __metadata("design:type", Object)
    ], BasPersonas.prototype, "correo", void 0);
    __decorate([
        typeorm_1.Column("character", { name: "genero", length: 1 }),
        __metadata("design:type", String)
    ], BasPersonas.prototype, "genero", void 0);
    __decorate([
        typeorm_1.Column("character", { name: "estado_civil", length: 1 }),
        __metadata("design:type", String)
    ], BasPersonas.prototype, "estadoCivil", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "profesion", nullable: true }),
        __metadata("design:type", Object)
    ], BasPersonas.prototype, "profesion", void 0);
    __decorate([
        typeorm_1.Column("date", { name: "fecha_nacimiento", nullable: true }),
        __metadata("design:type", Object)
    ], BasPersonas.prototype, "fechaNacimiento", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasPersonas.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasPersonas.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], BasPersonas.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], BasPersonas.prototype, "estado", void 0);
    __decorate([
        typeorm_1.OneToMany(() => CmdMedicos_1.CmdMedicos, (cmdMedicos) => cmdMedicos.idPersona),
        __metadata("design:type", Array)
    ], BasPersonas.prototype, "cmdMedicos", void 0);
    BasPersonas = __decorate([
        typeorm_1.Index("bas_personas_pkey", ["idPersona"], { unique: true }),
        typeorm_1.Entity("bas_personas", { schema: "public" })
    ], BasPersonas);
    return BasPersonas;
})();
exports.BasPersonas = BasPersonas;
