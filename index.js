const connection = require('./db/connection');
const inquirer = require('inquirer');

const init = async () => {
    const db = await connection;

    const initialQuestion = [
        {
            name: "start",
        
            message: "Select a option",
            type: "list",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit"
            ]
        }
    ];


    const allDepartments = async () => { 
        const results = await db.query('SELECT * FROM departments;');
        console.table(results[0]);
        askQ();
    }

    const allRoles = async () => {
        const results = await db.query('SELECT * FROM roles;');
        console.table(results[0]);
        askQ();        
    }

    const allEmployees = async () => {
        const results = await db.query('SELECT * FROM employees;');
        console.table(results[0]);
        askQ();
    }

    const addDepartment = async (name) => {
        await db.query('INSERT INTO departments (department_name) VALUES (?)', [name]);
        console.log("You have added a new department");

        askQ();
    }

    const addRole = async (title, salary, department) => {
        await db.query('INSERT INTO roles (title, salary, department) VALUES (?,?,?,?', [title, salary, department]);
        console.log("You have added a new role");

        askQ();
    }

    const addEmployee = async (first, last, role, manager) => {
        await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?,?,?,?', [first, last, role, manager]);
        console.log("You have added an employee");

        askQ();
    }

    const updateEmployee = async (role) => {
        await db.query('INSERT INTO employee (role_id) VALUES ?,', [role]);
        console.log("You have changes this employees role");

        askQ();
    }

    const askQ = async () => {
        const { start } = await inquirer.prompt(initialQuestion);

        switch (start) {
            case 'View all departments':
                allDepartments();
                break;
            case 'View all roles':
                allRoles();
                break;
            case 'View all employees':
                allEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
            // case 'Exit':
                // exit();

        }
    }

    askQ();
}
init();
    