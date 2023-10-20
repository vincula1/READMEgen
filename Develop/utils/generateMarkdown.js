// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Other') {
    return 'This project is licensed under an **unspecified** license.';
  } else {
    const licenseLink = renderLicenseLink(license);
    return `This project is licensed under the [${license} License](${licenseLink}).`;
  }
}


// Generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
# ${data.projectDescription}

${data.includeTableOfContents ? '## Table of Contents' : ''}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseBadge}

${licenseSection}

For more details, please see the [full license](${licenseLink}).

## Contributing
${data.contributing}

## Tests
${data.tests}

## FAQs or Additional Questions
${data.additionalQuestions}
`;
}

module.exports = generateMarkdown;
