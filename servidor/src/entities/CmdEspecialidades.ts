import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CmdEspecialidadesMedicos } from "./CmdEspecialidadesMedicos";

@Index("cmd_especialidades_pkey", ["idEspecialidad"], { unique: true })
@Entity("cmd_especialidades", { schema: "public" })
export class CmdEspecialidades {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_especialidad" })
  idEspecialidad: number;

  @Column("text", { name: "especialidad" })
  especialidad: string;

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
    (cmdEspecialidadesMedicos) => cmdEspecialidadesMedicos.idEspecialidad
  )
  cmdEspecialidadesMedicos: CmdEspecialidadesMedicos[];
}
