import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasAccesos } from "./BasAccesos";
import { BasGrupos } from "./BasGrupos";

@Index("bas_opciones_pkey", ["idOpcion"], { unique: true })
@Entity("bas_opciones", { schema: "public" })
export class BasOpciones {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_opcion" })
  idOpcion: number;

  @Column("text", { name: "opcion", nullable: true })
  opcion: string | null;

  @Column("text", { name: "contenido", nullable: true })
  contenido: string | null;

  @Column("text", { name: "adicional", nullable: true })
  adicional: string | null;

  @Column("integer", { name: "orden" })
  orden: number;

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

  @OneToMany(() => BasAccesos, (basAccesos) => basAccesos.idOpcion)
  basAccesos: BasAccesos[];

  @ManyToOne(() => BasGrupos, (basGrupos) => basGrupos.basOpciones)
  @JoinColumn([{ name: "id_grupo", referencedColumnName: "idGrupo" }])
  idGrupo: BasGrupos;
}
