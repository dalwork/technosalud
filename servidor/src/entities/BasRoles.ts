import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasAccesos } from "./BasAccesos";

@Index("bas_roles_pkey", ["idRol"], { unique: true })
@Entity("bas_roles", { schema: "public" })
export class BasRoles {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_rol" })
  idRol: number;

  @Column("text", { name: "rol", nullable: true })
  rol: string | null;

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

  @OneToMany(() => BasAccesos, (basAccesos) => basAccesos.idRol)
  basAccesos: BasAccesos[];
}
