import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bas_usuarios_roles_pkey", ["idUsuarioRol"], { unique: true })
@Entity("bas_usuarios_roles", { schema: "public" })
export class BasUsuariosRoles {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_usuario_rol" })
  idUsuarioRol: number;

  @Column("integer", { name: "id_usuario" })
  idUsuario: number;

  @Column("integer", { name: "id_rol" })
  idRol: number;

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
