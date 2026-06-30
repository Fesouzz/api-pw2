CREATE DATABASE gerenciamento_usuarios;

USE gerenciamento_usuarios;

CREATE TABLE permissoes (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nome VARCHAR(20) NOT NULL

);


INSERT INTO permissoes(nome)
VALUES
('ADMIN'),
('EDITOR'),
('LEITOR');



CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nome VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    senha VARCHAR(255) NOT NULL,

    permissao_id INT NOT NULL,

    admin_id INT NULL,

    FOREIGN KEY (permissao_id)
        REFERENCES permissoes(id),

    FOREIGN KEY (admin_id)
        REFERENCES users(id)

);

INSERT INTO users (nome, email, senha, permissao_id, admin_id) VALUES
('Fulaninho Admin', 'fulaninho@etec.com', '567', 1, NULL);