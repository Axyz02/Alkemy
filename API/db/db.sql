ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE DATABASE finances;

USE finances;

CREATE TABLE user (
id INT(11) NOT NULL  AUTO_INCREMENT,
concept VARCHAR(45) DEFAULT NULL,
amount INT(11) DEFAULT NULL,
date DATE DEFAULT NULL,
type VARCHAR(8) DEFAULT NULL,
PRIMARY KEY(id)
);

DESCRIBE user;

INSERT INTO user values
	(1,'Sueldo',100000,'2021-02-12','ingreso'),
    (2,'Vacaciones',10000,'2021-02-12','egreso'),
    (3,'Alquiler',10000,'2021-02-12','egreso');

SELECT * FROM user;