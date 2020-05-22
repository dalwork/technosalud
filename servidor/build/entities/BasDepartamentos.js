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
exports.BasDepartamentos = void 0;
const typeorm_1 = require("typeorm");
const BasPaises_1 = require("./BasPaises");
const BasProvincias_1 = require("./BasProvincias");
let BasDepartamentos = /** @class */ (() => {
    let BasDepartamentos = class BasDepartamentos {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_departamento" }),
        __metadata("design:type", Number)
    ], BasDepartamentos.prototype, "idDepartamento", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "departamento" }),
        __metadata("design:type", String)
    ], BasDepartamentos.prototype, "departamento", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasDepartamentos.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasDepartamentos.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], BasDepartamentos.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], BasDepartamentos.prototype, "estado", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BasPaises_1.BasPaises, (basPaises) => basPaises.basDepartamentos),
        typeorm_1.JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }]),
        __metadata("design:type", BasPaises_1.BasPaises)
    ], BasDepartamentos.prototype, "idPais", void 0);
    __decorate([
        typeorm_1.OneToMany(() => BasProvincias_1.BasProvincias, (basProvincias) => basProvincias.idDepartamento),
        __metadata("design:type", Array)
    ], BasDepartamentos.prototype, "basProvincias", void 0);
    BasDepartamentos = __decorate([
        typeorm_1.Index("bas_departamentos_pkey", ["idDepartamento"], { unique: true }),
        typeorm_1.Entity("bas_departamentos", { schema: "public" })
    ], BasDepartamentos);
    return BasDepartamentos;
})();
exports.BasDepartamentos = BasDepartamentos;
