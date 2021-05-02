// https://www.npmjs.com/package/inquirer
// Jason Glugatch "Walkthrough: Using npm Inquirer to write a READMEgenerator" https://youtu.be/LRUqN-3SrFA
// joshtronic tutorial "How To Create Interactive Command-line Prompts with Inquirer.js" https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
// "How to use Inquirer.js" https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
// "How to run for loop asynchronously with inquirer prompt" https://stackoverflow.com/questions/47665616/how-to-run-for-loop-asynchronously-with-inquirer-prompt

var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'project',
    },
    {
        type: 'input',
        message: "Please write a short description of your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installDepends',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'using',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ["MIT", "APACHE 2.0", "GNU GPL 3", "none"],
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testsCommand',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
        (err) => err ? console.error(err) : console.log('Success!') );
}

// TODO: Create a function to initialize app
function init() {

inquirer
    .prompt(questions)
    .then(data => {
        let readmeText = generateMarkdown(data);
        writeToFile('./README.md', readmeText);
    })
    .catch(err => {
        if (err.isTtyError) {
            console.log("prompt couldn't be rendered in current environment");
          // Prompt couldn't be rendered in the current environment
        } else {
            console.error(err);
          // Something else went wrong
        }
    });
}

// Function call to initialize app
init();
