import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasPaises } from "./BasPaises";
import { BasProvincias } from "./BasProvincias";

@Index("bas_departamentos_pkey", ["idDepartamento"], { unique: true })
@Entity("bas_departamentos", { schema: "public" })
export class BasDepartamentos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_departamento" })
  idDepartamento: number;

  @Column("text", { name: "departamento" })
  departamento: string;

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

  @ManyToOne(() => BasPaises, (basPaises) => basPaises.basDepartamentos)
  @JoinColumn([{ name: "id_pais", referencedColumnName: "idPais" }])
  idPais: BasPaises;

  @OneToMany(
    () => BasProvincias,
    (basProvincias) => basProvincias.idDepartamento
  )
  basProvincias: BasProvincias[];
}
