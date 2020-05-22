create table bas_instituciones (
    id_institucion serial primary key not null,
    codigo_institucion varchar(10)  not null,
    institucion text  not null,
    nit varchar(20)  not null,
    telefono varchar(30),
    direccion text,
    lugar text not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now() not null,
    _id_usuario integer  not null,
    _estado integer default 1 not null
);

create table bas_personas (
    id_persona serial primary key not null,
    ci text  not null,
    complemento text ,
    nombres text  not null,
    apellido1 text  not null,
    apellido2 text,
    direccion text  not null,
    telefono text,
    movil text,
    correo text,
    genero char(1)  not null,
    estado_civil char(1)  not null,
    profesion text,
    fecha_nacimiento date,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now() not null,
    _id_usuario integer  not null,
    _estado integer default 1 not null
);

insert into bas_personas (ci,nombres,apellido1, apellido2, direccion,genero,estado_civil,_id_usuario) values 
                         ('11111','Admin','Admin Ape1','Admin Ape2','Miraflores','M','S',1);

create table bas_usuarios (
    id_usuario serial  primary key not null,
    usuario text  not null,
    clave varchar(64) not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now() not null,
    _id_usuario integer  not null,
    _estado integer default 1 not null
);
insert into bas_usuarios (usuario,clave,_id_usuario) values ('admin','admin',1);


create table bas_roles (
    id_rol serial  primary key not null,
    rol text,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now() not null,
    _id_usuario integer  not null,
    _estado integer default 1 not null
);


create table bas_usuarios_roles (
    id_usuario_rol serial primary key not null,
    id_usuario integer  not null,
    id_rol integer  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now() not null,
    _id_usuario integer  not null,
    _estado integer default 1 not null
);

create table bas_grupos (
    id_grupo serial primary key not null,
    grupo text,
    imagen text,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table bas_opciones (
    id_opcion serial primary key not null,
    id_grupo integer  references bas_grupos(id_grupo),
    opcion text,
    contenido text,
    adicional text,
    orden integer  not null,
    imagen text,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table bas_accesos (
    id_acceso serial  primary key not null,
    id_opcion integer  references bas_opciones(id_opcion),
    id_rol integer references bas_roles(id_rol) not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table bas_paises (
    id_pais serial primary key not null,
    pais text  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

insert into bas_paises (id_pais,pais,_id_usuario) values (1,'Bolivia',1);

create table bas_departamentos (
    id_departamento serial primary key not null,
    id_pais integer references bas_paises(id_pais),
    departamento text  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

insert into bas_departamentos(id_departamento,id_pais,departamento,_id_usuario) values 
                             (1,1,'La Paz',1),
                             (2,1,'Santa Cruz',1),
                             (3,1,'Cochabamba',1),
                             (4,1,'Pando',1),
                             (5,1,'Beni',1),
                             (6,1,'Chuquisaca',1),
                             (7,1,'Oruro',1),
                             (8,1,'Potosi',1),
                             (9,1,'Tarija',1);

create table bas_provincias (
    id_provincia serial primary key not null,
    id_departamento integer references bas_departamentos(id_departamento),
    provincia text  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table bas_municipios (
    id_municipio serial  primary key not null,
    id_provincia integer references bas_provincias(id_provincia),
    municipio text  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table cmd_tipos_centros (
    id_tipo_centro serial  primary key not null,
    codigo_tipo_centro text  not null,
    tipo_centro text  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

insert into cmd_tipos_centros(codigo_tipo_centro,tipo_centro,_id_usuario) values 
                        ('I-1','Puesto de Salud',1),
                        ('I-2','Puesto de Salud con Medico',1),
                        ('I-3','Centro de Salud sin Interinato',1),                       
                        ('I-4','Centro de Salud con Interinato',1),
                        ('II-1','Hospital I',1),
                        ('II-2','Hospital II',1),
                        ('III-1','Hospital III',1),
                        ('III-2','Hospital Especializado',1);

create table cmd_centros_medicos (
    id_centro_medico serial primary key not null,
    id_tipo_centro integer references cmd_tipos_centros(id_tipo_centro),
    id_nivel integer  not null,
    centro_medico text  not null,
    direccion text  not null,
    telefono character varying(30)  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table cmd_medicos (
    id_medico serial  primary key not null,
    id_persona integer references bas_personas(id_persona),
    matricula_medica text,
    titulo text  not null,
    carga_horario integer  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);


create table cmd_centros_consultorios (
    id_centro_consultorio serial primary key not null,
    id_centro_medico integer  not null,
    id_consultorio integer  not null,
    id_medico integer  not null,
    fecha date  not null,
    hora_inicio time  not null,
    hora_fin time  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table cmd_especialidades (
    id_especialidad serial  primary key not null,
    especialidad text  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table cmd_especialidades_medicos (
    id_especialidad_medico serial primary key not null,
    id_especialidad integer references cmd_especialidades(id_especialidad),
    id_medico integer  references cmd_medicos(id_medico),
    titulo text not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table cmd_tipos_consultas (
    id_tipo_consulta serial primary key not null,
    tipo_consulta text  not null,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table cmd_turnos_medicos (
    id_turno_medico serial primary key not null,
    id_medico integer  not null,
    hora_inicio time,
    hora_fin time,
    fecha date  not null,
    turno character(2) default 'no'  not null,
    numero_atenciones integer,
    _registrado timestamp default now()  not null,
    _modificado timestamp default now()  not null,
    _id_usuario integer  not null,
    _estado integer default 1  not null
);

create table saludos (
  id_saludo serial primary key,
  saludo text,
  fecha timestamp
);

insert into saludos (saludo,fecha) values ('hola mundo', '2019-05-01'),
                                          ('otro saludo','2020-05-10'),
                                          ('mas saluds', '2020-05-24');
                                          