const connection = require("./db/connection");
const inquirer = require("inquirer");
// const questions = require('./db/prompt');
const {
  editDepartmentQ,
  newRoleQ,
  newEmployeeQ,
  employeeUpdater,
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
        const { departmentName } = await editDepartmentQ(db);
        await editDepartment(db, departmentName);
        askQ();
        break;
      case "Add a role":
        const { title, salary, department } = await newRoleQ(db);
        await addRole(db, title, salary, department );
        askQ();
        break;
      case "Add an employee":
        const { first, last, role, manager } = await newEmployeeQ(db)
        await addEmployee(db, first, last, role, manager);
        askQ();
        break;
      case "Update an employee role":
        const { fName, lName, roles } = await employeeUpdater(db)
        await updateEmployee(db, fName, lName, roles);
        askQ();
        break;
        case 'Exit':
          console.log("Goodbye");
         process.exit();
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
