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
exports.BasGrupos = void 0;
const typeorm_1 = require("typeorm");
const BasOpciones_1 = require("./BasOpciones");
let BasGrupos = /** @class */ (() => {
    let BasGrupos = class BasGrupos {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_grupo" }),
        __metadata("design:type", Number)
    ], BasGrupos.prototype, "idGrupo", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "grupo", nullable: true }),
        __metadata("design:type", Object)
    ], BasGrupos.prototype, "grupo", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "imagen", nullable: true }),
        __metadata("design:type", Object)
    ], BasGrupos.prototype, "imagen", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasGrupos.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasGrupos.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], BasGrupos.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], BasGrupos.prototype, "estado", void 0);
    __decorate([
        typeorm_1.OneToMany(() => BasOpciones_1.BasOpciones, (basOpciones) => basOpciones.idGrupo),
        __metadata("design:type", Array)
    ], BasGrupos.prototype, "basOpciones", void 0);
    BasGrupos = __decorate([
        typeorm_1.Index("bas_grupos_pkey", ["idGrupo"], { unique: true }),
        typeorm_1.Entity("bas_grupos", { schema: "public" })
    ], BasGrupos);
    return BasGrupos;
})();
exports.BasGrupos = BasGrupos;
