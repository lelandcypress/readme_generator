const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "name",
    },

    {
      type: "input",
      message: "Describe your project",
      name: "description",
    },
    {
      type: "input",
      message: "Specify any installation instructions",
      name: "install",
      default: "No installation instructions",
    },
    {
      type: "editor",
      message: "Describe the end user experience",
      name: "usage",
    },
    {
      type: "list",
      message: "Specify license",
      name: "license",
      choices: [
        "Apache",
        "Creative_Commons",
        "Eclipse",
        "GNUv3",
        "IBM",
        "MIT",
        "Mozilla",
      ],
    },

    {
      type: "input",
      message: "How should users contribute to this process?",
      name: "contribution",
    },

    {
      type: "input",
      message: "How should users conduct unit testing?",
      name: "testing",
    },

    {
      type: "input",
      message: "Enter email address",
      name: "email",
    },
    {
      type: "input",
      message: "Enter Github username",
      name: "Github",
    },
  ])
  .then((data) => {
    const filename = `${data.name}.MD`;

    const fileContent = `
    
# ${data.name}

## Table of contents

1. [Project Description](#Project_Description)
2. [Installation](#Installation_Instructions)
3. [Usage](#Usage)
4. [License](#License)
5. [Contribution](#Contribution)
6. [Tests](#Tests)
7. [Questions](#Questions)


## Project Description
${data.description}


## Installation Instructions
${data.install}


## Usage
${data.usage}


## License

${data.license}   ![${data.license}](./assets/${data.license}.svg)


## Contribution

${data.contribution}


## Tests

${data.testing}


## Questions
Got questions, or are interested in collaborating? 

Github:https://github.com/${data.Github}

Email: ${data.email}`;

    fs.writeFile(filename, fileContent, (err) =>
      err ? console.log("Try Again") : console.log("Good Job")
    );
  });
