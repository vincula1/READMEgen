const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Function to prompt the user with questions
function promptUser() {
  return inquirer.prompt(questions);
}

// Function to generate README content
function generateReadme(data) {
  const tableOfContents = data.includeTableOfContents ? '[Table of Contents]' : '';

  const readmeContent = `
# ${data.projectDescription}

${tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

## Contributing
${data.contributing}

## Tests
${data.tests}

## FAQs or Additional Questions
${data.additionalQuestions}
`;

  return readmeContent;
}

// Function to write README file
function writeToFile(fileName, data) {
  const readmeContent = generateReadme(data);

  fs.writeFile(fileName, readmeContent, (err) => {
    if (err) {
      console.error('Error writing README file:', err);
    } else {
      console.log(`README file '${fileName}' created successfully!`);
    }
  });
}

// Function to initialize the application
function init() {
  promptUser()
    .then((userData) => {
      const fileName = 'README.md';
      writeToFile(fileName, userData);
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}

// Call the init function to start the application
init();
