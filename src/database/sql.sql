/* para workbench - local - desenvolvimento */
CREATE DATABASE monitech;
USE monitech;

CREATE TABLE equipe (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
area VARCHAR(45),
cor CHAR(1)
);

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
cargo VARCHAR(40),
FK_Gerente INT,
FOREIGN KEY (FK_Gerente) REFERENCES usuario(id),
FK_Equipe INT,
FOREIGN KEY (FK_Equipe) REFERENCES equipe(id)
);

CREATE TABLE maquina (
id INT PRIMARY KEY AUTO_INCREMENT,
processador VARCHAR(45),
espacoDisco DOUBLE(7,2),
memoriaRam DOUBLE(4,2),
coreProcessador INT,
FK_Usuario INT,
FOREIGN KEY (FK_Usuario) REFERENCES usuario(id),
hostname VARCHAR(45),
registro DATETIME
);

CREATE TABLE medida (
id INT PRIMARY KEY AUTO_INCREMENT,
porcentagemCPU DOUBLE(5,2),
qtdMemoriaRam DOUBLE(4,2),
qtdEspacoDisco DOUBLE(7,2),
registro DATETIME,
FK_Maquina INT,
FOREIGN KEY (FK_Maquina) REFERENCES maquina(id)
);

INSERT INTO usuario VALUES (null,"Admin", "admin@monitech.com", "Admin123", "Admin", null,null);
INSERT INTO usuario VALUES (null,"Victor Afonso", "victor.afonso@monitech.com", "Victor123", "backend", 2,null);

SELECT * FROM usuario;

SELECT * FROM maquina;

SELECT * FROM medida;