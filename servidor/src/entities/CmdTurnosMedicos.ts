import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cmd_turnos_medicos_pkey", ["idTurnoMedico"], { unique: true })
@Entity("cmd_turnos_medicos", { schema: "public" })
export class CmdTurnosMedicos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_turno_medico" })
  idTurnoMedico: number;

  @Column("integer", { name: "id_medico" })
  idMedico: number;

  @Column("time without time zone", { name: "hora_inicio", nullable: true })
  horaInicio: string | null;

  @Column("time without time zone", { name: "hora_fin", nullable: true })
  horaFin: string | null;

  @Column("date", { name: "fecha" })
  fecha: string;

  @Column("character", { name: "turno", length: 2, default: () => "'no'" })
  turno: string;

  @Column("integer", { name: "numero_atenciones", nullable: true })
  numeroAtenciones: number | null;

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
