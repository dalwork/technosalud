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
exports.BasProvincias = void 0;
const typeorm_1 = require("typeorm");
const BasMunicipios_1 = require("./BasMunicipios");
const BasDepartamentos_1 = require("./BasDepartamentos");
let BasProvincias = /** @class */ (() => {
    let BasProvincias = class BasProvincias {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_provincia" }),
        __metadata("design:type", Number)
    ], BasProvincias.prototype, "idProvincia", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "provincia" }),
        __metadata("design:type", String)
    ], BasProvincias.prototype, "provincia", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasProvincias.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasProvincias.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], BasProvincias.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], BasProvincias.prototype, "estado", void 0);
    __decorate([
        typeorm_1.OneToMany(() => BasMunicipios_1.BasMunicipios, (basMunicipios) => basMunicipios.idProvincia),
        __metadata("design:type", Array)
    ], BasProvincias.prototype, "basMunicipios", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BasDepartamentos_1.BasDepartamentos, (basDepartamentos) => basDepartamentos.basProvincias),
        typeorm_1.JoinColumn([
            { name: "id_departamento", referencedColumnName: "idDepartamento" },
        ]),
        __metadata("design:type", BasDepartamentos_1.BasDepartamentos)
    ], BasProvincias.prototype, "idDepartamento", void 0);
    BasProvincias = __decorate([
        typeorm_1.Index("bas_provincias_pkey", ["idProvincia"], { unique: true }),
        typeorm_1.Entity("bas_provincias", { schema: "public" })
    ], BasProvincias);
    return BasProvincias;
})();
exports.BasProvincias = BasProvincias;
