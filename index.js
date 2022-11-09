const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./config/connection');


//inital prompts
const question = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'questions',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View ALL Employees',
                'View ALL Department',
                'View ALL Roles',
                'Add an Employee',
                'Add a Department',
                'Add a Role',
                'Update an Employee Role',
                'Exit Prompts'
            ]
        });

        switch (answer.question) {
            case 'View ALL Employees':
                employeeView();
                break;

                case 'View ALL Departments':
                    departmentView();
                    break;

                case 'View ALL Roles':
                    roleView();
                    break;

                case 'Add an Employee':
                    employeeAdd();
                    break;

                case 'Add a Department':
                    departmentAdd();
                    break;

                case 'Add a role':
                    roleAdd();
                    break;

                case 'Update an Employee Role':
                    employeeUpdate();
                    break;

                case 'Exit Prompt':
                    connection.end();
                    break;
        };
    } catch (err) {
        console.log(err);
        question();
    };

}



//make SQL functions for each choice

//view a department  GET
//view a role   GET
//view employee  GET
//add a department    POST
//add a role    POST
//add an employee   POST
//update an employess   PUT