const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project named?",
      name: "name",
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split("").join("")}.MD`;
    const projectName = `### ${data.name}

## Table of Contents

1. [Project Description](Project Description)
2. Installation
3. Usage
4. License
5. Contributing
6. Tests
7. Questions

## Project Description <a name = "Project Description"></a>

## Installation Instructions

## Usage

## License

## Contributing

## Tests;`;
    fs.writeFile(filename, projectName, (err) =>
      err ? console.log("Try Again") : console.log("Good Job")
    );
  });
