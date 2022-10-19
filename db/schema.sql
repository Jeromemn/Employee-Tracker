DROP DATABASE IF EXISTS  company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE  department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL

);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department INT,
    FOREIGN KEY (department)
    REFERENCES department(id)
    ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY (roles)
    REFERENCES roles(id)
    ON DELETE CASCADE,
    manager_id INT, 
    FOREIGN KEY (manager)
    REFERENCES manager(id)


);