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
exports.BasOpciones = void 0;
const typeorm_1 = require("typeorm");
const BasAccesos_1 = require("./BasAccesos");
const BasGrupos_1 = require("./BasGrupos");
let BasOpciones = /** @class */ (() => {
    let BasOpciones = class BasOpciones {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_opcion" }),
        __metadata("design:type", Number)
    ], BasOpciones.prototype, "idOpcion", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "opcion", nullable: true }),
        __metadata("design:type", Object)
    ], BasOpciones.prototype, "opcion", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "contenido", nullable: true }),
        __metadata("design:type", Object)
    ], BasOpciones.prototype, "contenido", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "adicional", nullable: true }),
        __metadata("design:type", Object)
    ], BasOpciones.prototype, "adicional", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "orden" }),
        __metadata("design:type", Number)
    ], BasOpciones.prototype, "orden", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "imagen", nullable: true }),
        __metadata("design:type", Object)
    ], BasOpciones.prototype, "imagen", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasOpciones.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], BasOpciones.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], BasOpciones.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], BasOpciones.prototype, "estado", void 0);
    __decorate([
        typeorm_1.OneToMany(() => BasAccesos_1.BasAccesos, (basAccesos) => basAccesos.idOpcion),
        __metadata("design:type", Array)
    ], BasOpciones.prototype, "basAccesos", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => BasGrupos_1.BasGrupos, (basGrupos) => basGrupos.basOpciones),
        typeorm_1.JoinColumn([{ name: "id_grupo", referencedColumnName: "idGrupo" }]),
        __metadata("design:type", BasGrupos_1.BasGrupos)
    ], BasOpciones.prototype, "idGrupo", void 0);
    BasOpciones = __decorate([
        typeorm_1.Index("bas_opciones_pkey", ["idOpcion"], { unique: true }),
        typeorm_1.Entity("bas_opciones", { schema: "public" })
    ], BasOpciones);
    return BasOpciones;
})();
exports.BasOpciones = BasOpciones;
