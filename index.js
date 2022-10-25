const connection = require("./db/connection");
const inquirer = require("inquirer");
// const questions = require('./db/prompt');
const {
  newDepartmentQ,
  newRoleQ,
  newEmployeeQ,
} = require("./db/prompt.js");

const {
  allDepartments,
  allRoles,
  allEmployees,
  editDepartment,
  addRole,
  addEmployee,
  updateEmployee
} = require("./db/query.js");

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
        "Exit",
      ],
    },
  ];



  const askQ = async () => {
    const { start } = await inquirer.prompt(initialQuestion);

    switch (start) {
      case "View all departments":
       await allDepartments(db);
        askQ();
        break;
      case "View all roles":
        await allRoles(db);
        askQ();
        break;
      case "View all employees":
        await allEmployees(db);
        askQ();
        break;
      case "Add a department":
      //   const { departmentName } =
      // await inquirer.prompt([
      //     {
      //       name: "departmentName",
      //       message: "What is the name of the Department you want to add?",
      //       type: "input"
      //     },
      //   ]);
        const { departmentName } = await newDepartmentQ(db);
        await editDepartment(db, departmentName);
        askQ();
        break;
      case "Add a role":
        await addRole(db);
        askQ();
        break;
      case "Add an employee":
        await addEmployee(db);
        askQ();
        break;
      case "Update an employee role":
        await updateEmployee(db);
        askQ();
        break;
      // case 'Exit':
      // exit();
    }
  };

  // function newDepartmentQ() {
 
//     {
//       name: "removeDepartment", 
//       message: "What department would you like to remove?",
//       type: "list",
//       choices: [
          
//       ]
//     }
    
//   ]);
// }
  askQ();
};
init();
