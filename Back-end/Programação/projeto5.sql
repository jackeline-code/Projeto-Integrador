create database db_projeto5;

use db_projeto5;

create table tb_tema(
id bigint auto_increment,
tema varchar(100) not null,
descricao varchar(255),
quantidadePostes int,
primary key (id));

create table tb_usuario(
id bigint auto_increment,
nomeCompleto varchar (255) not null,
email varchar (255) not null, -- unique
senha varchar (255) not null,
genero varchar (50) not null,
dataNascimento date not null,
fotoPerfil varchar (255),
numTelefone varchar (20) not null,
endereco varchar (500) not null,
primary key (id));

create table tb_postagem(
id bigint auto_increment,
postagem text not null,
dataPostagem datetime not null,
titulo varchar (255) not null,
likes int,
midia varchar (255),
usuario_id bigint,
categoria_id bigint,
primary key (id),
foreign key (usuario_id) references tb_usuario(id),
foreign key (categoria_id) references tb_categoria(id));

insert into tb_categoria(tema,descricao) values ("programacao", "java");
insert into tb_usuario(nomeCompleto,email,senha,genero,dataNascimento,numTelefone) 
values ("Renan Godinho", "avelinaJaqueline@gmail.com", "12345", "Outros", "1990-03-23", "234162788188"); 
insert into tb_postagem(postagem,dataPostagem,titulo,usuario_id,categoria_id) values ("testessssss", "2021-05-09", "testa tudo",1,1);

select * from tb_usuario;
select * from tb_postagem;
select * from tb_postagem inner join tb_categoria on tb_postagem.categoria_id = tb_categoria.id
 inner join tb_usuario on tb_usuario.id = tb_postagem.usuario_id;
 
 update tb_categoria set quantidadePostes = ( select count(*) from tb_postagem
 where categoria_id =2) where id = 2;
 
 select * from tb_categoria;
