import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasMunicipios } from "./BasMunicipios";
import { BasDepartamentos } from "./BasDepartamentos";

@Index("bas_provincias_pkey", ["idProvincia"], { unique: true })
@Entity("bas_provincias", { schema: "public" })
export class BasProvincias {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_provincia" })
  idProvincia: number;

  @Column("text", { name: "provincia" })
  provincia: string;

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

  @OneToMany(() => BasMunicipios, (basMunicipios) => basMunicipios.idProvincia)
  basMunicipios: BasMunicipios[];

  @ManyToOne(
    () => BasDepartamentos,
    (basDepartamentos) => basDepartamentos.basProvincias
  )
  @JoinColumn([
    { name: "id_departamento", referencedColumnName: "idDepartamento" },
  ])
  idDepartamento: BasDepartamentos;
}
