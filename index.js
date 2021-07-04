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
      type: "editor",
      message: "Describe your project",
      name: "description",
    },
    {
      type: "editor",
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
    const filename = `${data.name.toLowerCase().split("").join("")}.MD`;
    const fileContent = `# ${data.name}

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

## Contribution

## Tests

## Questions
Got questions, or are interested in collaborating? 

Github:https://github.com/${data.Github}

Email: ${data.email}`;

    fs.writeFile(filename, fileContent, (err) =>
      err ? console.log("Try Again") : console.log("Good Job")
    );
  });
