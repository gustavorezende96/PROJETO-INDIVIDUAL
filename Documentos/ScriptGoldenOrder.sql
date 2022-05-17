create database golden_order;
use golden_order;


create table usuario(
idUsuario int primary key auto_increment,
nome varchar (255),
email varchar (50),
senha varchar (80)
);

create table niveis(
idNivel int auto_increment,
nivel_usuario varchar(3),
fk_user int, foreign key (fk_user) references usuario (idUsuario),
primary key (idNivel, fk_user)
);

select * from usuario;
