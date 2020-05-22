import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cmd_tipos_consultas_pkey", ["idTipoConsulta"], { unique: true })
@Entity("cmd_tipos_consultas", { schema: "public" })
export class CmdTiposConsultas {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_tipo_consulta" })
  idTipoConsulta: number;

  @Column("text", { name: "tipo_consulta" })
  tipoConsulta: string;

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
}
