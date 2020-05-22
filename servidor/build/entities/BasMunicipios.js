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
exports.BasMunicipios = void 0;
const typeorm_1 = require("typeorm");
const BasProvincias_1 = require("./BasProvincias");
let BasMunicipios = /** @class */ (() => {
    let BasMunicipios = class BasMunicipios {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_municipio" }),
        __metadata("design:type", Number)
    ], BasMunicipios.prototype, "idMunicipio", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "municipio" }),
        __metadata("design:type", String)
    ], BasMunicipios.prototype, "municipio", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasMunicipios.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasMunicipios.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], BasMunicipios.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], BasMunicipios.prototype, "estado", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BasProvincias_1.BasProvincias, (basProvincias) => basProvincias.basMunicipios),
        typeorm_1.JoinColumn([{ name: "id_provincia", referencedColumnName: "idProvincia" }]),
        __metadata("design:type", BasProvincias_1.BasProvincias)
    ], BasMunicipios.prototype, "idProvincia", void 0);
    BasMunicipios = __decorate([
        typeorm_1.Index("bas_municipios_pkey", ["idMunicipio"], { unique: true }),
        typeorm_1.Entity("bas_municipios", { schema: "public" })
    ], BasMunicipios);
    return BasMunicipios;
})();
exports.BasMunicipios = BasMunicipios;
