import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasOpciones } from "./BasOpciones";
import { BasRoles } from "./BasRoles";

@Index("bas_accesos_pkey", ["idAcceso"], { unique: true })
@Entity("bas_accesos", { schema: "public" })
export class BasAccesos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_acceso" })
  idAcceso: number;

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

  @ManyToOne(() => BasOpciones, (basOpciones) => basOpciones.basAccesos)
  @JoinColumn([{ name: "id_opcion", referencedColumnName: "idOpcion" }])
  idOpcion: BasOpciones;

  @ManyToOne(() => BasRoles, (basRoles) => basRoles.basAccesos)
  @JoinColumn([{ name: "id_rol", referencedColumnName: "idRol" }])
  idRol: BasRoles;
}
