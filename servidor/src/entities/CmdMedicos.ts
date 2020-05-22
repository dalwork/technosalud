import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CmdEspecialidadesMedicos } from "./CmdEspecialidadesMedicos";
import { BasPersonas } from "./BasPersonas";

@Index("cmd_medicos_pkey", ["idMedico"], { unique: true })
@Entity("cmd_medicos", { schema: "public" })
export class CmdMedicos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_medico" })
  idMedico: number;

  @Column("text", { name: "matricula_medica", nullable: true })
  matriculaMedica: string | null;

  @Column("text", { name: "titulo" })
  titulo: string;

  @Column("integer", { name: "carga_horario" })
  cargaHorario: number;

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

  @OneToMany(
    () => CmdEspecialidadesMedicos,
    (cmdEspecialidadesMedicos) => cmdEspecialidadesMedicos.idMedico
  )
  cmdEspecialidadesMedicos: CmdEspecialidadesMedicos[];

  @ManyToOne(() => BasPersonas, (basPersonas) => basPersonas.cmdMedicos)
  @JoinColumn([{ name: "id_persona", referencedColumnName: "idPersona" }])
  idPersona: BasPersonas;
}
