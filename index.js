// import fs from 'fs'
// import inquirer from 'inquirer'
// import 

//importing node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template");

//lib modules
//do I require Employee?
const Engineer = require("./lib/Engineer");
const Intern =  require("./lib/Intern");
const Manager = require("./lib/Manager");

//Building array for answers to questions 
const newStaffMemberData = [];

//Creating array object questions asked in CLI to user
const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: ["Engineer","Intern", "Manager"],
        },
    ])

    
}