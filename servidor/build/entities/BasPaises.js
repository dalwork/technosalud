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
exports.BasPaises = void 0;
const typeorm_1 = require("typeorm");
const BasDepartamentos_1 = require("./BasDepartamentos");
let BasPaises = /** @class */ (() => {
    let BasPaises = class BasPaises {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_pais" }),
        __metadata("design:type", Number)
    ], BasPaises.prototype, "idPais", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "pais" }),
        __metadata("design:type", String)
    ], BasPaises.prototype, "pais", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasPaises.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasPaises.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], BasPaises.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], BasPaises.prototype, "estado", void 0);
    __decorate([
        typeorm_1.OneToMany(() => BasDepartamentos_1.BasDepartamentos, (basDepartamentos) => basDepartamentos.idPais),
        __metadata("design:type", Array)
    ], BasPaises.prototype, "basDepartamentos", void 0);
    BasPaises = __decorate([
        typeorm_1.Index("bas_paises_pkey", ["idPais"], { unique: true }),
        typeorm_1.Entity("bas_paises", { schema: "public" })
    ], BasPaises);
    return BasPaises;
})();
exports.BasPaises = BasPaises;
