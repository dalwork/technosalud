import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CmdEspecialidades } from "./CmdEspecialidades";
import { CmdMedicos } from "./CmdMedicos";

@Index("cmd_especialidades_medicos_pkey", ["idEspecialidadMedico"], {
  unique: true,
})
@Entity("cmd_especialidades_medicos", { schema: "public" })
export class CmdEspecialidadesMedicos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_especialidad_medico" })
  idEspecialidadMedico: number;

  @Column("text", { name: "titulo" })
  titulo: string;

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

  @ManyToOne(
    () => CmdEspecialidades,
    (cmdEspecialidades) => cmdEspecialidades.cmdEspecialidadesMedicos
  )
  @JoinColumn([
    { name: "id_especialidad", referencedColumnName: "idEspecialidad" },
  ])
  idEspecialidad: CmdEspecialidades;

  @ManyToOne(
    () => CmdMedicos,
    (cmdMedicos) => cmdMedicos.cmdEspecialidadesMedicos
  )
  @JoinColumn([{ name: "id_medico", referencedColumnName: "idMedico" }])
  idMedico: CmdMedicos;
}
