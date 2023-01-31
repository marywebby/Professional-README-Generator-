// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        name: 'project-title',
        message: 'What is the title of your project?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of what your project will entail?',
        },
        {
        type: 'input',
        name: 'intallation',
        message: 'How should one install your project to use it?',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'Please provide insturctions and examples for usage: ',
        },
        {
        type: 'input',
        name: 'credits',
        message: 'Please enter any collaborators or resourced you have used for this project: ',
        },
        {
        type: 'list',
        message: 'What license would you like your project to use? ',
        name: 'license', 
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License'],
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter your github URL.',
        }, 
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
        },
  ]
;



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // console.log(questions);
    inquirer.prompt(questions);
}

// Function call to initialize app
init();