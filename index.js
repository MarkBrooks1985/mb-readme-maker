// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

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
    message: "Please enter your table of contents?",
    name: "contents",
  },
  {
    type: "input",
    message: "Any installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "Any usage intructions?",
    name: "usage",
  },
  {
    type: "checkbox",
    name: "license",
    choices: ["MIT", "GPLv3", "GPL"],
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
  },
  {
    type: "input",
    message: "Any Question based information?",
    name: "question",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    let readmeBody = generateMarkdown(response);
    writeToFile("./readme/readme.md", readmeBody);
  });
}

// Function call to initialize app
init();
