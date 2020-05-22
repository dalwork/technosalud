import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bas_usuarios_pkey", ["idUsuario"], { unique: true })
@Entity("bas_usuarios", { schema: "public" })
export class BasUsuarios {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_usuario" })
  idUsuario: number;

  @Column("text", { name: "usuario" })
  usuario: string;

  @Column("character varying", { name: "clave", length: 64 })
  clave: string;

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
  sidUsuario: number;

  @Column("integer", { name: "_estado", default: () => "1" })
  estado: number;
}
