//  different api method run crud in object format
// const connection = require('/db/connection')

const inquirer = require("inquirer");



// maybe edit 
const editDepartment = async (db) => {
  // query db, store departments into array
  const results = await db.query("SELECT department_name, id as department_id FROM departments;");
  // take array of objects and convert to array of department names
  console.log(results);
  const choices = results[0].map((department) => department.department_name);
  return inquirer.prompt([
  {
    name: "addDepartment",
    message: "What is the name of the Department you want to add?",
    type: "input"
  },
  {
    name: "removeDepartment", 
    message: "What department would you like to remove?",
    type: "list",
    choices
  }
])};

// maybe edit 
const newRoleQ = () => 
inquirer.prompt([
  {
    name: "roleName",
    message: "What is the new role?",
    type: "input"
  },
  {
    name: "rolesalary",
    message: "What is the salary of the new role?",
    type: "input"
  },
  {
    name: "department",
    message: "What department is the new role in?",
    type: "list",
    choices: [ 
        "Events",
        "Sales",
        "Corporate"
    ]
  },

]);

// maybe edit 
const newEmployeeQ = () => inquirer.prompt([
  {
    name: "addEmplyee",
    message: "What is the Employees first name?",
    type: "input",
  },
  {
    name: "addEmployee",
    message: "What is the employees last name?",
    type: "input",
  },
  {
    name: "EmployeeRole",
    message: " What role will the emplyee be?",
    type: "list",
    choices:[
      "valet",
      "Traffic Director",
      "Golf Cart Driver",
      "Shuttle Driver",
      "Manager",
      "Client Rep",
      "Owner",
      "HR",
      "Trainer"
    ]

  },
  {
    name: "EmployeeManager",
    message: "Who will be this employee's manager?",
    type: "list",
    choices: [
      "Matt Connors",
      "Jerome Nixon ",
      "Ronnie Crone"
    ]

  }

]);


module.exports = {
  editDepartment,
  newRoleQ,
  newEmployeeQ,
}