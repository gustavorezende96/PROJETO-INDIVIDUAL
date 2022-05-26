-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database golden_order;
use golden_order;


create database golden_order;
use golden_order;


create table usuario(
idUsuario int primary key auto_increment,
nome varchar (255),
plataforma varchar (255),
email varchar (50),
senha varchar (80)
);

create table niveis(
idNivel int auto_increment,
nivel_usuario varchar(3),
fk_user int, foreign key (fk_user) references usuario (idUsuario),
primary key (idNivel, fk_user)
);

