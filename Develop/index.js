// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Project Title:',
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

// Function to write README file
function writeToFile(fileName, data) {
  // Generate the README content based on the 'data' object
  const readmeContent = generateMarkdown(data);

  // Write the content to the specified file
  fs.writeFile(fileName, readmeContent, (err) => {
    if (err) {
      console.error('Error writing README file:', err);
    } else {
      console.log(`README file '${fileName}' created successfully!`);
    }
  });
}


// TODO: Create a function to initialize app
function init() {
  // Prompt the user with the questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Call the writeToFile() function to generate the README file
      writeToFile('README.md', answers);
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

// Function call to initialize app
init();