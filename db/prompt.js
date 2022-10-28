//  different api method run crud in object format
// const connection = require('/db/connection')

const inquirer = require("inquirer");
const db = require("./connection");
const { allEmployees } = require("./query");



// maybe edit 
const editDepartmentQ = async (db) => {
  // query db, store departments into array
  const results = await db.query("SELECT department_name, id as department_id FROM departments;");
  // take array of objects and convert to array of department names
  // console.log(results);
  const choices = results[0].map((department) => department.department_name);
  return inquirer.prompt([
    
  {
    name: "departmentName",
    message: "What is the name of the Department you want to add?",
    type: "input"
    // when: (answers) => answers.createDepartment,
  },
  // {
  //   // name: "removeDepartment", 
  //   // message: "What department would you like to remove?",
  //   // type: "list",
  //   // choices
  // }
])};

// maybe edit 
const newRoleQ = async (db) => {
  // const results = await db.query("SELECT department_name, id as department_id FROM departments;");
  // take array of objects and convert to array of department names
  // console.log(results);
  // const choices = results[0].map((department) => department.department_name);

  const roleResults = await db.query("select department_name, id FROM departments")
const choices = roleResults[0].map(({department_name, id}) => ({name: department_name, value: id}));

  return inquirer.prompt([
    
      {
        name: "title",
        message: "What is the new role?",
        type: "input"
      },
      {
        name: "salary",
        message: "What is the salary of the new role?",
        type: "input"
      },
      {
        name: "department",
        message: "What department is the new role in?",
        type: "list",
        choices
        
      },
      
    ])};
  
    
// maybe edit 
const newEmployeeQ = async (db) => {
//  const results = await db.query("SELECT first_name AS managers_name FROM employees WHERE employees_id = manager_id");
// // take array of objects and convert to array of department names
// // console.log(results);
// const choices = results[0].map((employee) => employee.employee_name);
const results = await db.query("SELECT first_name,last_name, id FROM employees;")
// const choices = results[0].map((employee) => employee.first_name)
const choices = results[0].map(({id, first_name, last_name}) => ({name: `${first_name} ${last_name}`, value: id}));

const roleResults = await db.query("select title, id FROM roles")
const roleChoices = roleResults[0].map(({id, title}) => ({name: `${title}`, value: id}));

return inquirer.prompt([
  {
    name: "first",
    message: "What is the Employees first name?",
    type: "input",
  },
  {
    name: "last",
    message: "What is the employees last name?",
    type: "input",
  },
  {
    name: "role",
    message: " What role will the emplyee be?",
    type: "list",
    choices: roleChoices
    // [
    //   "valet",
    //   "Traffic Director",
    //   "Golf Cart Driver",
    //   "Shuttle Driver",
    //   "Manager",
    //   "Client Rep",
    //   "Owner",
    //   "HR",
    //   "Trainer"
    // ]

  },
  {
    name: "manager",
    message: "Who will be this employee's manager?",
    type: "list",
    choices
  }

])};

const employeeUpdater = async (db) => {

  const roleResults = await db.query("select title, id FROM roles")
  const roleChoices = roleResults[0].map(({id, title}) => ({name: `${title}`, value: id}));

  const results = await db.query("SELECT first_name,last_name, id FROM employees;")
const choices = results[0].map(({id, first_name, last_name}) => ({name: `${first_name} ${last_name}`, value: id}));

  return inquirer.prompt([

    {
      name: "employee",
      message: "Select a employee",
      type: "list",
      choices: choices
    },
    {
      name: "newRole",
      message: "What role would you like to give this employee?",
      type: "list",
      choices: roleChoices
    }
  ])
}


module.exports = {
  editDepartmentQ,
  newRoleQ,
  newEmployeeQ,
  employeeUpdater,
}