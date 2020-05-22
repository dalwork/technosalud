import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CmdCentrosMedicos } from "./CmdCentrosMedicos";

@Index("cmd_tipos_centros_pkey", ["idTipoCentro"], { unique: true })
@Entity("cmd_tipos_centros", { schema: "public" })
export class CmdTiposCentros {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_tipo_centro" })
  idTipoCentro: number;

  @Column("text", { name: "codigo_tipo_centro" })
  codigoTipoCentro: string;

  @Column("text", { name: "tipo_centro" })
  tipoCentro: string;

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
    () => CmdCentrosMedicos,
    (cmdCentrosMedicos) => cmdCentrosMedicos.idTipoCentro
  )
  cmdCentrosMedicos: CmdCentrosMedicos[];
}
