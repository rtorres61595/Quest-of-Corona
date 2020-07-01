DROP DATABASE IF EXISTS Quest_of_Corona_db_2;
CREATE DATABASE Quest_of_Corona_db_2;
USE Quest_of_Corona_db_2;





CREATE TABLE `user` (
    `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_name` varchar(255) NOT NULL UNIQUE,
    `password` varchar(255) NOT NULL,
    PRIMARY KEY (`user_id`)
);

CREATE TABLE bad_guys

(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
    health INTEGER(30) NOT NULL,
    attack INTEGER(30) NOT NULL,
	dead BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE heroes
(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
    health INTEGER(100) NOT NULL,
    attack INTEGER(30) NOT NULL,
	heal BOOLEAN DEFAULT false,
    dead BOOLEAN DEFAULT false,
	block BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO bad_guys (name, health, attack, dead ) VALUES ("Covid Grunt", 10, 1, false);

INSERT INTO bad_guys (name, health, attack, dead ) VALUES ("Covid Monster", 10, 1, false);

INSERT INTO bad_guys (name, health, attack, dead ) VALUES ("Covid Slime", 10, 1, false);

INSERT INTO bad_guys (name, health, attack, dead ) VALUES ("Murder Hornet", 16, 2, false);

INSERT INTO bad_guys (name, health, attack, dead ) VALUES ("Covid Bat", 20, 2, false);

INSERT INTO bad_guys (name, health, attack, dead ) VALUES ("Covid Dragon", 30, 3, false);


INSERT INTO heroes (name, health, attack, heal, dead, block ) VALUES ("Covid Knight", 45, 3, false, false , false);

INSERT INTO heroes (name, health, attack, heal, dead ,block ) VALUES ("Covid Nnja", 30, 4, false, false , false);

INSERT INTO heroes (name, health, attack, heal, dead ,block ) VALUES ("Covid Mage", 40, 3, false, false , false);

INSERT INTO heroes (name, health, attack, heal, dead ,block ) VALUES ("Covid Warlock", 30, 4, false, false, false);