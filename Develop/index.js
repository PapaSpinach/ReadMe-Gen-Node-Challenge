const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// These options are taken from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba.
// They will be used by inquirer as a list question.
// For inquirer list questions, the name key is what's shown to the user, and the value key is what gets passed as data.
const licenseOptions = [
  {
    name: 'Apache 2.0',
    value: {
      label: 'Apache 2.0',
      badge:
        '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    },
  },
  {
    name: 'Creative Commons',
    value: {
      label: 'Creative Commons',
      badge:
        '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
    },
  },
  {
    name: 'MIT',
    value: {
      label: 'MIT',
      badge:
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    },
  },
];

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter description:',
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Pick a license:',
    choices: licenseOptions,
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your github username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// This function takes a file name and the inquirer answers and generates a readme file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);
  fs.writeFile(fileName, content).then(() =>
    console.log('Your readme has been generated')
  );
}

function init() {
  inquirer.prompt(questions).then((data) => writeToFile('./README.md', data));
}

init();
