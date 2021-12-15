CREATE DATABASE IF NOT EXISTS guestlist;
USE guestlist;
CREATE TABLE guests(
id int NOT NULL AUTO_INCREMENT,
first_name varchar(40) NOT NULL,
last_name varchar(40) NOT NULL,
table_number int NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO guests (first_name, last_name, table_number) VALUES ('Jimmy', 'Billibob', 3);