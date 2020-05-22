import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("saludos_pkey", ["idSaludo"], { unique: true })
@Entity("saludos", { schema: "public" })
export class Saludos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_saludo" })
  idSaludo: number;

  @Column("text", { name: "saludo", nullable: true })
  saludo: string | null;

  @Column("timestamp without time zone", { name: "fecha", nullable: true })
  fecha: Date | null;
}
