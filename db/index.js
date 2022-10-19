//  different api method run crud in object format 

const inquirer = require("inquirer")

const newDepartmentQ = await inquirer.prompt([
    {
        name: "addDepartment",
        message: "What is the name of the Department you want to add?",
        type: "input",

    }
])

const newRoleQ = await inquirer.prompt([
    {
        name: "roleName",
        message: "What is the new role?",
        type: "input", 
    }
])
 
const newEmployeeQ = await inquirer.prompt([
    {
        name: "addEmplyee",
        message: "What is the Employees first name?",
        type: "input",
    }
])
