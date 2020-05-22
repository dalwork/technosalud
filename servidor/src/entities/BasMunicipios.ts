import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasProvincias } from "./BasProvincias";

@Index("bas_municipios_pkey", ["idMunicipio"], { unique: true })
@Entity("bas_municipios", { schema: "public" })
export class BasMunicipios {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_municipio" })
  idMunicipio: number;

  @Column("text", { name: "municipio" })
  municipio: string;

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
    () => BasProvincias,
    (basProvincias) => basProvincias.basMunicipios
  )
  @JoinColumn([{ name: "id_provincia", referencedColumnName: "idProvincia" }])
  idProvincia: BasProvincias;
}
