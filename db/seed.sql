-- prepopulate database 

INSERT INTO department (department_name)
VALUES  ("Events"),
        ("Sales"),
        ("Corporate");

INSERT INTO roles (title, salary, department)
VALUES ("Valet", "30000", 1),
        ("Traffic director", "20000", 1),
        ("Golf Cart Driver", "20000", 1),
        ("Shuttle Driver", "20000", 1),
        ("Manager", "40000", 1),
        ("Client Rep", "60000", 2),
        ("Owner", "100000", 3),
        ("HR", "70000", 3),
        ("Trainer", "60000", 3);

INSERT INTO employee (first_name, last_name, roles,)
VALUES ("Ryan", "Jacobs", 001),
        ("Matt", "Connors", 005),
        ("KC", "Hoy", 001),
        ("Tom", "Berry", 003),
        ("David", "Walker", 002),
        ("Danny", "Perish", 004),
        ("Ronnie", "Crone", 007),
        ("Jerome", "Nixon", 006),
        ("Kaitlyn", "Armstrong", 008),
        ("Justin", "Trains", 009);


