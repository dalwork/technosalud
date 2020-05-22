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
exports.BasInstituciones = void 0;
const typeorm_1 = require("typeorm");
let BasInstituciones = /** @class */ (() => {
    let BasInstituciones = class BasInstituciones {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_institucion" }),
        __metadata("design:type", Number)
    ], BasInstituciones.prototype, "idInstitucion", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "codigo_institucion", length: 10 }),
        __metadata("design:type", String)
    ], BasInstituciones.prototype, "codigoInstitucion", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "institucion" }),
        __metadata("design:type", String)
    ], BasInstituciones.prototype, "institucion", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "nit", length: 20 }),
        __metadata("design:type", String)
    ], BasInstituciones.prototype, "nit", void 0);
    __decorate([
        typeorm_1.Column("character varying", { name: "telefono", nullable: true, length: 30 }),
        __metadata("design:type", Object)
    ], BasInstituciones.prototype, "telefono", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "direccion", nullable: true }),
        __metadata("design:type", Object)
    ], BasInstituciones.prototype, "direccion", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "lugar" }),
        __metadata("design:type", String)
    ], BasInstituciones.prototype, "lugar", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasInstituciones.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasInstituciones.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], BasInstituciones.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], BasInstituciones.prototype, "estado", void 0);
    BasInstituciones = __decorate([
        typeorm_1.Index("bas_instituciones_pkey", ["idInstitucion"], { unique: true }),
        typeorm_1.Entity("bas_instituciones", { schema: "public" })
    ], BasInstituciones);
    return BasInstituciones;
})();
exports.BasInstituciones = BasInstituciones;
