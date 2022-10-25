-- prepopulate database 

INSERT INTO departments (department_name)
VALUES  ("Events"),
        ("Sales"),
        ("Corporate");

INSERT INTO roles (title, salary, department_id)
VALUES ("Valet", "30000", 1),
        ("Traffic director", "20000", 1),
        ("Golf Cart Driver", "20000", 1),
        ("Shuttle Driver", "20000", 1),
        ("Manager", "40000", 1),
        ("Client Rep", "60000", 2),
        ("Owner", "100000", 3),
        ("HR", "70000", 3),
        ("Trainer", "60000", 3);

INSERT INTO employees (first_name, last_name, roles, manager_id)
VALUES ("Matt", "Connors", 005, NULL),
        ("Jerome", "Nixon", 006, NULL),
        ("Ronnie", "Crone", 007, NULL);


INSERT INTO employees (first_name, last_name, roles, manager_id)
VALUES ("Ryan", "Jacobs", 001, 1),
        ("Matt", "Connors", 005, 2),
        ("KC", "Hoy", 001, 1),
        ("Tom", "Berry", 003, 1),
        ("David", "Walker", 002, 1),
        ("Danny", "Perish", 004, 1),
        ("Ronnie", "Crone", 007, NULL),
        ("Jerome", "Nixon", 006, 3),
        ("Kaitlyn", "Armstrong", 008, 3),
        ("Justin", "Trains", 009, 3);


