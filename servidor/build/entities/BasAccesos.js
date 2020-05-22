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
exports.BasAccesos = void 0;
const typeorm_1 = require("typeorm");
const BasOpciones_1 = require("./BasOpciones");
const BasRoles_1 = require("./BasRoles");
let BasAccesos = /** @class */ (() => {
    let BasAccesos = class BasAccesos {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_acceso" }),
        __metadata("design:type", Number)
    ], BasAccesos.prototype, "idAcceso", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasAccesos.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasAccesos.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], BasAccesos.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], BasAccesos.prototype, "estado", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BasOpciones_1.BasOpciones, (basOpciones) => basOpciones.basAccesos),
        typeorm_1.JoinColumn([{ name: "id_opcion", referencedColumnName: "idOpcion" }]),
        __metadata("design:type", BasOpciones_1.BasOpciones)
    ], BasAccesos.prototype, "idOpcion", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BasRoles_1.BasRoles, (basRoles) => basRoles.basAccesos),
        typeorm_1.JoinColumn([{ name: "id_rol", referencedColumnName: "idRol" }]),
        __metadata("design:type", BasRoles_1.BasRoles)
    ], BasAccesos.prototype, "idRol", void 0);
    BasAccesos = __decorate([
        typeorm_1.Index("bas_accesos_pkey", ["idAcceso"], { unique: true }),
        typeorm_1.Entity("bas_accesos", { schema: "public" })
    ], BasAccesos);
    return BasAccesos;
})();
exports.BasAccesos = BasAccesos;
