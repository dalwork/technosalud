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
exports.Saludos = void 0;
const typeorm_1 = require("typeorm");
let Saludos = /** @class */ (() => {
    let Saludos = class Saludos {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "id_saludo" }),
        __metadata("design:type", Number)
    ], Saludos.prototype, "idSaludo", void 0);
    __decorate([
        typeorm_1.Column("text", { name: "saludo", nullable: true }),
        __metadata("design:type", Object)
    ], Saludos.prototype, "saludo", void 0);
    __decorate([
        typeorm_1.Column("timestamp without time zone", { name: "fecha", nullable: true }),
        __metadata("design:type", Object)
    ], Saludos.prototype, "fecha", void 0);
    Saludos = __decorate([
        typeorm_1.Index("saludos_pkey", ["idSaludo"], { unique: true }),
        typeorm_1.Entity("saludos", { schema: "public" })
    ], Saludos);
    return Saludos;
})();
exports.Saludos = Saludos;
