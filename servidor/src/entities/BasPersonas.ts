import { CmdMedicos } from "./CmdMedicos";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";


@Index("bas_personas_pkey", ["idPersona"], { unique: true })
@Entity("bas_personas", { schema: "public" })
export class BasPersonas {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_persona" })
  idPersona: number;

  @Column("text", { name: "ci" })
  ci: string;

  @Column("text", { name: "complemento", nullable: true })
  complemento: string | null;

  @Column("text", { name: "nombres" })
  nombres: string;

  @Column("text", { name: "apellido1" })
  apellido1: string;

  @Column("text", { name: "apellido2", nullable: true })
  apellido2: string | null;

  @Column("text", { name: "direccion" })
  direccion: string;

  @Column("text", { name: "telefono", nullable: true })
  telefono: string | null;

  @Column("text", { name: "movil", nullable: true })
  movil: string | null;

  @Column("text", { name: "correo", nullable: true })
  correo: string | null;

  @Column("character", { name: "genero", length: 1 })
  genero: string;

  @Column("character", { name: "estado_civil", length: 1 })
  estadoCivil: string;

  @Column("text", { name: "profesion", nullable: true })
  profesion: string | null;

  @Column("date", { name: "fecha_nacimiento", nullable: true })
  fechaNacimiento: string | null;

  @Column("timestamp without time zone", {
    name: "_registrado",
    default: () => "now()",
  })
  registrado: Date;

  @Column("timestamp without time zone", {
    name: "_modificado",
    default: () => "now()",
  })
  modificado: Date;

  @Column("integer", { name: "_id_usuario" })
  idUsuario: number;

  @Column("integer", { name: "_estado", default: () => "1" })
  estado: number;

  @OneToMany(() => CmdMedicos, (cmdMedicos) => cmdMedicos.idPersona)
  cmdMedicos: CmdMedicos[];
}
