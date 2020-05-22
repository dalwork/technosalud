import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bas_instituciones_pkey", ["idInstitucion"], { unique: true })
@Entity("bas_instituciones", { schema: "public" })
export class BasInstituciones {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_institucion" })
  idInstitucion: number;

  @Column("character varying", { name: "codigo_institucion", length: 10 })
  codigoInstitucion: string;

  @Column("text", { name: "institucion" })
  institucion: string;

  @Column("character varying", { name: "nit", length: 20 })
  nit: string;

  @Column("character varying", { name: "telefono", nullable: true, length: 30 })
  telefono: string | null;

  @Column("text", { name: "direccion", nullable: true })
  direccion: string | null;

  @Column("text", { name: "lugar" })
  lugar: string;

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
}
