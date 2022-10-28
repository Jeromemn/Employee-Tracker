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
    const results = await db.query("SELECT id, title, salary, department_id FROM roles");
    console.table(results[0]);
  };

  const allEmployees = async (db) => {
    const results = await db.query("SELECT A.first_name, A.last_name, B.first_name AS managers_name FROM employees A, employees B WHERE A.manager_id = B.id");
    console.table(results[0]);
  };

  const editDepartment = async (db, name) => {
    
    await db.query("INSERT INTO departments (department_name) VALUES (?)", [
      name,
    ]);
    console.log("You have added a new department");
  };

  const addRole = async (db, title, salary, department) => {
    await db.query("INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)",
      [title, salary, department]
    );
    console.log("You have added a new role");
  };

  const addEmployee = async (db, first, last, role, manager) => {
    // allRoles(async () => (
    //     consy answers = await
    // )
    await db.query(
      "INSERT INTO employees (first_name, last_name, roles, manager_id) VALUES (?,?,?,?)",
      [first, last, role, manager]
    );
    console.log("You have added an employee");
  };

  const updateEmployee = async (db, first, last, roles) => {
    await db.query("INSERT INTO employees (first_name, last_name, roles) VALUES (?,?,?)", [first, last, roles]);
    console.log("You have changes this employees role");
  };

  // const employeeByDepartment = async (db) => {
  //   awaitdb.query("SELECT ")
  // }

  module.exports = {
    allDepartments,
    allRoles,
    allEmployees,
    editDepartment,
    addRole,
    addEmployee,
    updateEmployee
  };