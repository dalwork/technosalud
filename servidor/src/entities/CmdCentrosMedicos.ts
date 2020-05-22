import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CmdTiposCentros } from "./CmdTiposCentros";

@Index("cmd_centros_medicos_pkey", ["idCentroMedico"], { unique: true })
@Entity("cmd_centros_medicos", { schema: "public" })
export class CmdCentrosMedicos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_centro_medico" })
  idCentroMedico: number;

  @Column("integer", { name: "id_nivel" })
  idNivel: number;

  @Column("text", { name: "centro_medico" })
  centroMedico: string;

  @Column("text", { name: "direccion" })
  direccion: string;

  @Column("character varying", { name: "telefono", length: 30 })
  telefono: string;

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
    () => CmdTiposCentros,
    (cmdTiposCentros) => cmdTiposCentros.cmdCentrosMedicos
  )
  @JoinColumn([
    { name: "id_tipo_centro", referencedColumnName: "idTipoCentro" },
  ])
  idTipoCentro: CmdTiposCentros;
}
