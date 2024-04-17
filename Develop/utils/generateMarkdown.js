// This function takes the inquirer answers and returns a string that can be written to a readme file
function generateMarkdown(data) {
  return `${data.license.badge}

# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Description
${data.description}

## Installation
${data.installationInstructions}

## Usage
${data.usageInformation}

## License
This project is covered under the ${data.license.label} license.

## Contributing
${data.contributionGuidelines}

## Tests
${data.testInstructions}

## Questions
[Github profile](https://github.com/${data.githubUsername})
Email me at ${data.email} if you have additional questions.
`;
}

module.exports = generateMarkdown;
