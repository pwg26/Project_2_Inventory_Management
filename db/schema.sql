DROP DATABASE IF EXISTS inventory_db;

CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE equipment
(
id int NOT NULL AUTO_INCREMENT,
name VARCHAR(100),
description VARCHAR(100),
asset_value DECIMAL,
is_rented BOOLEAN,
location VARCHAR(100),
company_renting VARCHAR(100),
rental_rate DECIMAL,
realized_returns DECIMAL,
time_checked_out DATETIME,
time_checked_in DATETIME,
PRIMARY KEY (id)
);
SELECT * FROM equipment;

