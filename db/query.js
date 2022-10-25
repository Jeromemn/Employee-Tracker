// contain the API methods we might run (CRUD) in object format
// the main index file should be able to read into this object and call the  fifferent methods on it as needed to reflect the request of the user

const allDepartments = async (db) => {
    const results = await db.query(
      "SELECT department_name AS department_name, id as department_id FROM departments;"
    );

    // API.readAllDepartments
    // const results = await API.readAllDepartments('departments');
    console.table(results[0]);
  };

  const allRoles = async (db) => {
    const results = await db.query("SELECT * FROM roles ;");
    console.table(results[0]);
  };

  const allEmployees = async (db) => {
    const results = await db.query("SELECT A.first_name, A.last_name, A.id, A.manager_id, B.first_name AS managers_name FROM employees A, employees B WHERE A.manager_id = B.id");
    console.table(results[0]);
  };

  const addDepartment = async (db, name) => {
    
    await db.query("INSERT INTO departments (department_name) VALUES (?)", [
      name,
    ]);
    console.log("You have added a new department");
  };

  const addRole = async (db, title, salary, department) => {
    await db.query(
      "INSERT INTO roles (title, salary, department) VALUES (?,?,?,?",
      [title, salary, department]
    );
    console.log("You have added a new role");
  };

  const addEmployee = async (db, first, last, role, manager) => {
    // allRoles(async () => (
    //     consy answers = await
    // )
    await db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?,?,?,?",
      [first, last, role, manager]
    );
    console.log("You have added an employee");
  };

  const updateEmployee = async (db, role) => {
    await db.query("INSERT INTO employee (role_id) VALUES ?,", [role]);
    console.log("You have changes this employees role");
  };

  module.exports = {
    allDepartments,
    allRoles,
    allEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee
  };