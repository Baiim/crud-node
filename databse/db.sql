-- creating a database

CREATE DATABASE crudnodejs;

--using a database

USE crudnodejs;

--creating a table

CREATE TABLE customer (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL
);

--show all tables

SHOW TABLES;

--to describe tables

describe customer;


