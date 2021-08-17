## Exercicios Aula 46 Aprofundado SQL

SET SQL_SAFE_UPDATES = 0;
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary float NOT NULL,
birth_date date NOT NULL,
gender VARCHAR(100) NOT NULL
);

CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
sinopse TEXT NOT NULL,
release_date date NOT NULL,
rating INT NOT NULL
);

INSERT INTO Movie (id, title, sinopse, release_date, rating)
VALUES(
"004",
"Deus é Brasileiro",
"Cansado da humanidade",
"2003-01-31",
9
);

INSERT INTO Actor ( id, name, salary , birth_date, gender)
VALUES(
"001",
"Tony Ramos",
40000,
"1948-08-25",
"male"
);

INSERT INTO Actor ( id, name, salary , birth_date, gender)
VALUES(
"002",
"Gloria Pires",
40000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Juliana Paes",
  300000,
  "1929-10-19", 
  "female"
);

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
-- ---------Exercicios----------- --

-- ALTER TABLE Actor DROP COLUMN salary;
-- Iria Apagar toda a tabela

-- B -------------------- --
-- ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- Altera todas as tabelas com gender para sex

-- A -------------------- --
-- ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- Altera todas as tabelas com sex para gender

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET gender = "female"
WHERE id = "02";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor 
WHERE
	gender = "male" AND
    salary > 100000;

SELECT MAX(salary) FROM Actor;
SELECT MIN(salary) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT SUM(salary) FROM Actor;

-- ---------Exercicios----------- --
-- A -------------------------------
-- 
-- B -------------------------------
SELECT id, name FROM Actor
ORDER BY name DESC;

-- C --------------------------------
SELECT * FROM Actor
ORDER BY salary;

-- D --------------------------------
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- E --------------------------------
SELECT AVG (salary), gender FROM Actor
GROUP BY gender;
