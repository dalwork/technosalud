import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasOpciones } from "./BasOpciones";

@Index("bas_grupos_pkey", ["idGrupo"], { unique: true })
@Entity("bas_grupos", { schema: "public" })
export class BasGrupos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_grupo" })
  idGrupo: number;

  @Column("text", { name: "grupo", nullable: true })
  grupo: string | null;

  @Column("text", { name: "imagen", nullable: true })
  imagen: string | null;

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

  @OneToMany(() => BasOpciones, (basOpciones) => basOpciones.idGrupo)
  basOpciones: BasOpciones[];
}
