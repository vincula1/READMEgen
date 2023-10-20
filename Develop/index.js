// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Project Description: Describe your project in a few sentences:',
    },
    {
      type: 'confirm',
      name: 'includeTableOfContents',
      message: 'Do you want to include a table of contents in your README?',
      default: true,
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation: Provide installation instructions, if any:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage: Explain how to use your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'License: Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'Other'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Contributing: Guidelines for contributors or how others can get involved:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests: Describe any tests or testing frameworks used:',
    },
    {
      type: 'input',
      name: 'additionalQuestions',
      message: 'FAQs or Additional Questions: Include any frequently asked questions or additional information: ',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
