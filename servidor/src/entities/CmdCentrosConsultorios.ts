import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cmd_centros_consultorios_pkey", ["idCentroConsultorio"], {
  unique: true,
})
@Entity("cmd_centros_consultorios", { schema: "public" })
export class CmdCentrosConsultorios {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_centro_consultorio" })
  idCentroConsultorio: number;

  @Column("integer", { name: "id_centro_medico" })
  idCentroMedico: number;

  @Column("integer", { name: "id_consultorio" })
  idConsultorio: number;

  @Column("integer", { name: "id_medico" })
  idMedico: number;

  @Column("date", { name: "fecha" })
  fecha: string;

  @Column("time without time zone", { name: "hora_inicio" })
  horaInicio: string;

  @Column("time without time zone", { name: "hora_fin" })
  horaFin: string;

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
