DROP DATABASE IF EXISTS  company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    departments INT,
    FOREIGN KEY (departments)
    REFERENCES departments(id)
    ON DELETE CASCADE
);

CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles INT,
    FOREIGN KEY (roles)
    REFERENCES roles(id)
    ON DELETE SET NULL
    -- manager_id INT,
    -- FOREIGN KEY (manager_id)
    -- REFERENCES manager(id)
    -- ON DELETE CASCADE
);