create database golden_order;
use golden_order;


create table plataforma(
idPlataforma int auto_increment primary key,
plataforma varchar (255)
);

create table usuario(
idUsuario int auto_increment,
nome varchar (255),
email varchar (50),
senha varchar (80),
fk_plataforma int, foreign key (fk_plataforma) references plataforma (idPlataforma),
primary key (idUsuario, fk_plataforma)
);

insert into plataforma
values
(null, "Playstation"),
(null, "Xbox"),
(null, "PC");


select 
plataforma.plataforma as NomePlataforma, count(usuario.nome) as QuantidadeUsuarios from usuario
join plataforma on usuario.fk_plataforma = plataforma.idPlataforma group by plataforma.plataforma;


select * from usuario;
select * from plataforma;

select * from usuario join plataforma on idPlataforma = fk_plataforma;

insert into usuario values (null, 'Roberto', 'roberto@gmail.com', '12345678', 3);
insert into usuario values (null, 'Roberto', 'roberto@gmail.com', '12345678', 3);
insert into usuario values (null, 'Roberto', 'roberto@gmail.com', '12345678', 3);
insert into usuario values (null, 'Roberto', 'roberto@gmail.com', '12345678', 3);
insert into usuario values (null, 'Roberto', 'roberto@gmail.com', '12345678', 3);
insert into usuario values (null, 'Roberto', 'roberto@gmail.com', '12345678', 3);
insert into usuario values (null, 'Roberto', 'roberto@gmail.com', '12345678', 3);
insert into usuario values (null, 'Roberto', 'roberto@gmail.com', '12345678', 3);