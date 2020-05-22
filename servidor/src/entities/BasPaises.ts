import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasDepartamentos } from "./BasDepartamentos";

@Index("bas_paises_pkey", ["idPais"], { unique: true })
@Entity("bas_paises", { schema: "public" })
export class BasPaises {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_pais" })
  idPais: number;

  @Column("text", { name: "pais" })
  pais: string;

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
    () => BasDepartamentos,
    (basDepartamentos) => basDepartamentos.idPais
  )
  basDepartamentos: BasDepartamentos[];
}
