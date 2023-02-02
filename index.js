// Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


//Created an array of questions for user input
const questionsPrompt = () => {
  return inquirer.prompt(
        [
        {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of what your project will entail?',
        },
        {
        type: 'input',
        name: 'installation',
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
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', `Eclipse Public License 1.0`, 'MIT License', 'BSD 2-Clause "Simplified" License', `None`],
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
  ]);
};


// here the varibales for inputting the correct license will come from 
const apache= `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
const gnu = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
const mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
const bsd = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
const eclipse = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
const none = ``

// this is where the HTML is being set up for furture use when the function is called.
const generateHTMLreadme = ({projectTitle, description, installation, usage, credits, license, github, email}) => 
  `
  # ${projectTitle}


  ${inputLisenceBadge(license)}


  ## Description
      ${description}


  ## Table of Contents
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Credits](#credits)


  ## Installation
      ${installation}


  ## Usage
      ${usage}


  ## License
      This project is licensed under the: ${license}


  ## Credits
      ${credits}


##Questions
      Github Username: @${github}
      Github webpage: https://github.com/${github}
      For any additional inquiries, please email at: ${email}
`
;
   

// this function will render in the license badge that the user will have selected previously 
function inputLisenceBadge (license) {
  if (license === `Apache License 2.0`) {
    return apache
  }
  if (license === `GNU General Public License v3.0`) {
    return gnu
  }
  if (license === `Eclipse Public License 1.0`) {
    return eclipse
  }
  if (license === `MIT License`) {
    return mit
  }
  if (license === `BSD 2-Clause "Simplified" License`) {
    return bsd
  }
  if (license === `None`) {
    return none
  }
  return ``;
};


// TODO: Create a function to initialize app
const init = () => {
  questionsPrompt()
    .then((answers) => writeFile("README.md", generateHTMLreadme(answers)))
    .then(() => console.log("Sucsessfully created README.me!"))
    .catch((err) => console.log(err));
  };


// Function call to initialize app
init();