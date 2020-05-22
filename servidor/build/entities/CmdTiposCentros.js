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
exports.CmdTiposCentros = void 0;
const typeorm_1 = require("typeorm");
const CmdCentrosMedicos_1 = require("./CmdCentrosMedicos");
let CmdTiposCentros = /** @class */ (() => {
    let CmdTiposCentros = class CmdTiposCentros {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_tipo_centro" }),
        __metadata("design:type", Number)
    ], CmdTiposCentros.prototype, "idTipoCentro", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "codigo_tipo_centro" }),
        __metadata("design:type", String)
    ], CmdTiposCentros.prototype, "codigoTipoCentro", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "tipo_centro" }),
        __metadata("design:type", String)
    ], CmdTiposCentros.prototype, "tipoCentro", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_registrado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdTiposCentros.prototype, "registrado", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", {
            name: "_modificado",
            default: () => "now()",
        }),
        __metadata("design:type", Date)
    ], CmdTiposCentros.prototype, "modificado", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_id_usuario" }),
        __metadata("design:type", Number)
    ], CmdTiposCentros.prototype, "idUsuario", void 0);
    __decorate([
        typeorm_1.Column("integer", { name: "_estado", default: () => "1" }),
        __metadata("design:type", Number)
    ], CmdTiposCentros.prototype, "estado", void 0);
    __decorate([
        typeorm_1.OneToMany(() => CmdCentrosMedicos_1.CmdCentrosMedicos, (cmdCentrosMedicos) => cmdCentrosMedicos.idTipoCentro),
        __metadata("design:type", Array)
    ], CmdTiposCentros.prototype, "cmdCentrosMedicos", void 0);
    CmdTiposCentros = __decorate([
        typeorm_1.Index("cmd_tipos_centros_pkey", ["idTipoCentro"], { unique: true }),
        typeorm_1.Entity("cmd_tipos_centros", { schema: "public" })
    ], CmdTiposCentros);
    return CmdTiposCentros;
})();
exports.CmdTiposCentros = CmdTiposCentros;
