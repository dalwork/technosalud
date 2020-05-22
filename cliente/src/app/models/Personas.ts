import { Timestamp } from 'rxjs';

export interface Personas {
  idPersona?: number;
  ci?: string;
  complemento?: string;
  nombres?: string;
  apellido1?: string;
  apellido2?: string;
  direccion?: string;
  telefono?: string;
  movil?: string;
  correo?: string;
  genero?: string;
  estadoCivil?: string;
  profesion?: string;
  fechaNacimiento?: Date;
  modificado?: Date;
  idUsuario?:number;
  estado?: number;
}