// packages needed
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Generates the questions needed

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter your projects description?",
    name: "description",
  },
  {
    type: "input",
    message: "Any installation instructions?",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "Any usage intructions?",
    name: "usage",
  },
  {
    type: "list",
    name: "license",
    choices: ["MIT", "GPLv3", "GPL", "No License"],
    message: "Pick your License.",
  },
  {
    type: "input",
    message: "Any Contributing information?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Any testing information?",
    name: "test",
    default: "npm test",
  },
  {
    type: "input",
    message: "Any Question based information?",
    name: "question",
  },
];

// Writes the readme
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// intializes the application
function init() {
  inquirer.prompt(questions).then((response) => {
    let readmeBody = generateMarkdown(response);
    writeToFile("./assests/readme/readme.md", readmeBody);
  });
}

// Function call to initialize app
init();
