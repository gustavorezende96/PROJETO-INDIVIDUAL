create database golden_order;
use golden_order;


create table plataforma(
idPlataforma int auto_increment primary key,
plataforma int check(plataforma = 1 or plataforma = 2 or plataforma = 3),
descricao varchar (255)
);

create table usuario(
idUsuario int auto_increment,
nome varchar (255),
plataforma varchar (255),
email varchar (50),
senha varchar (80),
fk_plataforma int, foreign key (fk_plataforma) references plataforma (idPlataforma),
primary key (idUsuario)
);

insert into plataforma
values
(null, 1, "Playstation"),
(null, 2, "Xbox"),
(null, 3, "PC");



select * from usuario;
select * from plataforma;